import BookingCard from "@/component/BookingCard";
import { DeleteAlert } from "@/component/DeleteAlert";
import { EditModal } from "@/component/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  const { imageUrl, price, destinationName, duration, country, description } =
    data;
  return (
    <>
      <div className="max-w-7xl mx-auto mb-5">
        <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
          <EditModal data={data} />
          <DeleteAlert data={data} />
        </div>
        <Image
          className="w-full h-100 object-cover"
          alt={destinationName}
          src={imageUrl}
          height={500}
          width={800}
        />

        <div className="grid md:grid-cols-2 gap-2">
          <div className="p-2 mt-5">
            <div className="flex items-center gap-1">
              <LuMapPin /> <span>{country}</span>
            </div>
            <div className="flex justify-between">
              <div>
                <div>
                  <h2 className="text-xl font-bold">{destinationName}</h2>
                </div>
                <div className="flex gap-1 items-center">
                  <FaRegCalendar /> {duration}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold">$ {price}</h3>
              </div>
            </div>

            <h1 className="mt-10 text-2xl font-bold">Overview</h1>

            <p>{description}</p>
          </div>
          <BookingCard data={data} />
        </div>
      </div>
    </>
  );
};

export default DestinationDetailsPage;
