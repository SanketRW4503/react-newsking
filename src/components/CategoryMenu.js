import React, { useEffect } from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'

import Footer from './Footer';

export default function CategoryMenu(props) {

   useEffect(()=>{
    props.mode.backgroundColor==='black'?document.getElementById('darkS').checked=true:document.getElementById('darkS').checked=false

   })
   
    return (
        <section id='cat-menu' style={props.mode}>
            <ul id='nav-menu-cat'style={props.mode}>
                <li><NavLink style={props.mode} to="/">Home</NavLink></li>
                <li><NavLink style={props.mode} to="/About">About us</NavLink></li>
                <li><NavLink style={props.mode} to="/Contact">Contact us</NavLink></li>
                <li>Dark Mode <label className='switch'  >
                        
                        <input type="checkbox" name=""  className='checkbox' id='darkS'  onClick={props.showMode}/>
                        <label className='slider' htmlFor='darkS'></label>
                    </label></li>
                </ul>
            <h2>News Categories:</h2> 
            <ul style={props.mode}>
                <li><NavLink style={props.mode} to="/business">Business</NavLink></li>
                <li><NavLink style={props.mode} to="/entertainment">entertainment</NavLink></li>
                <li><NavLink style={props.mode} to="/sports">Sports</NavLink></li>
                <li><NavLink style={props.mode} to="/music">Music</NavLink></li>
                <li><NavLink style={props.mode} to="/technology">Technology</NavLink></li>
                <li><NavLink style={props.mode} to="/politics">Politics</NavLink></li>

        
        </ul>
       {window.innerWidth>850? <Footer mode={props.mode}/>:<div></div>} 
        </section>
    )
}
