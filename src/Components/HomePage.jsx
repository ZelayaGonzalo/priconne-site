import './homepage.css'
import {useEffect} from 'react'
import NavBar from './NavBar'
import {
    BrowserView,
    MobileView,
    isMobile
  } from "react-device-detect";

function HomePage(){
    useEffect(()=>{
        document.body.style.background = "url('https://i.ibb.co/5KkyhgD/forestBG.jpg') no-repeat center"
        document.body.style.backgroundSize = "cover"
        console.log("changeBackground")
        return()=>{
            document.body.style.background = "none"
            console.log("changeBackground back")
        }
    },[])

    return(
        <div className="homepage-container">
            <NavBar/>
            <section className={isMobile ? "content content-mobile": "content"}>
                <div className="main-content">
                    <div className="main-container">
                        <h2 className="main-title"> Princess Connect Re:dive EN Tierlist / Rank List </h2>
                        <img className="main-content-img" src="https://i.ibb.co/KLXVrBc/rank-1.jpg"/>
                        <p> THIS TIERLIST IS OF MY OWN OPINION. YOU CAN @ME IN MAINCORD OR DISCUSS WITH THE LIST IN MY DISCORD. <br/>Our guild Scarlet will be using this as reference for our clan battles	<br/> !!!READ AT YOUR OWN RISK!!!</p>
                        <p> ALSO NOTE!!! <br/>Some of these units are kept at R7 despite stat gain over R8 due to shortage of R8 gear needed for CB for March	AKA mages, healers asking to stay at R7 because you rather focus stamina for R8 damage dealers first and healers are used for mechanics (maho blind etc so her healing output isn't priority) </p>
                    </div>
                </div>
                <div className="side-content">
                    <div className={isMobile ? "side-container side-container-mobile" : "side-container"}>
                        <ul className="current-event-frame social">
                            <li><a href="https://discord.gg/priconne"><i class="fab fa-discord"></i></a></li>
                            <li><a href="https://www.youtube.com/c/TimaeuSS"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="https://discord.gg/UGeFfushYp"><i class="fab fa-discord"></i></a></li>
                        </ul>
                        <div className="current-event-frame">
                            <p className="current-event-title">Current Banner</p>
                            <img src="https://i.ibb.co/CJvswrV/arisa.jpg" alt="banner"/>
                        </div>
                        <div className="current-event-frame">
                            <p className="current-event-title">Current Events</p>
                            <img src="https://i.ibb.co/JF3dQkN/hatsune.jpg" alt="banner"/>
                            <img src="https://i.ibb.co/chnJYJS/groto-x2.jpg" alt="banner"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage