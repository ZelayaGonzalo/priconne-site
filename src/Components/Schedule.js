import eventData from '../eventData'
import {useEffect,useState} from 'react'
import { BrowserView, isMobile, MobileView } from 'react-device-detect'

function Schedule(){
    const [eventsData,setEventsData] = useState(eventData)
    const[showDrops,setShowDrops] = useState(true)
    const[showStory,setShowStory] = useState(true)
    const[showBanners,setShowBanners] = useState(true)
    const[showClan,setShowClan] =useState(true)

    useEffect(()=>{
        document.body.style.background = "url('https://i.ibb.co/kDsW6dc/cityBG.jpg') no-repeat center"
        document.body.style.backgroundSize = "cover"
        document.body.style.overflowX="scroll"
        return()=>{
            document.body.style.background = "none"
        }
    },[])

    function showFilters(event){
        const target= event.currentTarget.nextSibling
        target.classList.toggle('enter')
    }
    function handleFilters(event){
        const id= event.target.id
        switch(id){
            case "story":
                setShowStory(!showStory)
                break
            case "drop":
                setShowDrops(!showDrops)
                break
            case "banners":
                setShowBanners(!showBanners)
                break
            case "clan":
                setShowClan(!showClan)
                break
            default:
                return 
        }
    }
    function buttonCloseFilter(event){
        event.target.parentNode.classList.remove('enter')
      }
    function applyFilters(data){
        if(showDrops && data.type === "bonus") return true
        if(showStory && data.type === "story") return true
        if(showBanners && data.type === "focus") return true
        if(showClan && data.type === "clan") return true
        return false
    }

    return(
        <div className={isMobile ? "table-container table-two-sides" :"table-container"}>
            <BrowserView>
            <div className="row head fixed row-desktop fixed-desktop">
                <div className="month head action"> February</div>
                <div className="month head action"> March</div>
                <div className="month head action"> April</div>
                <div className="month head action"> May</div>
                <div className="month head action"> June</div>
            </div>
            
            <div className="events-list">
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 1 || data.end.getMonth === 1) && applyFilters(data) ).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBanner(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 2 || data.end.getMonth === 2) && applyFilters(data))
                    .sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBanner(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 3 || data.end.getMonth === 3) && applyFilters(data) ).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBanner(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 4 || data.end.getMonth === 4) && applyFilters(data) ).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBanner(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 5 || data.end.getMonth === 5) && applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBanner(data)) }
                </div>
            </div>
            </BrowserView>
            <MobileView viewClassName="table-two-sides">
                <div className="row head fixed schedule-tab">
                    <div className="month head action"> February</div>
                    <div className="month head action"> March</div>
                    <div className="month head action"> April</div>
                    <div className="month head action"> May</div>
                    <div className="month head action"> June</div>
                </div>
                <div className="events-list event-list-mobile">
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 1 || data.end.getMonth === 1 )&& applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBannerMobile(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 2 || data.end.getMonth === 2)&& applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBannerMobile(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 3 || data.end.getMonth === 3)&& applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBannerMobile(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 4 || data.end.getMonth === 4)&& applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBannerMobile(data)) }
                </div>
                <div  className="event-column">
                    {eventsData.filter(data => (data.start.getMonth() === 5 || data.end.getMonth === 5)&& applyFilters(data)).sort(function(a,b){
                        return sortDates(a,b)
                    })
                    .map(data => showBannerMobile(data)) }
                </div>
            </div>
            </MobileView>
            <div className="filter-icon" onClick={showFilters}><i class="fas fa-filter"></i></div>
            <div className={isMobile ?"filter-container filter-mobile enter" :"filter-container enter"}>
                <h2>Filters</h2>
                    <ul className="source-filter">
                      <li>
                        <div>Story Events</div>
                        <label className="input-container">
                        <input type="checkbox" id="story" checked={showStory} onClick={handleFilters} />
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>  
                        <div>Banners</div>
                        <label className="input-container">
                        <input type="checkbox" id="banners" checked={showBanners} onClick={handleFilters} />
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Drop Events</div>
                        <label className="input-container">
                        <input type="checkbox" id="drop" checked={showDrops} onClick={handleFilters} />
                        <span className="mark"></span>
                        </label>
                      </li>
                      <li>
                        <div> Clan Battle</div>
                        <label className="input-container">
                        <input type="checkbox" id="clan" checked={showClan} onClick={handleFilters} />
                        <span className="mark"></span>
                        </label>
                      </li>
                    </ul>
                    <button className="btn filter-close" onClick={buttonCloseFilter}>Close</button>
            </div>
        </div>
    )
}

function sortDates(a,b){
    if (a.start.getTime() < b.start.getTime()) {
        return -1;
      }
      if (a.start.getTime() > b.start.getTime()) {
        return 1;
      }
      return 0;
}

function showBanner(data){
    return(
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="schedule-banner" key={data.name}>
            <p className="name-button">{data.name}</p>
            <p className="date-button">{`${data.start.getMonth()+1}/${data.start.getDate()} ~ ${data.end.getMonth()+1}/${data.end.getDate()}`}</p>
            <img alt={data.name} src={data.banner}></img>
        </a>
    )
}
function showBannerMobile(data){
    return(
        <a href={data.link} target="_blank" rel="noopener noreferrer" key={data.name}>
            <p className="name-button">{data.name}</p>
            <p className="date-button">{`${data.start.getMonth()+1}/${data.start.getDate()} ~ ${data.end.getMonth()+1}/${data.end.getDate()}`}</p>
            <img alt={data.name} src={data.banner}></img>
        </a>
    )
}

export default Schedule