import logo from './Hatchling.png';
import { Link } from "react-router-dom";
export default function Navbar(){
    return (
            <nav className="nav">
                <div id="Icon">
                  <img src={logo} alt="Logo" className="logo"/>
                  <a href="/" className="site-title" >Hatchling</a>
                </div>
                <ul>
                    <li>
                        <Link to="/" className="home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Characters" className="characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/Help" className="help">Help</Link>
                    </li>
                    <li>
                        <Link to="/About" className="about">About</Link>
                    </li>
                </ul>
            </nav>
    );
}
