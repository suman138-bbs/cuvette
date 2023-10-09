import style from "./news.module.css";
import { weatherApiKey } from "../../utils/apikey";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${weatherApiKey}`
      );
      const data = await response.json();
      console.log(data?.articles[0]?.title);
      setNews(data?.articles[0]);
    };
    getNews();
  }, []);
  return (
    <div>
      <div>
        <h1>{news?.title}</h1>
      </div>
      <div>
        <p>{news?.description}</p>
      </div>
    </div>
  );
};

export default News;
