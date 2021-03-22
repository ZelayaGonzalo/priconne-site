import './homepage.css';
import './style.css'
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import BlogPost from './BlogPost'
import Clock from './Clock'
import { isMobile, MobileView, BrowserView } from 'react-device-detect';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import eventData from '../eventData';
import { AnimatePresence, motion } from 'framer-motion';

function HomePage() {
  const [showEvent, setShowEvent] = useState(true);
  const [articles,setArticles] = useState([])
  let { path} = useRouteMatch();
  const location =useLocation()
  const apiURL="https://blogapinodejs.herokuapp.com/api/all"

  function changeShow() {
    setShowEvent(!showEvent);
  }
  function getCurrentBanners(){
    return eventData.filter(data => (data.type ==='focus' && data.start.getTime() <= new Date().getTime() && data.end.getTime() >= new Date().getTime()))
    .map(data => <img key={data.name} src={data.banner} alt={data.name}></img>)
  }
  function getCurrentEvents(){
    return eventData.filter(data => (data.type !== 'focus' && data.start.getTime() <= new Date().getTime() && data.end.getTime() >= new Date().getTime()))
    .map(data => <img key={data.name} src={data.banner} alt={data.name}></img>)
  }

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(apiURL)
      const data = await response.json()
      await setArticles(data)
      console.log(data)
    }
    fetchData()

    document.body.style.background =
      "url('https://i.ibb.co/5KkyhgD/forestBG.jpg') no-repeat center";
    document.body.style.backgroundSize = 'cover';
    return () => {
      document.body.style.background = 'none';
    };
  }, []);

  return (
    <div className="homepage-container">
      <NavBar />
      <section className={isMobile ? 'content content-mobile' : 'content'}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path={path}>
              {HomePageSite(articles)}
            </Route>
            <Route path={`${path}events-disclaimer`}>{eventDisclaimer()}</Route>
            <Route path={`${path}events-info`}>{eventInfo()}</Route>
            <Route path={`${path}past-events`}>
              {pastEvents(showEvent, changeShow)}
            </Route>
            <Route path={`${path}upcoming-events`}>
              {upcomingEvents(showEvent, changeShow)}
            </Route>
            <Route path={`/tierlist-tutorial`}>{tierlistTutorial()}</Route>
            <Route path={`/tierlist-disclaimer`}>{tierDisclaimer()}</Route>
            <Route path={`/tierlist-changelog`}>{tierlistChangelog()}</Route>
            <Route path={`/game-updates`}>{gameUpdates()}</Route>
            <Route path={`/guides`}>{guides()}</Route>
            <Route path={`/useful-links`}>{usefulLinks()}</Route>
            <Route path={`/about`}>{about()}</Route>
            {articles.map(article =><Route key={article.url} path={`/${article.url}`}><BlogPost date={new Date(article.date).toLocaleDateString()} author={article.author} url={article.url} title={article.title} body={article.body}/> </Route>)}
          </Switch>
        </AnimatePresence>
        <div className="side-content">
          <div
            className={
              isMobile
                ? 'side-container side-container-mobile'
                : 'side-container'
            }
          >
            <div className="current-event-frame">
              <p className="current-event-title">Game Time</p>
              <Clock/>
            </div>
            <div className="current-event-frame">
              <p className="current-event-title">Current Banner</p>
              {getCurrentBanners()}
            </div>
            <div className="current-event-frame">
              <p className="current-event-title">Current Events</p>
              {getCurrentEvents()}
            </div>
            <ul className="current-event-frame social">
              <li>
                <a href="https://www.youtube.com/c/TimaeuSS">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/UGeFfushYp">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function blogHeader(article){
  return(
    <div className="article-container">
      <div className="header-top">
        <h2 className="header-title">{article.title}</h2>
        <span className="header-date">{new Date(article.date).toLocaleDateString()}</span> 
      </div> 
      {article.author ? <p className="header-author">by {article.author}</p>: null}
    </div>
    )
}

