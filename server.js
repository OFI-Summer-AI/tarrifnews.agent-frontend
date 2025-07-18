// server.js
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors()); // Allow requests from Vite dev server

app.get('/api/fetch-company-news', async (req, res) => {
  try {
    const company = req.query.company || 'ofi';
    const apiKey = process.env.NEWSAPI_KEY;

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${company}&sortBy=publishedAt&pageSize=5&apiKey=${apiKey}`
    );

    const articles = response.data.articles.map(a => ({
      title: a.title,
      sentiment: "neutral", // placeholder — replace later with LLM analysis
      confidence: 0.9,
      summary: a.description,
      keyTakeaways: [], // can later be added using LLM
      sentimentReasons: [],
      source: {
        url: a.url,
        site: a.source.name,
        trust: Math.floor(Math.random() * 10 + 90) + "%",
      },
    }));

    res.status(200).json({ articles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'News fetch failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Express API running: http://localhost:${PORT}`);
});
