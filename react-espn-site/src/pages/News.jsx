import { useState, useEffect, useContext } from "react";
import sportLinks from "../helpers/getSportLink";
import ActiveSportContext from "../contexts/ActiveSport";
import "../App.css";
export default function News() {
  const [data, setData] = useState([]);
  const sportContext = useContext(ActiveSportContext);
  useEffect(() => {
    let url = sportLinks[sportContext.currentSport]; //"baseball/mlb"
    fetch(`https://site.api.espn.com/apis/site/v2/sports/${url}/news`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.articles);
      });
  }, [sportContext]);

  return (
    <>
      <div className="container">
        <h1>ESPN News</h1>
        <div>
          {data.map((article, index) => (
            <div key={index}>
              <img
                className="news-img"
                src={article.images?.[0]?.url}
                alt={article.headline}
              />
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
