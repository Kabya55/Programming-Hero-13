import HomeManeContent from "@/component/homePage/HomeManeContent";
import LeftSidebar from "@/component/homePage/LeftSidebar";
import RightSidebar from "@/component/homePage/RightSidebar";
import { getCategories, getCategoriesId } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News - News Category",
  description:
    "Dragon News is a news website that provides the latest news and updates on various topics, including technology, sports, entertainment, and more. Stay informed with Dragon News and stay up-to-date with the latest news from around the world.",
  keywords:
    "news, latest news, technology news, sports news, entertainment news, Dragon News, news website, news updates, breaking news, world news, local news",
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getCategoriesId(id);
  //   const news = await getCategoriesId("03");

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-8 my-[60px]">
        {/* Left Sidebar */}
        <LeftSidebar categories={categories} activeId={id} />

        {/* Main Content */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Dragon News Home</h2>
          <HomeManeContent news={news} />
        </div>

        {/* Right Sidebar */}
        <div>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default NewsCategoryPage;
