import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {css, jsx} from "@emotion/react"
/** @jsxImportSource @emotion/react */

const NavBarStyle = css`
  background-color: #55566C;
  color:white;
  display:flex;
  flex-direction:column;
  width:25%;
}
`
const LinkStyle = css`
  text-decoration: none;
  color: white;
  background-color: #31366D;
  width:100%;
  text-align:center;
  transition:background-color 0.25s ease-in-out;
  &:hover{
    background-color: #08080C
  }
`

const highlightCurPage = (pagePathName)=>{
  if(window.location.pathname === pagePathName){
    return "#1E2142"
  }
}
function NavBar(){
    let {logoutUser} = useContext(AuthContext);
   console.log(window.location.pathname)
    return(
        <div css={NavBarStyle}>
          <Link to="preferences" css={LinkStyle} style={{backgroundColor:highlightCurPage("/schedule/preferences")}}><h3>Set Schedule Preferences</h3></Link>
          <Link to="" css={LinkStyle} style={{backgroundColor:highlightCurPage("/schedule")}}><h3>View Schedule</h3></Link>
        </div>

    );
}

export default NavBar