import { useState, useEffect } from "react";

export default function Baseball() {
  //Const variable that can be changed
  const [data, setData] = useState();
 
  //Runs when component loads initially
  useEffect(() => {
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  });
 
  return (
    <>
      <h1>BaseBall Scoreboard</h1>
      {data &&
        data.events.map((e) =>
            <Competition competition={e}></Competition>
        )
      }
    </>
  );
}

function Competition({competition}){
        const team1 = competition.competitions[0].competitors[0];
        const team2 = competition.competitions[0].competitors[1];
    return <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px"}}>
            <Team team={team1}></Team>
            <Team team={team2}></Team>
        </div>
    </>
}

function Team({ team }) {
    return (
        <div>
            <h3>
                {team.team.displayName}
            </h3>
            <img src={team.team.logo} className="logo" alt="" />
        </div>
    )
}