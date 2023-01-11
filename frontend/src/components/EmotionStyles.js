import {css, jsx} from "@emotion/react"
const CenteredBoxStyle = css`
display:flex;
align-items:center;
flex-direction:column;
background-color:white;
padding:15px;
color:black;
border-radius:25px;`

const PurpleButtonStyle = css`
border-radius: 10px;
font-size:22px;
border-color:transparent;
padding:15px;
&:hover{
  cursor:pointer;
  background-color: #08080C
}
transition:background-color 0.25s ease-in-out;
color:white;
background-color:#292A3A
`
export {CenteredBoxStyle, PurpleButtonStyle}