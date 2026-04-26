import BreakingNews from "@/component/shere/BreakingNews";
import Header from "@/component/shere/Header";
import Nav from "@/component/shere/Nav";
import React from "react";

export const metadata = {
  title: "Dragon News",
  description:
    "Dragon News is a news website that provides the latest news and updates on various topics, including technology, sports, entertainment, and more. Stay informed with Dragon News and stay up-to-date with the latest news from around the world.",
  keywords:
    "news, latest news, technology news, sports news, entertainment news, Dragon News, news website, news updates, breaking news, world news, local news",
};

const Mainlayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Nav />
      {children}
    </div>
  );
};

export default Mainlayout;
