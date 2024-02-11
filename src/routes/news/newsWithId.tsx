// news.tsx
// Ojos Project
// 
// Controls the "News" aspect of the website.
import { useLoaderData } from "react-router-dom";
import { NewsArticle } from "./backend";
import Markdown from 'react-markdown';
import Layout from "../../components/Layout";
import "../../styles/newsWithId.css"

export default function News() {
  const { news } = useLoaderData() as {news: NewsArticle};

  return (
      <Layout>

      <div className="join-us-body">
        <div className="join-us-container">
          <h1>{news.title}</h1>

          <p>by {news.author}</p>
          <p>{new Date(news.date*1000).toLocaleDateString("PST", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })}</p>
          <br></br>

          <div className="news-image">
            <img src={news.imageLocation}></img>
          </div>

          <p>{news.description}</p>

          <Markdown>{news.contentInMarkdown}</Markdown>
        </div>
      </div>
    </Layout>
  )
}
