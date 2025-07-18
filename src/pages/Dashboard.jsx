import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState({ company: "Tweets", metrics: [] });
  const [latestMetrics, setLatestMetrics] = useState({});

  const tweets = [
    {
      name: "Donald Trump",
      handle: "@realDonaldTrump",
      date: "4/6/2018",
      content:
        "China has been taking advantage of the United States on Trade for many years... There will be great and fast economic retaliation.",
      retweets: "12.5K",
      likes: "8.9K",
      badge: "Policy"
    },
    {
      name: "Paul Krugman",
      handle: "@paulkrugman",
      date: "5/10/2018",
      content:
        "The steel tariffs are a textbook example of how protectionism hurts the economy. Higher costs for manufacturers will hurt American workers and consumers.",
      retweets: "9.1K",
      likes: "11.3K",
      badge: "Analysis"
    },
    {
      name: "Janet Yellen",
      handle: "@SecYellen",
      date: "6/10/2025",
      content:
        "The administration remains committed to balancing global trade fairness and protecting American innovation. #TariffStrategy",
      retweets: "6.7K",
      likes: "14.2K",
      badge: "Official Statement"
    },
    {
      name: "Elon Musk",
      handle: "@elonmusk",
      date: "7/2/2025",
      content:
        "New tariffs on vehicle parts are extremely inefficient and will slow down innovation across the entire auto industry.",
      retweets: "15.8K",
      likes: "22.1K",
      badge: "Industry"
    },
    {
      name: "Catherine Rampell",
      handle: "@crampell",
      date: "7/14/2025",
      content:
        "Trade policy decisions should be based on data, not emotions. We risk alienating allies and raising prices across the board.",
      retweets: "4.2K",
      likes: "9.4K",
      badge: "Commentary"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between items-start w-full">
          {/* Main Content */}
          <div className="flex-1 mr-6">
            <div className="flex gap-0 mb-6 border border-gray-200 rounded-lg overflow-hidden w-full max-w-full">
              <button className="flex-1 bg-white text-black px-6 py-2 text-center text-sm font-medium">
                Article Summaries
              </button>
              <button className="flex-1 bg-gray-200 text-black px-6 py-2 text-center text-sm font-medium">
                Impact Analysis
              </button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold">Latest Articles & Analysis</h2>
                <p className="text-sm text-gray-500 ml-0">10 of 10 articles</p>
              </div>
              <div className="text-right">
                <h2 className="text-lg font-semibold">Advanced Filters</h2>
              </div>
            </div>

            <img
              src="/images/news-reel-1.png"
              alt="News Section 1"
              className="rounded-xl w-full mb-6 border border-gray-200 shadow-sm"
            />
            <img
              src="/images/news-reel-2.png"
              alt="News Section 2"
              className="rounded-xl w-full border border-gray-200 shadow-sm"
            />
          </div>

          {/* Influential Voices */}
          <div className="hidden lg:flex flex-col gap-4 border border-gray-200 rounded-xl p-4 bg-white w-[300px] mt-8 max-h-[800px] overflow-y-auto">
            <div className="flex items-center gap-2">
              <img src="/images/x.png" alt="Twitter Logo" className="w-4 h-4" />
              <h2 className="text-lg font-semibold">Influential Voices</h2>
            </div>

            <img
              src="/images/voices-filter-box.png"
              alt="Voices Filter"
              className="rounded-md border border-gray-200"
            />

            {tweets.map((tweet, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-8 h-8 text-white flex items-center justify-center font-bold">
                    {tweet.name[0]}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 leading-none">
                      {tweet.name}
                    </p>
                    <p className="text-gray-500 text-xs">{tweet.handle}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-800 italic mb-2">{tweet.content}</p>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{tweet.date}</span>
                  <span>
                    {tweet.retweets} 🔁 {tweet.likes}
                  </span>
                </div>

                <div className="pt-2 flex justify-end">
                  <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {tweet.badge === "Policy" && "📘"}
                    {tweet.badge === "Analysis" && "📊"}
                    {tweet.badge === "Commentary" && "💬"}
                    {tweet.badge === "Official Statement" && "📢"}
                    {tweet.badge === "Industry" && "🏭"}
                    {tweet.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