function HomePageSite(articles){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> Princess Connect Re:dive EN Tierlist/ Rank List</h2>
          <p>Unoficcial Princess Connect Re:Dive Site</p>
          <h3 className="main-subtitle"> 
            Note: Last announcement broke all event predictions, please read the events disclaimer.
          </h3>
          <h3>Lastest Posts:</h3>
          {articles.sort(function (a, b) {
                  const dateA=new Date(a.date)
                  const dateB = new Date(b.date)
                  if  (dateA.getTime() < dateB.getTime()) {
                    return 1;
                  }
                  if (dateA.getTime() > dateB.getTime()) {
                    return -1;
                  }
                  return 0;
                })
          .map(article => <Link key={article.title} to={`/${article.url}`} className="homepage-article">{blogHeader(article)}</Link>)}
        </div>
      </motion.div>
    )
}

function tierDisclaimer() {
  return (
      <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title">
            {' '}
            Disclaimer by TimaeuSS{' '}
          </h2>
          <img
            className="main-content-img"
            src="https://i.ibb.co/KLXVrBc/rank-1.jpg"
            alt="rank 1 on cb"
          />
          <p>
            {' '}
            THIS TIERLIST IS OF MY OWN OPINION. YOU CAN @ME IN MAINCORD OR
            DISCUSS WITH THE LIST IN MY DISCORD. <br />
            Our guild Scarlet will be using this as reference for our clan
            battles <br /> !!!READ AT YOUR OWN RISK!!!
          </p>
          <p>
            <a href="	https://www.youtube.com/watch?v=T-nYrHY29Vw" target="_blank" rel="noopener noreferrer">Video explanation of the choices</a>
          </p>
          <p>Source: Data Extractor u/AnduCrandu</p>
          <p><a href="https://pricalc.ooo/analysis/rank-comparison" target="_blank" rel="noopener noreferrer">Please use the stat difference to make your own PvP decisions</a></p>
        </div>
      </motion.div>
  );
}

function eventDisclaimer(){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> Disclaimer</h2>
          <h3 className="main-subtitle"> Since the last updates broke all predictions this timeline is not to be trusted. I'll update it if there's new data on the future or just change it to the japanese schedule so we can at least base on that.
          </h3>
            <p> All the predictions here are extracted from datamining and have a high chance of changing, use these dates at your own discretion</p>
            <p>Also, drop events are a mess so I'll remove them for now</p>
          <p>All the datamined data is extracted from here: <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRNbWj9WgXCt3O7jSzlCs2rv0YwqBWXKYmcNHrIZOLWoEvLdjzd94OiksgQteXMrb9KfkVNFEzCGMC8/pubhtml#">Link to docs</a> .All credits goes to them. I'm just adding them to this site for ease of reading</p>

        </div>
      </motion.div>
    )
}

function eventInfo() {
  return (
    <motion.div initial={{y:"-200vh"}} animate={{y:0}} exit={{x:"-100vw"}} className="main-content" transition={{duration:0.3}}>
      <div className="main-container">
        <h2 className="main-title"> About Events</h2>
        <p>
          {' '}
          There are various types of events in Princess Connect. I'll try to
          give and overview of what they're about
        </p>
        <h3 className="main-subtitle"> Focus Gacha</h3>
        <p>
          In these events you have a higher chance of getting the featured
          character. There's also the spark system which allows you to get the
          featured character after you've made a certain amount of rolls. At the
          moment is 300 rolls which equals to 45000 gems.
        </p>
        <img
          className="main-content-img"
          src="https://i.ibb.co/CJvswrV/arisa.jpg"
          alt="arisa-banner"
        />
        <p>Arisa Banner</p>
        <h3 className="main-subtitle">Story Events</h3>
        <p>
          Story events generally give a generous amount of items, mana, jewels,
          and character memory shards. Each event has featured characters which
          you can get memory shards of. On top of the rewards, it also adds a
          set of stories that can be viewed during the event and also provides
          rewards for completing them.{' '}
        </p>
        <img
          className="main-content-img"
          src="https://i.ibb.co/JF3dQkN/hatsune.jpg"
          alt="Hatsune Story Event"
        />
        <p> Hatsune Story Event</p>
        <h3 className="main-subtitle"> Drop Events</h3>
        <p>
          {' '}
          These events give you an extra amount of the items you get normally
          (usually x2)
        </p>
        <img
          className="main-content-img"
          src="https://i.ibb.co/chnJYJS/groto-x2.jpg"
          alt="grotto Event"
        />
        <p> Grotto x2 event</p>
        <h3 className="main-subtitle">Clan Blattle</h3>
        <p>
          Challenge boss monsters with members of your clan! Since the boss
          monsters have a lot of health, let's all cooperate and chip away at
          them together! Total damage dealt to monsters during the event period
          will be tallied for each clan and clan rankings will be announced
          ingame.
          <br />
          Depending on ranking, you will receive rewards such as Jewels, Clan
          Coins and Memory Pieces!
        </p>
        <img
          className="main-content-img"
          src="https://i.ibb.co/7nq3kXF/cb.jpg"
          alt="clan-battle event"
        />
      </div>
    </motion.div>
  );
}

