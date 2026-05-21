import { useState, useEffect, useContext } from "react";
import ActiveSportContext from "../contexts/ActiveSport";
import sportLinks from "../helpers/getSportLink";
export default function Scoreboard() {
  const [data, setData] = useState();
  const sportContext = useContext(ActiveSportContext);

  console.log(sportLinks)
 
  useEffect(() => {
    let url = sportLinks[sportContext.currentSport] ;//"baseball/mlb"
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
      {competition.status.type.completed && <h5>Final</h5>}

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