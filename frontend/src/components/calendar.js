import FullCalendar, { whenTransitionDone } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin! 
import timeGridPlugin from '@fullcalendar/timegrid';
import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext';
import {css, jsx} from "@emotion/react"
import {PurpleButtonStyle } from '../components/EmotionStyles';
/** @jsxImportSource @emotion/react */
const CalendarStyle = css`
  background-color: white;
  color:black;
  padding-top: 0;
  padding-bottom: 10px;
  min-width:60vw;
  text-align:center;
  padding-left: 10px;
  padding-right: 5px;
`
const Calendar2 = () => {
   // calendarRef = React.useRef()
    let {events, getEvents} = useContext(AuthContext);
    console.log("this is events")
    console.log(events)


  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
      <div css={CalendarStyle}>
        <button onClick={getEvents} css={PurpleButtonStyle} style={{margin:"20px"}}>
          Generate
        </button>
        <FullCalendar
          plugins={[ timeGridPlugin, dayGridPlugin ]}
          //ref= {calendarRef}
          initialView="timeGridWeek"
          slotMinTime={'08:00'}
          slotMaxTime= {'26:00'}
          weekends={true}
          allDaySlot={false}
          slotDuration={"01:00:00"}
          events= {events}
          
          displayEventTime = {true}
          expandRows={true}
          height = {'80vh'}
          //dayHeaderFormat={}
        />
        
      </div>
    </div>
  )
}

export default Calendar2