import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";

function NavBar(){
    return(
        <nav className={isMobile ? "nav-bar nav-mobile" :"nav-bar" }>
                <ul className="links-container">
                    <li className="link-to">
                        <div className="link-button"><Link to="/Home">Home</Link></div>
                    </li>
                    <li className="link-to">
                        <div className="link-button"><Link to="/Events">Events?</Link></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><a>Info</a></div></li>
                            <li className="section"><div className="link-button"><a>Past</a></div></li>
                            <li className="section"><div className="link-button"><a>Upcoming</a></div></li>
                        </ul>
                    </li>
                    <li className="link-to">
                        <div className="link-button"><Link to="/table">Tierlist</Link></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><a>Disclaimer</a></div></li>
                            <li className="section"><div className="link-button"><a>Tutorial</a></div></li>
                            <li className="section"><div className="link-button"><a>Tierlist</a></div></li>
                        </ul>
                    </li>
                    <li className="link-to">
                        <div className="link-button"><Link to="/Events">About</Link></div>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar