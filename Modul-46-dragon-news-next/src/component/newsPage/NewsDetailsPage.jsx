import Image from "next/image";
import Link from "next/link";

const NewsPage = ({ news }) => {
  return (
    <>
      <div className="md:col-span-9">
        <h2 className="text-xl font-bold mb-4">Dragon News</h2>

        <div className="bg-white border rounded-md p-4">
          <Image
            src={news.image_url}
            alt={news.title}
            width={600}
            height={300}
            unoptimized
            className="w-full h-[350px] object-cover rounded-md"
          />

          <h1 className="text-3xl font-bold mt-5 leading-tight">
            {news.title}
          </h1>

          <p className="text-sm text-gray-500 mt-3">
            {news.author?.published_date}
          </p>

          <p className="text-gray-600 mt-4 leading-7 text-sm">{news.details}</p>

          <Link href={`/category/${news.category_id}`}>
            <button className="mt-6 bg-pink-600 text-white px-5 py-3 rounded">
              ← All news in this category
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
