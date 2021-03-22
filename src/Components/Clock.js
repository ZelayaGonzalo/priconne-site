import { useEffect, useState } from "react"
import './clock.css'

function getMonth(month){
    switch(month){
        case 0:
            return 'Jan'
        case 1:
            return 'Feb'
        case 2:
            return 'Mar'
        case 3:
            return 'Apr'
        case 4:
            return 'May'
        case 5:
            return 'Jun'
        case 6:
            return 'Jul'
        case 7:
            return 'Aug'
        case 8:
            return 'Sep'
        case 9:
            return 'Oct'
        case 10:
            return 'Nov'
        case 11:
            return 'Dec'
            
    }
}

function add0(number){
    return '0'+number
}

function Clock(){
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date())
          }, 1000);
          return () => clearInterval(interval);
    },[])
    return(
        <div className="current-time">
            <p className="clock-date"><span>{getMonth(time.getUTCMonth())} {time.getUTCDate().toString()}</span></p>
            <p className="clock-hours"><span>{time.getUTCHours()}:{time.getUTCMinutes() >=10 ? time.getUTCMinutes():add0(time.getUTCMinutes())}:{time.getUTCSeconds() >=10 ? time.getUTCSeconds():add0(time.getUTCSeconds())}</span></p>
        </div>
    )
}

export default Clock