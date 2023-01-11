import React, {useContext} from 'react';
import Footer from '../components/footer';
import AuthContext from '../context/AuthContext';
import {css, jsx} from "@emotion/react"
import { CenteredBoxStyle, PurpleButtonStyle } from '../components/EmotionStyles';
/** @jsxImportSource @emotion/react */

const RegisterFormStyle = css`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  font-size:24px;
  row-gap:50px;
  padding:25px;
  
  & input{
    font-size:24px;
    border-radius:7px;
    border-color:#ADADAD;
    border-style:solid;
    display:flex;
    width:100%
  }

  & div{
    display:flex;
    justify-content:center;
    column-gap:20px;
    flex-direction:column;
    width:100%;
  }
`
const RegisterPage = () => {
    let {registerUser} = useContext(AuthContext);
  return (
    <div style={{display:"flex", justifyContent:"center", rowGap:"20px", paddingTop:"20px", alignItems:"center", flexDirection:"column"}}>
      <div css={CenteredBoxStyle} style={{height:"100%"}}>
        <h2 style={{fontSize:"72px"}}>Register</h2>
          <form onSubmit={registerUser} css={RegisterFormStyle}>
              {/* apply input fields for username, password, password, email, first name, last name */}
              <div style={{display:"flex", flexDirection:"row"}}>
                <div>
                  <label>First Name:</label>
                  <input type="text" name="first_name"/>
                </div>
                <div>
                  <label>Last Name:</label>
                  <input type="text" name="last_name"/>
                </div>
              </div>
              <div>
                <label>Username:</label>
                <input type="text" name="username" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password"/>
              </div>
              <div>
                <label>Confirm Password:</label>
                <input type="password" name="password2"/>
              </div>
              <button type="submit" css={PurpleButtonStyle}>Create account</button>
          </form>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RegisterPage