import {Link, useRouteMatch} from "react-router-dom";
import {isMobile} from "react-device-detect";

function NavBar(){
    let { path, url } = useRouteMatch();
    return(
        <nav className={isMobile ? "nav-bar nav-mobile" :"nav-bar" }>
                <ul className="links-container">
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><Link to="/">Home</Link></div>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>Events</a></div>
                        <ul className="section-container">
                           {/* <li className="section"><div className="link-button"><Link to="/timeline" target="_blank">Timeline  <i className="fas fa-external-link-alt"></i></Link></div></li>*/}
                            <li className="section"><div className="link-button"><Link to={`/events-disclaimer`}>Disclaimer</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/events-info`}>Info</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/past-events`}>Past</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/upcoming-events`}>Upcoming</Link></div></li>
                        </ul>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>Tierlist</a></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><a href="https://zelayagonzalo.github.io/priconne-tierlist" target="_blank">Tierlist<i className="fas fa-external-link-alt"></i></a></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}tierlist-disclaimer`}>Disclaimer</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}tierlist-tutorial`}>Tutorial</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`${url}tierlist-changelog`}>Changelog</Link></div></li>
                        </ul>
                    </li>
                    <li className="link-to link-to-desktop">
                        <div className="link-button"><a>More</a></div>
                        <ul className="section-container">
                            <li className="section"><div className="link-button"><Link to={`/game-updates`}>Game Updates</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/guides`}>Guides</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/useful-links`}>Useful Links</Link></div></li>
                            <li className="section"><div className="link-button"><Link to={`/about`}>About</Link></div></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar