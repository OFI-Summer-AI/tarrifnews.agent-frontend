import React from "react";

export default function NavBar() {
  return (
    <div className="bg-[#0B0B17] border-b border-gray-800 px-6 py-6 text-sm text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 font-semibold text-3xl text-white">
            <img
              src="/images/logo.png"
              alt="status icon"
              className="w-9 h-9 inline-block"
            />
            Tariffs & Trade Policy Tracker
          </div>
          <div className="flex gap-4 items-center text-xs text-gray-400">
            <span>🚗 Automotive Industry</span>
            <span>📊 157 Articles Tracked</span>
            <span>🕒 Last updated: 10:55 CET, July 17, 2025</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search articles, policies, or keywords..."
              className="px-4 py-2 border border-gray-700 rounded-md w-80 text-sm bg-[#18182F] text-white placeholder-gray-400"
            />
            <select className="border border-gray-700 px-3 py-2 rounded-md text-sm bg-[#18182F] text-white">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>

          {/* Quick Filters */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium items-center">
            <span className="text-xs font-semibold text-gray-400 mr-2">Quick Filters:</span>
            <span className="bg-[#2A2A3D] px-3 py-1 rounded-full text-white">
              All News <span className="ml-1 font-semibold">157</span>
            </span>
            <span className="bg-[#18182F] px-3 py-1 rounded-full text-white">High Impact 42</span>
            <span className="bg-[#18182F] px-3 py-1 rounded-full text-white">Trade War 38</span>
            <span className="bg-[#18182F] px-3 py-1 rounded-full text-white">China Related 29</span>
            <span className="bg-[#18182F] px-3 py-1 rounded-full text-white">Steel & Aluminum 23</span>
            <span className="bg-[#18182F] px-3 py-1 rounded-full text-white">Agriculture 18</span>
          </div>
        </div>

        {/* Summary Strip */}
        <div className="mt-6 bg-[#18182F] border border-gray-700 rounded-md px-4 py-3 flex justify-between text-xs text-gray-300">
          <span>🟢 42 High Impact Articles</span>
          <span>🔻 38 Trade War Updates</span>
          <span>🌍 12 Countries Affected</span>
          <span className="ml-auto text-gray-500">Data refreshed every 15 minutes</span>
        </div>
      </div>
    </div>
  );
}