import React from "react";

export default function NavBar() {
  return (
    <div className="bg-[#0B0B17] border-b border-gray-800 px-8 py-6 text-sm text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 font-bold text-[30px] text-white">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="status icon"
              className="w-10 h-10 inline-block"
            />
            Tariffs & Trade Policy Tracker
          </div>
          <div className="flex gap-6 items-center text-sm text-gray-400">
            <span>🚗 Automotive Industry</span>
            <span>📊 157 Articles Tracked</span>
            <span>🕒 Last updated: 10:55 CET, July 17, 2025</span>
          </div>
        </div>

        {/* Filters and Quick Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search articles, policies, or keywords..."
              className="px-4 py-2 border border-gray-700 rounded-md w-[30rem] text-sm bg-[#18182F] text-white placeholder-gray-400"
            />
            <select className="border border-gray-700 px-3 py-2 rounded-md text-sm bg-[#18182F] text-white">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-400 mr-2">Quick Filters:</span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">All News <span className="ml-1 font-bold">157</span></span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">High Impact <span className="ml-1 font-bold">42</span></span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">Trade War <span className="ml-1 font-bold">38</span></span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">China Related <span className="ml-1 font-bold">29</span></span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">Steel & Aluminum <span className="ml-1 font-bold">23</span></span>
            <span className="bg-[#2A2A3D] px-4 py-1.5 rounded-full text-white">Agriculture <span className="ml-1 font-bold">18</span></span>
          </div>
        </div>

        {/* Summary Strip */}
        <div className="mt-6 bg-[#18182F] border border-gray-700 rounded-md px-6 py-3 flex justify-between items-center text-sm text-white">
          <div className="flex gap-6">
            <span>📈 42 High Impact Articles</span>
            <span>📉 38 Trade War Updates</span>
            <span>🌐 12 Countries Affected</span>
          </div>
          <span className="text-gray-400 ml-auto">Data refreshed every 15 minutes</span>
        </div>
      </div>
    </div>
  );
}
