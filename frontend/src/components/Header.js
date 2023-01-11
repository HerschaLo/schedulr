import React, {useContext, useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import  AuthContext  from '../context/AuthContext'
import {css, jsx} from "@emotion/react"
/** @jsxImportSource @emotion/react */
const HeaderSectionStyle = css`
  display: flex;
  row-gap: 5px;
  column-gap:3px;
  width: 100%;
  @media (max-width: 800px){
    flex-wrap:wrap;
  } 
`

const HeaderStyle = css`
  background-color: #292A3A;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100vw;
`
const LogoutStyle = css`
    text-decoration: none;
    color: white;
    background-color: #E03535;
    text-align:center;
    transition:background-color 0.25s ease-in-out;
    &:hover{
      background-color: #08080C
    }
    @media (max-width: 800px){
      width:100%;
    } 
    width:20%;

`

const LinkStyle = css`
  text-decoration: none;
  color: white;
  background-color: #1A1A25;
  width:100%;
  text-align:center;
  transition:background-color 0.25s ease-in-out;
  &:hover{
    background-color: #08080C
  }
`
const highlightCurPage = (pagePathName)=>{
  if(RegExp("^"+pagePathName).exec(window.location.pathname)){
    return "#121219"
  }
}
const Header = () => {
    let {user, logoutUser} = useContext(AuthContext);

    return (
    <div css={HeaderStyle}>
        <div style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height:"100%", padding:"0px 0px 0px 0px"}}>
          <h1 style={{fontSize:"78px", margin:0}}>Schedulr.</h1>
          {user ? 
            <div style={{position:"absolute", display:"flex", paddingRight:"25px", justifyContent:"center", alignItems:"center", right:"8px", height:"100%"}}>
              <h3>{user.first_name} {user.last_name}</h3>
            </div>
          : null}
        </div>
        <div css={HeaderSectionStyle}>
          <Link to="/" css={LinkStyle} style={{backgroundColor:highlightCurPage("home")}}><h3>Home</h3></Link>
          { user ? null: (<Link to="/login" css={LinkStyle} style={{backgroundColor:highlightCurPage("/login")}}><h3>Login</h3></Link>)} 
          {user ? null: <Link to="register" css={LinkStyle} style={{backgroundColor:highlightCurPage("/register")}}><h3>Register</h3></Link>}
          {!user ? null : <Link to="schedule" css={LinkStyle} style={{backgroundColor:highlightCurPage("/schedule")}}><h3>My Schedule</h3></Link>}
          {!user? null : (<Link to="/login" css={LogoutStyle} onClick={logoutUser}><h3>Logout</h3></Link>) }
          
        </div>
    </div>
  )
}

export default Header