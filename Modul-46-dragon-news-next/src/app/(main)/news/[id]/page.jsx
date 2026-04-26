import RightSidebar from "@/component/homePage/RightSidebar";
import { getNewsDetails } from "@/lib/data";
import NewsPage from "@/component/newsPage/NewsDetailsPage";

export const metadata = {
  title: "Dragon News - News Details",
  description:
    "Dragon News is a news website that provides the latest news and updates on various topics, including technology, sports, entertainment, and more. Stay informed with Dragon News and stay up-to-date with the latest news from around the world.",
  keywords:
    "news, latest news, technology news, sports news, entertainment news, Dragon News, news website, news updates, breaking news, world news, local news",
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetails(id);
  return (
    <div className="bg-[#f3f3f3] min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Side */}
        <NewsPage news={news} />

        {/* Right Side */}
        <div className="md:col-span-3 space-y-6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