function showBannerPast(data) {
  return (
    <div key={data.name} className="margin-top">
      <h3>{data.name}</h3>
      <p>From: {data.start.toLocaleDateString()}</p>
      <p>To: {data.end.toLocaleDateString()}</p>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img alt={data.name} src={data.banner}></img>
      </a>
    </div>
  );
}
function showBannerUpcoming(data) {
  return (
    <div key={data.name} className="margin-top">
      <h3>{data.name}</h3>
      {/*<p>Predicted start: {data.start.toLocaleDateString()}</p>
      <p>Predicted end: {data.end.toLocaleDateString()}</p>*/}
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img alt={data.name} src={data.banner}></img>
      </a>
    </div>
  );
}

function pastEvents(show, setShow) {
  return (
    <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
      <MobileView>
        <div className="main-container divide-two divide-mobile">
          {show ? (
            <div className="one-side">
              <button className="btn" onClick={setShow}>
                Show Events
              </button>
              <h2>Past Banners</h2>
              {eventData
                .filter(
                  (data) => data.type === 'focus' && data.end < new Date()
                )
                .sort(function (a, b) {
                  if (a.end.getTime() < b.end.getTime()) {
                    return -1;
                  }
                  if (a.end.getTime() > b.end.getTime()) {
                    return 1;
                  }
                  return 0;
                })
                .map((info) => showBannerPast(info))}
            </div>
          ) : (
            <div className="one-side">
              <button className="btn" onClick={setShow}>
                Show Banners
              </button>
              <h2>Past Events</h2>
              {eventData
                .filter(
                  (data) => data.type === 'story' && data.end < new Date()
                )
                .sort(function (a, b) {
                  if (a.start.getTime() < b.start.getTime()) {
                    return -1;
                  }
                  if (a.start.getTime() > b.start.getTime()) {
                    return 1;
                  }
                  return 0;
                })
                .map((info) => showBannerPast(info))}
            </div>
          )}
        </div>
      </MobileView>
      <BrowserView>
        <div className="main-container divide-two">
          <div className="one-side">
            <h2>Past Banners</h2>
            {eventData
              .filter((data) => data.type === 'focus' && data.end < new Date())
              .sort(function (a, b) {
                if (a.end.getTime() < b.end.getTime()) {
                  return -1;
                }
                if (a.end.getTime() > b.end.getTime()) {
                  return 1;
                }
                return 0;
              })
              .map((info) => showBannerPast(info))}
          </div>
          <div className="one-side">
            <h2>Past Events</h2>
            {eventData
              .filter((data) => data.type === 'story' && data.end < new Date())
              .sort(function (a, b) {
                if (a.start.getTime() < b.start.getTime()) {
                  return -1;
                }
                if (a.start.getTime() > b.start.getTime()) {
                  return 1;
                }
                return 0;
              })
              .map((info) => showBannerPast(info))}
          </div>
        </div>
      </BrowserView>
    </motion.div>
  );
}

