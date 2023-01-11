import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext';
import Footer from '../components/footer.js'
import { Outlet } from 'react-router-dom';
import {css, jsx} from "@emotion/react"
import NavBar from '../components/nav-bar';
/** @jsxImportSource @emotion/react */

const ViewStyle = css`
  display: flex;
  flex-direction: row;
  width:100vw;
`

const CalendarView = css`
  display:flex;
  flex-direction: column;
  width:100%;
`
const SchedulePage = () => {
  let [note, setNotes] = useState([]);
  let {authTokens, logoutUser, user, getEvents } = useContext(AuthContext);

  useEffect(() => {
    console.log("this useEffect is running now")
  getNotes();
  getEvents();
  }, [])

  

  let getNotes = async () => {

    let response = await fetch('http://127.0.0.1:8000/api/notes',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authTokens.access}`
    }})
    let data = await response.json();

    if(response.status === 200){
      console.log(data)
      console.log(user.username)
      setNotes(data);
  }else if(response.statusText == 'Unauthorized'){
    logoutUser();

  }
  

}

  return (
    <div>
      <div css={ViewStyle}>
        <NavBar />
        <div css={CalendarView}>
          <Outlet/>
        </div>
      </div>    
      <Footer />
    </div>


  )
}

export default SchedulePage