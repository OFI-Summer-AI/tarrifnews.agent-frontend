import React, { useEffect, useState } from "react";

export default function NewsDetail() {
  const [articles, setArticles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const sentimentColors = {
    good: "text-green-400",
    bad: "text-red-400",
    regular: "text-yellow-300",
  };

  useEffect(() => {
    async function fetchCompanyNews(company = "Apple") {
      try {
        const response = await fetch(`http://localhost:8000/sentiment?company=${company}`);
        const data = await response.json();

        if (data.articles) {
          const formatted = data.articles.map((article) => ({
            title: article.content.title,
            description: article.content.description,
            url: article.url,
            source: article.source,
            sentiment: article.sentimentanalysis.category,
            keyTakeaways: [
              "Example takeaway 1",
              "Example takeaway 2",
              "Example takeaway 3",
            ],
          }));
          setArticles(formatted);
        } else {
          setArticles([]);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanyNews();
  }, []);

  if (loading) return <div className="text-white p-10">Loading news...</div>;
  if (articles.length === 0) return <div className="text-white p-10">No news found.</div>;

  const selected = articles[selectedIndex];

  return (
    <div className="flex text-white p-8 gap-6 max-h-screen overflow-hidden bg-[#0f172a]">
      {/* Left Sidebar */}
      <div className="w-1/4 space-y-6">
        <div className="bg-[#1e293b] p-4 rounded shadow">
          <h3 className="text-sm font-bold mb-1">📄 Article Source</h3>
          <p className="text-sm italic text-gray-300">{selected.source}</p>
          <a
            href={selected.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline break-all"
          >
            {selected.url}
          </a>
          <p className="text-green-400 mt-2 text-xs">Trust Score: 91% ⭐⭐⭐⭐⭐</p>
        </div>

        <div className="bg-[#1e293b] p-4 rounded shadow space-y-2">
          <h3 className="text-sm font-bold mb-2">🛠 Tools</h3>
          <p className="text-sm">🔑 Keyword Analysis</p>
          <p className="text-sm">📈 Sentiment History</p>
          <p className="text-sm">🧠 LLM Summary</p>
          <p className="text-sm italic text-gray-400">More coming soon…</p>
        </div>

        <div className="bg-[#1e293b] p-2 rounded shadow max-h-[300px] overflow-y-scroll">
          <h3 className="text-sm font-bold mb-2 pl-2">📰 More News</h3>
          {articles.map((article, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`p-2 m-1 rounded cursor-pointer ${
                idx === selectedIndex
                  ? "bg-blue-800"
                  : "hover:bg-blue-900 transition"
              }`}
            >
              <p className="text-sm font-medium">{article.title.slice(0, 50)}...</p>
              <p className={`text-xs ${sentimentColors[article.sentiment]}`}>
                {article.sentiment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Panel */}
      <div className="w-3/4 space-y-6 overflow-y-scroll pr-4">
        <div className="bg-[#1e293b] p-6 rounded shadow border-l-4 border-green-500">
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <p className={`mt-2 italic ${sentimentColors[selected.sentiment]}`}>
            ✅ {selected.sentiment} Sentiment{" "}
            <span className="text-xs text-gray-400">(based on news analysis)</span>
          </p>
        </div>

        <div className="bg-[#1e293b] p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">📝 Summary</h3>
          <p>
            Exceptional performance in consumer segments led to strong quarterly results,
            boosting investor confidence.
          </p>
        </div>

        <div className="bg-[#1e293b] p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">📘 Full Article</h3>
          <p>{selected.description || "No detailed description available."}</p>
        </div>

        <div className="bg-[#1e293b] p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">📌 Key Takeaways</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {selected.keyTakeaways.map((take, i) => (
              <li key={i}>{take}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1e293b] p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">
            💡 Why this article is marked as {selected.sentiment}
          </h3>
          <ul className="list-disc list-inside text-sm text-green-400 space-y-1">
            <li>Strong investor confidence in management strategy</li>
            <li>Customer demand exceeded forecasts</li>
            <li>Positive growth in core sectors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