function upcomingEvents(show, setShow) {
  return (
    <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
      <MobileView>
        <div
          className={
            isMobile
              ? 'main-container divide-two divide-mobile'
              : 'main-container divide-two'
          }
        >
          {show ? (
            <div className="one-side">
              <button className="btn" onClick={setShow}>
                Show Events
              </button>
              <h2>Upcoming Banners</h2>
              {eventData
                .filter(
                  (data) => data.type === 'focus' && data.start > new Date()
                )
                .sort(function (a, b) {
                  if (a.end.getTime() < b.end.getTime()) {
                    return -1;
                  }
                  if (a.end.getTime() > b.end.getTime()) {
                    return 1;
                  }
                  return 0;
                })
                .map((data) => showBannerUpcoming(data))}
            </div>
          ) : (
            <div className="one-side">
              <button className="btn" onClick={setShow}>
                Show Banners
              </button>
              <h2>Upcoming Events</h2>
              {eventData
                .filter(
                  (data) => data.type === 'story' && data.start > new Date()
                )
                .sort(function (a, b) {
                  if (a.start.getTime() < b.start.getTime()) {
                    return -1;
                  }
                  if (a.start.getTime() > b.start.getTime()) {
                    return 1;
                  }
                  return 0;
                })
                .map((data) => showBannerUpcoming(data))}
            </div>
          )}
        </div>
      </MobileView>
      <BrowserView>
        <div className="main-container divide-two">
          <div className="one-side">
            <h2>Upcoming Banners</h2>
            {eventData
              .filter(
                (data) => data.type === 'focus' && data.start > new Date()
              )
              .sort(function (a, b) {
                if (a.end.getTime() < b.end.getTime()) {
                  return -1;
                }
                if (a.end.getTime() > b.end.getTime()) {
                  return 1;
                }
                return 0;
              })
              .map((data) => showBannerUpcoming(data))}
          </div>
          <div className="one-side">
            <h2>Upcoming Events</h2>
            {eventData
              .filter(
                (data) => data.type === 'story' && data.start > new Date()
              )
              .sort(function (a, b) {
                if (a.start.getTime() < b.start.getTime()) {
                  return -1;
                }
                if (a.start.getTime() > b.start.getTime()) {
                  return 1;
                }
                return 0;
              })
              .map((data) => showBannerUpcoming(data))}
          </div>
        </div>
      </BrowserView>
    </motion.div>
  );
}
function tierlistTutorial() {
  return (
    <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
      <div className="main-container">
        <h2 className="main-title"> Tierlist Tutorial </h2>
        <p>
          Hello and welcome to this tierlist. Here i'll leave the references and
          some instructions to use the tierlist
        </p>
        <h2>Instructions</h2>
        <BrowserView>
          <h3>Sorting</h3>
          <p>
            click any of the tabs on the top to sort the list. Name,Stars and
            Position can be sorted in inverse order. Sorting by name:{' '}
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/cQZqgv1/generalview.jpg"
            alt="sorting function"
          />
          <h3>Filters</h3>
          <p>Click on the Source tab to open the filter window:</p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/SmPBgLP/filters.jpg"
            alt="Filter function"
          />
          <p>
            You can apply as many filters as you want at the same time. You can
            also filter and search at the same time.
          </p>
          <h3>Search</h3>
          <p>
            Hover over the icon on the bottom left to start a search. This
            filters the list as you type.
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/0GfSLZn/search.jpg"
            alt="Search function"
          />
          <h3>Stat differences</h3>
          <p>
            Hover over the CB Rank tab to show the difference in stats between
            rank7-6 and rank 8-3 at 3 stars
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/3vzzVDq/hover.jpg"
            alt="Hover rank"
          />
        </BrowserView>
        <MobileView>
          <h3>Hidden Tab</h3>
          <p>
            Touch on any part of a row to show the hidden tab with some extra
            info
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/c8VV7Cn/hidden-tab.jpg"
            alt="hidden tab function"
          />
          <h3>Sorting</h3>
          <p>
            Touch any of the tabs on the top to sort the list.Names can be
            sorted in inverse order. Sorting by name:{' '}
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/5WGv4jt/sorting-mobile.jpg"
            alt="sorting function"
          />
          <h3>Filters</h3>
          <p>Touch on the Source tab to open the filter window:</p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/ZLBP17Y/filters-mobile.jpg"
            alt="Filter function"
          />
          <p>
            You can apply as many filters as you want at the same time. You can
            also filter and search at the same time.
          </p>
          <h3>Search</h3>
          <p>
            Touch the icon on the bottom left to start a search. This filters
            the list as you type.
          </p>
          <img
            className="main-content-img"
            src="https://i.ibb.co/9b4gYry/search-mobile.jpg"
            alt="search function"
          />
        </MobileView>
        <h2>References:</h2>
        <p>* Position: The lowest the number the more foward it'll go</p>
        <p>
          * CB Rank: The current rank suggested for better performance on Clan
          Battles. (7-6 is rank 7 with full equips).
        </p>
        <p>
          {' '}
          For feedback,suggestions or doubts about the list go here:{' '}
          <a href="https://discord.gg/UGeFfushYp">
            https://discord.gg/UGeFfushYp
          </a>
        </p>
        <p>
          {' '}
          For feedback,suggestions or trouble with the app, contact me here:{' '}
          <a href="zelayagonzalo33@gmail.com">zelayagonzalo33@gmail.com</a> or
          on discord: 0PT1C0#3072{' '}
        </p>
      </div>
    </motion.div>
  );
}

