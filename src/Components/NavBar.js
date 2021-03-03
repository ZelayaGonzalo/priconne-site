import {Link, useRouteMatch} from "react-router-dom";
import {isMobile} from "react-device-detect";

function NavBar(){
    let { path, url } = useRouteMatch();
    return(
        <nav className={isMobile ? "nav-bar nav-mobile" :"nav-bar" }>
                <ul className="links-container">
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><Link to="/Home">Home</Link></div>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>Events</a></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><Link to={`${url}/events-info`}>Info</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/past-events`}>Past</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/upcoming-events`}>Upcoming</Link></div></li>
                            <li className="section"><div className="link-button"><Link>Schedule</Link></div></li>
                        </ul>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>Tierlist</a></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><Link to="/table" target="_blank">Tierlist</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-disclaimer`}>Disclaimer</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-tutorial`}>Tutorial</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-changelog`}>Changelog</Link></div></li>
                        </ul>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>More</a></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><a>Game Updates</a></div></li>
                            <li className="section"><div className="link-button"><a>Guides</a></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-disclaimer`}>Useful Links</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-tutorial`}>Official Links</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}/tierlist-changelog`}>About</Link></div></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar