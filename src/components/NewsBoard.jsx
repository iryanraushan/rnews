import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c65a206c27d34269a641f31c75c47c19`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-3 text-white">
        Latest <span className="badge bg-danger ">news</span>
      </h2>

      {articles?.map((news, index) => {
        if (news != null)
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              author={news.author}
            />
          );
      })}
    </div>
  );
};

export default NewsBoard;
