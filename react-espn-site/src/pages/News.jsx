import { useState, useEffect } from "react";
export default function News() {
  //Const variable that can be changed
  const [data, setData] = useState([]);

  //Runs when component loads initially
  useEffect(() => {
    fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.articles);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>ESPN MLB News</h1>
        <div>
          {data.map((article, index) => (
            <div key={index}>
              <img src={article.images?.[0]?.url} alt={article.headline} />
              <div>
                <h2>{article.headline}</h2>
                <p>{article.description}</p>
                <a href={article.links.web.href}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
