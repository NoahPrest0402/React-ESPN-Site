import { useState, useEffect } from "react";
export default function News(){

      //Const variable that can be changed
      const [data, setData] = useState();
     
      //Runs when component loads initially
      useEffect(() => {
        fetch(
          `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news`
        )
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      }, []);
     
      return (
        <>
          <h1>News</h1>
          {data &&
            <div>
                {JSON.stringify(data)}
            </div>
          }
        </>
      );

}