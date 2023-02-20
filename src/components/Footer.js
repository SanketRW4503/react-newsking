import React from 'react'

export default function Footer(props) {
  return (
    <footer style={props.mode}>
        <div id='footer-social-link'>
            <img src="/insta.png" alt=""  width={40}/>
            <img src="/fb.png" alt=""  width={40}/>
            <img src="/twitter.png" alt=""  width={40}/>
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
