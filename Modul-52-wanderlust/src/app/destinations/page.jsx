import DestinationCard from "@/component/DestinationCard";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <div className="max-w-7xl mx-auto mb-5">
        <h1>Destinations</h1>
        <div className="grid md:grid-cols-4 gap-5">
          {data.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
