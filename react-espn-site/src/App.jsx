import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav"
import News from "./pages/News";
import { useState } from "react";
import ActiveSportContext from "./contexts/ActiveSport";

function App() {
  const [currentSport, setSport] = useState("Baseball");
  const activeSport = {
    currentSport: currentSport,
    setSport: setSport,
  }
  return (
    <>
    <ActiveSportContext.Provider value={activeSport}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<News/>}></Route>
      </Routes>
      </ActiveSportContext.Provider>
    </>
  )
}

export default App;


/*Create a context object that can be used to store selected sport. 
That selected sport will dictate what shows up in the nav 
scoreboard and what shows up on the team and news pages */