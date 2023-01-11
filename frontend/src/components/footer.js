import {css, jsx} from "@emotion/react"
/** @jsxImportSource @emotion/react */
const FooterStyle = css`
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    width:100%;
    & a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    }
`
function Footer(){
    return(
        <div css={FooterStyle}>
            <a href="https://github.com/utmgdsc/schedulr">GitHub</a>
            <a href="https://instagram.com/username">Instagram</a>
            <a href="https://linkedin.com/in/username">LinkedIn</a>
            <a href="mailto:email@example.com">Email</a>
        </div>
    )

}

export default Footer;   