import logo from './Hatchling.png';

export default function Navbar(){
    return (
            <nav className="nav">
                <div id="Icon">
                  <img src={logo} alt="Logo" className="logo"/>
                  <a href="/" className="site-title" >Hatchling</a>
                </div>
                <ul>
                    <li>
                        <a href="/Home" className="home">Home</a>
                    </li>
                    <li>
                        <a href="/Characters" className="characters">Characters</a>
                    </li>
                    <li>
                        <a href="/Help" className="help">Help</a>
                    </li>
                    <li>
                        <a href="/About" className="about">About</a>
                    </li>
                </ul>
            </nav>
    );
}
