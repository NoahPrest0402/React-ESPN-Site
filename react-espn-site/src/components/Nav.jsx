import { Link } from "react-router-dom";
import BasicButtonExample from "./Dropdown";
import Scoreboard from "./Scoreboard";
function Nav() {
    const style = {
        display: "inline-block",
        margin: "5px 10px"
    }
    return (
        <>
            <header>
                <div style={{display: "flex", alignItems:"center"}}>
                    <BasicButtonExample links={
                        [{link: "/", text: "Baseball"},
                        {link: "/football", text: "Football"},
                        {link: "/soccer", text: "Soccer"}]}>
                        </BasicButtonExample>
                    {/* <Link style={style} to="/">
                        Baseball
                    </Link>
                    <Link style={style} to="/football">
                        Football
                    </Link>
                    <Link style={style} to="/soccer">
                        Soccer
                    </Link> */}
                    <Scoreboard></Scoreboard>
                </div>
                <nav style={{"backgroundColor": "black"}}>
                        <ul style={{"listStyleType": "none", display: "flex", justifyContent:"space-around", color: "white"}}>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/teams">Teams</Link></li>
                        </ul>
                </nav>
            </header>
        </>
    );
}
export default Nav;