function tierlistChangelog() {
  return (
    <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
      <div className="main-container">
        <h2 className="main-title"> Changelog </h2>
        <h3 className="main-subtitle">Mar 13,2021</h3>
        <p>*Starting R8-5 Map 10 recommendations</p>
        <p>*Added Ayane</p>
        <p>*Removed Jun from Hard drops. I'll add her when she's avaliable</p>
      </div>
    </motion.div>
  );
}

function gameUpdates(){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> Game Updates</h2>
          <h3 className="main-subtitle"> 3/15/2021</h3>
          <img className="main-content-img" src="https://i.ibb.co/GC806mK/Update.jpg" alt="Features of this update."></img>
        </div>
      </motion.div>
    )
}


function guides(){
    return(
    <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> Guides</h2>
          <p><a href="https://docs.google.com/document/d/1Mj9ulFAvl69a5l53z-Li_WDp7__vd_DYFKxQC9KHqPc/edit" target='_blank' rel="noreferrer noopener"> Awesome beginner guide by u/Kaito_6 <i className="fas fa-external-link-alt"></i></a></p>
          <p><a href="https://www.reddit.com/r/Priconne/comments/kdkn3f/rerolling_without_redownloading_the_big_chunk_of/?sort=new" target='_blank' rel="noreferrer noopener">Reroll guide by u/rozeluxe08 <i className="fas fa-external-link-alt"></i></a></p>
        </div>
      </motion.div>
      )
}

function usefulLinks(){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> Useful Links</h2>
          <h3 className="main-subtitle"> Official Links</h3>
          <p><a href="https://www.crunchyroll.com/games/princessconnectredive/index.html" target='_blank' rel="noreferrer noopener">* Official site<i className="fas fa-external-link-alt"></i> </a></p>
          <p><a href="https://twitter.com/priconne_en/" target='_blank' rel="noreferrer noopener">* Twitter<i className="fas fa-external-link-alt"></i></a></p>
          <p><a href="https://www.instagram.com/priconne_en/" target='_blank' rel="noreferrer noopener">* Instagram<i className="fas fa-external-link-alt"></i></a></p>
          <p><a href="https://www.facebook.com/priconne.en/" target='_blank' rel="noreferrer noopener">* Facebook<i className="fas fa-external-link-alt"></i></a></p>
          <h3 className="main-subtitle"> Unofficial links</h3>
          <p><a href="https://www.priconneglobal.info" target='_blank' rel="noreferrer noopener">*PriconneGlobal.info<i className="fas fa-external-link-alt"></i></a>: Very complete site with info and guides for the global server</p>
          <p><a href="https://pricalc.ooo/" target='_blank' rel="noreferrer noopener">*Pricalc.ooo<i className="fas fa-external-link-alt"></i></a>: Global server analysis tool</p>
          <p><a href="https://shioris-library.com/?">* Shiori Library<i className="fas fa-external-link-alt"></i></a>: Database and farming planner tool</p>
          <p><a href="https://docs.google.com/spreadsheets/d/1b3Vjcc-wfrVfoqI93OMGLZPrJaxpclnBAerPXZdAfc0/edit#gid=57366839">* Kadedeal Docs<i className="fas fa-external-link-alt"></i></a>: Very useful spreadsheet with a lot of info about the game, guides,tierlist, meta, etc.</p>
          <p><a href="https://docs.google.com/spreadsheets/d/1ryURfErjATtSGhxvUnKC49JN0Z-FvHtv0yVmgrZeO2g/htmlview?pru=AAABdz3VjX0*AR30vxk-nfrZ92K5AT-xxg#">* Borkono Notes<i className="fas fa-external-link-alt"></i></a>: Another very useful spreadsheet with a lot of info about future banners and events,character reviews,recommendations,etc.</p>
          </div>
      </motion.div>
    )
}


function about(){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title"> About</h2>
          <p> Info about the site will go here</p>
        </div>
      </motion.div>
    )
}

export default HomePage;
