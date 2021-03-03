import './homepage.css'
import {useEffect,useState} from 'react'
import NavBar from './NavBar'
import {isMobile,MobileView,BrowserView} from "react-device-detect";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import eventData from '../eventData'


function HomePage(){
    const [showEvent,setShowEvent] = useState(true)
    let { path, url } = useRouteMatch();
    function changeShow(){
        setShowEvent(!showEvent)
    }

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
                    <Switch>
                        <Route exact path={path}>
                            {tierDisclaimer()}
                        </Route>
                        <Route path={`${path}/events-info`}>{eventInfo()}</Route>
                        <Route path={`${path}/past-events`}>{pastEvents(showEvent,changeShow)}</Route>
                        <Route path={`${path}/upcoming-events`}>{upcomingEvents(showEvent,changeShow)}</Route>
                        <Route path={`${path}/tierlist-tutorial`}>{tierlistTutorial()}</Route>
                        <Route path={`${path}/tierlist-disclaimer`}>{tierDisclaimer()}</Route>
                        <Route path={`${path}/tierlist-changelog`}>{tierlistChangelog()}</Route>
                    </Switch>
                <div className="side-content">
                    <div className={isMobile ? "side-container side-container-mobile" : "side-container"}>
                        <div className="current-event-frame">
                            <p className="current-event-title">Current Banner</p>
                            <img src="https://i.ibb.co/CJvswrV/arisa.jpg" alt="banner"/>
                        </div>
                        <div className="current-event-frame">
                            <p className="current-event-title">Current Events</p>
                            <img src="https://i.ibb.co/JF3dQkN/hatsune.jpg" alt="banner"/>
                            <img src="https://i.ibb.co/chnJYJS/groto-x2.jpg" alt="banner"/>
                        </div>
                        <ul className="current-event-frame social">
                            <li><a href="https://discord.gg/priconne"><i class="fab fa-discord"></i></a></li>
                            <li><a href="https://www.youtube.com/c/TimaeuSS"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="https://discord.gg/UGeFfushYp"><i class="fab fa-discord"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

function tierDisclaimer(){
    return(
    <div className="main-content">
        <div className="main-container">
            <h2 className="main-title"> Princess Connect Re:dive EN Tierlist / Rank List </h2>
            <img className="main-content-img" src="https://i.ibb.co/KLXVrBc/rank-1.jpg"/>
            <p> THIS TIERLIST IS OF MY OWN OPINION. YOU CAN @ME IN MAINCORD OR DISCUSS WITH THE LIST IN MY DISCORD. <br/>Our guild Scarlet will be using this as reference for our clan battles	<br/> !!!READ AT YOUR OWN RISK!!!</p>
            <p> ALSO NOTE!!! <br/>Some of these units are kept at R7 despite stat gain over R8 due to shortage of R8 gear needed for CB for March	AKA mages, healers asking to stay at R7 because you rather focus stamina for R8 damage dealers first and healers are used for mechanics (maho blind etc so her healing output isn't priority) </p>
        </div>
    </div>
    )
}

function eventInfo(){
    return(
    <div className="main-content">
    <div className="main-container">
        <h2 className="main-title"> About Events</h2>
        <p> There are various types of events in Princess Connect. I'll try to give and overview of what they're about</p>
        <h3 className="main-subtitle"> Focus Gacha</h3>
        <p>In these events you have a higher chance of getting the featured character. There's also the spark system which allows you to get the featured character after you've made a certain amount of rolls. At the moment is 300 rolls which equals to 45000 gems.</p>
        <img className="main-content-img" src="https://i.ibb.co/CJvswrV/arisa.jpg"/>
        <p>Arisa Banner</p>
        <h3 className="main-subtitle">Story Events</h3>
        <p>Story events generally give a generous amount of items, mana, jewels, and character memory shards. Each event has featured characters which you can get memory shards of. On top of the rewards, it also adds a set of stories that can be viewed during the event and also provides rewards for completing them. </p>
        <img className="main-content-img" src="https://i.ibb.co/JF3dQkN/hatsune.jpg"/>
        <p> Hatsune Story Event</p>
        <h3 className="main-subtitle"> Bonus Events</h3>
        <p> These events give you an extra amount of the items you get normally (usually x2)</p>
        <img className="main-content-img" src="https://i.ibb.co/chnJYJS/groto-x2.jpg"/>
        <p> Grotto x2 event</p>
        <h3 className="main-subtitle">Clan Blattle</h3>
        <p>Challenge boss monsters with members of your clan! Since the boss monsters have a lot of health, let's all cooperate and chip away at them together! Total damage dealt to monsters during the event period will be tallied for each clan and clan rankings will be announced ingame.<br/>Depending on ranking, you will receive rewards such as Jewels, Clan Coins and Memory Pieces!</p>
        <img className="main-content-img" src="https://i.ibb.co/7nq3kXF/cb.jpg"/>
    </div>
    </div>
    )
}

function showBannerPast(data){
    return(
        <div className="margin-top"> 
            <h3>{data.name}</h3>
            <p>From: {data.start.toLocaleDateString()}</p>
            <p>To: {data.end.toLocaleDateString()}</p> 
            <a href={data.link} target="_blank" rel="noopener noreferrer">
                <img src={data.banner}></img>
            </a> 
        </div>
    )
}
function showBannerUpcoming(data){
    return(
        <div className="margin-top"> 
            <h3>{data.name}</h3>
            <p>Predicted start: {data.start.toLocaleDateString()}</p>
            <p>Predicted end: {data.end.toLocaleDateString()}</p> 
            <a href={data.link} target="_blank" rel="noopener noreferrer">
                <img src={data.banner}></img>
            </a> 
        </div>
    )
}

function pastEvents(show,setShow){
    return(
    <div className="main-content">
         <MobileView>
                <div className="main-container divide-two divide-mobile">
                {show ? <div className="one-side">
                    <button className="btn" onClick={setShow}>Show Events</button>
                    <h2>Past Banners</h2>
                    {eventData.filter(data => (data.type === "focus" && data.end < new Date()))
                    .sort(function (a, b){
                    if (a.end.getTime() < b.end.getTime()) {
                      return -1;
                    }
                    if (a.end.getTime() > b.end.getTime()) {
                      return 1;
                    }
                    return 0;
                  }).map(info => showBannerPast(info))}
                </div> : <div className="one-side">
                    <button className="btn" onClick={setShow}>Show Banners</button>
                    <h2>Past Events</h2>
                    {eventData.filter(data => data.type === "story" && data.end < new Date()).sort(function(a,b){
                        if (a.start.getTime() < b.start.getTime()) {
                            return -1;
                          }
                          if (a.start.getTime() > b.start.getTime()) {
                            return 1;
                          }
                          return 0;
                    }).map(info => showBannerPast(info)) }
                </div>}
                </div>
                </MobileView>
                <BrowserView>
                <div className="main-container divide-two">
                    <div className="one-side">
                    <h2>Past Banners</h2>
                    {eventData.filter(data => (data.type === "focus" && data.end < new Date()))
                    .sort(function (a, b){
                    if (a.end.getTime() < b.end.getTime()) {
                      return -1;
                    }
                    if (a.end.getTime() > b.end.getTime()) {
                      return 1;
                    }
                    return 0;
                  }).map(info => showBannerPast(info) )}
                </div>
                <div className="one-side">
                    <h2>Past Events</h2>
                    {eventData.filter(data => data.type === "story" && data.end < new Date()).sort(function(a,b){
                        if (a.start.getTime() < b.start.getTime()) {
                            return -1;
                          }
                          if (a.start.getTime() > b.start.getTime()) {
                            return 1;
                          }
                          return 0;
                    }).map(info => showBannerPast(info))}
                </div>
                </div>
                </BrowserView>
    </div>
    )
}

function upcomingEvents(show,setShow){
    return(
        <div className="main-content">
                <MobileView>
                <div className={isMobile ? "main-container divide-two divide-mobile": "main-container divide-two"}>
                {show ? <div className="one-side">
                    <button className="btn" onClick={setShow}>Show Events</button>
                    <h2>Upcoming Banners</h2>
                    {eventData.filter(data => (data.type === "focus" && data.start > new Date()))
                    .sort(function (a, b){
                    if (a.end.getTime() < b.end.getTime()) {
                      return -1;
                    }
                    if (a.end.getTime() > b.end.getTime()) {
                      return 1;
                    }
                    return 0;
                  }).map(data =>showBannerUpcoming(data))}
                </div> : <div className="one-side">
                    <button className="btn" onClick={setShow}>Show Banners</button>
                    <h2>Upcoming Events</h2>
                    {eventData.filter(data => data.type === "story" && data.start > new Date()).sort(function(a,b){
                        if (a.start.getTime() < b.start.getTime()) {
                            return -1;
                          }
                          if (a.start.getTime() > b.start.getTime()) {
                            return 1;
                          }
                          return 0;
                    }).map(data => showBannerUpcoming(data))}
                </div>}
                </div>
                </MobileView>
                <BrowserView>
                <div className="main-container divide-two">
                    <div className="one-side">
                    <h2>Upcoming Banners</h2>
                    {eventData.filter(data => (data.type === "focus" && data.start > new Date()))
                    .sort(function (a, b){
                    if (a.end.getTime() < b.end.getTime()) {
                      return -1;
                    }
                    if (a.end.getTime() > b.end.getTime()) {
                      return 1;
                    }
                    return 0;
                  }).map(data =>showBannerUpcoming(data))}
                </div>
                <div className="one-side">
                    <h2>Upcoming Events</h2>
                    {eventData.filter(data => data.type === "story" && data.start > new Date()).sort(function(a,b){
                        if (a.start.getTime() < b.start.getTime()) {
                            return -1;
                          }
                          if (a.start.getTime() > b.start.getTime()) {
                            return 1;
                          }
                          return 0;
                    }).map(data => showBannerUpcoming(data))}
                </div>
                </div>
                </BrowserView>
        </div>
        )
}
function tierlistTutorial(){
    return(
        <div className="main-content">
            <div className="main-container">
                <h2 className="main-title"> Tierlist Tutorial </h2>
                <p>Hello and welcome to this tierlist. Here i'll leave the references and some instructions to use the tierlist</p>
                <h2>Instructions</h2>
                <BrowserView>
                    <h3>Sorting</h3>
                    <p>click any of the tabs on the top to sort the list. Name,Stars and Position can be sorted in inverse order. Sorting by name: </p>
                    <img className="main-content-img" src="https://i.ibb.co/cQZqgv1/generalview.jpg"/>
                    <h3>Filters</h3>
                    <p>Click on the Source tab to open the filter window:</p>
                    <img className="main-content-img" src="https://i.ibb.co/SmPBgLP/filters.jpg"/>
                    <p>You can apply as many filters as you want at the same time. You can also filter and search at the same time.</p>
                    <h3>Search</h3>
                    <p>Hover over the icon on the bottom left to start a search. This filters the list as you type.</p>
                    <img className="main-content-img" src="https://i.ibb.co/0GfSLZn/search.jpg"/>
                    <h3>Stat differences</h3>
                    <p>Hover over the CB Rank tab to show the difference in stats between rank7-6 and rank 8-3 at 3 stars</p>
                    <img className="main-content-img" src="https://i.ibb.co/3vzzVDq/hover.jpg"/>
                </BrowserView>
                <MobileView>
                    <h3>Hidden Tab</h3>
                    <p>Touch on any part of a row to show the hidden tab with some extra info</p>
                    <img className="main-content-img" src="https://i.ibb.co/c8VV7Cn/hidden-tab.jpg"/>
                    <h3>Sorting</h3>
                    <p>Touch any of the tabs on the top to sort the list.Names can be sorted in inverse order. Sorting by name: </p>
                    <img className="main-content-img" src="https://i.ibb.co/5WGv4jt/sorting-mobile.jpg"/>
                    <h3>Filters</h3>
                    <p>Touch on the Source tab to open the filter window:</p>
                    <img className="main-content-img" src="https://i.ibb.co/ZLBP17Y/filters-mobile.jpg"/>
                    <p>You can apply as many filters as you want at the same time. You can also filter and search at the same time.</p>
                    <h3>Search</h3>
                    <p>Touch the icon on the bottom left to start a search. This filters the list as you type.</p>
                    <img className="main-content-img" src="https://i.ibb.co/9b4gYry/search-mobile.jpg"/>
                </MobileView>
                <h2>References:</h2>
                <p>* Position: The lowest the number the more foward it'll go</p>
                <p>* CB Rank: The current rank suggested for better performance on Clan Battles. (7-6 is rank 7 with full equips).</p>
                <p> For feedback,suggestions or doubts about the list go here: <a href="https://discord.gg/UGeFfushYp">https://discord.gg/UGeFfushYp</a></p>
                <p> For feedback,suggestions or trouble with the app, contact me here: <a href="zelayagonzalo33@gmail.com">zelayagonzalo33@gmail.com</a> or on discord: 0PT1C0#3072 </p>
            </div>
        </div>
        )
}

function tierlistChangelog(){
    return(
        <div className="main-content">
            <div className="main-container">
                <h2 className="main-title"> Changelog </h2>
                Changes to the tierlist will go here
            </div>
        </div>
        )
}

export default HomePage