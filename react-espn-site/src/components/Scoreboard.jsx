import { useState, useEffect, useContext } from "react";
import ActiveSportContext from "../contexts/ActiveSport";

export default function Scoreboard() {
  //Const variable that can be changed
  const [data, setData] = useState();
  const sportContext = useContext(ActiveSportContext);

 
  //Runs when component loads initially
  useEffect(() => {
    let url = "baseball/mlb"
    if (sportContext.currentSport == "Football"){
      url = "football/nfl";
    } else if (sportContext.currentSport == "Soccer"){
      url = "soccer/fifa.world"
    }
    fetch(
      `https://site.api.espn.com/apis/site/v2/sports/${url}/scoreboard`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [sportContext]);
 
  return (
    <div style={{display: "flex", overflow: "auto"}}>
      {data &&
        data.events.map((e, i) =>
            <Competition key={i} competition={e}></Competition>
        )
      }
    </div>
  );
}

function Competition({ competition }) {
  const team1 = competition.competitions[0].competitors[0];
  const team2 = competition.competitions[0].competitors[1];

  return (
    <div
      style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black"}}>
      <h5>Final</h5>

      <Team team={team1} />
      <Team team={team2} />
    </div>
  );
}

function Team({ team }) {
  return (
    <div style={{display: "flex", alignItems: "center", gap: "1em", borderBottom: "1px solid black", padding: "0 1em"}}>
      <h3>{team.team.abbreviation}</h3>

      <img style={{ width: "40px", height: "auto" }} src={team.team.logo} className="logo"alt=""/>

      <h3>{team.score}</h3>
    </div>
  );
}