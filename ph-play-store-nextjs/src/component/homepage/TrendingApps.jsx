import AppCard from "./../ui/AppCard";
import Link from "next/link";

const appsPromise = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async ({ from }) => {
  console.log(from);
  const apps = await appsPromise();

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        {from === "home" ? (
          <div className="mb-12 text-center max-w-[50%] mx-auto">
            <h2 className="font-bold text-4xl">Trending apps</h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis eos laborum tempore quis hic quod cupiditate,
              consequuntur
            </p>
          </div>
        ) : (
          <div className="mb-12 text-center max-w-[50%] mx-auto">
            <h2 className="font-bold text-4xl">All apps</h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reiciendis eos laborum tempore quis hic quod cupiditate,
              consequuntur
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.slice(0, from === "home" ? 9 : apps.length).map((app, ind) => {
          return <AppCard app={app} key={ind} />;
        })}
      </div>

      {from === "home" ? (
        <div className="text-center mt-4">
          <Link href={"/apps"}>
            <button className="btn bg-purple-500 text-white">View All</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default TrendingApps;
