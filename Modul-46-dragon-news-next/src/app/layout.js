import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description:
    "Dragon News is a news website that provides the latest news and updates on various topics, including technology, sports, entertainment, and more. Stay informed with Dragon News and stay up-to-date with the latest news from around the world.",
  keywords:
    "news, latest news, technology news, sports news, entertainment news, Dragon News, news website, news updates, breaking news, world news, local news",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} font-sans min-h-screen bg-base-200 text-base-content overflow-x-hidden relative h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
