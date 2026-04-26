import Banner from "@/component/homepage/Banner";
import Stats from "@/component/homepage/Stats";
import TrendingApps from "@/component/homepage/TrendingApps";

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps from="home" />
    </>
  );
}
