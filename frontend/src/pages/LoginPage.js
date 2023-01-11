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
  padding:25px;
  & label{
    margin-bottom:12px;
  }
  & input{
    font-size:24px;
    border-radius:7px;
    margin-bottom:25px;
    border-color:#ADADAD;
    border-style:solid;
  }
`
const LoginPage = () => {

    let {loginUser} = useContext(AuthContext);
  return (
    
    <div style={{display:"flex", flexDirection:"column", height:'100vh', justifyContent:"space-between"}}>
      <div style={{height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div css={CenteredBoxStyle} style={{marginTop:'20px', minWidth:"30vw", aspectRatio:1}}>
          <h2 style={{fontSize:"72px"}}>Login</h2>
          <form onSubmit={loginUser} css={RegisterFormStyle}>
              <label>Username</label>
              <input type="text" name="username"/>
              <label>Password</label>
              <input type="password" name="password"/>
              <button type="submit" css={PurpleButtonStyle}>Login</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage