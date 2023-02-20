import React from 'react'
import insta from './images/insta.png'
import fb from './images/fb.png'
import twitter from './images/twitter.png'
export default function Footer(props) {
  return (
    <footer style={props.mode}>
        <div id='footer-social-link'>
            <img src={insta} alt="insta-logo"  width={40}/>
            <img src={fb} alt="facebook-logo"  width={40}/>
            <img src={twitter} alt="twitter-logo"  width={40}/>
        </div>
        <div id='footer-links'>
            <a href="https://media.nngroup.com/media/editor/2019/01/16/clarity.png">Info</a>
            <a href="https://media.nngroup.com/media/editor/2019/01/16/clarity.png">Support</a>
            <a href="https://media.nngroup.com/media/editor/2019/01/16/clarity.png">Tearms of use</a>
            <a href="https://media.nngroup.com/media/editor/2019/01/16/clarity.png">Privacy Policy</a>
        </div>
        <div id='footer-copyright'>	&#169; 2023 Newsking.com</div>
    </footer>
  )
}
