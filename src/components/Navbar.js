import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';
export default function Navbar(props) {
    let [menuStatus, setStatus] = useState(false)





    function hamFun() {
        if (menuStatus === true) {
            document.getElementById('cat-menu').style.right = '0%';
            document.getElementById('HamCloser').style.display = 'block';
            document.getElementById('Hamburger').style.display = 'none';


            setStatus(false)
        } else {
            document.getElementById('cat-menu').style.right = '-100%';
            document.getElementById('HamCloser').style.display = 'none';
            document.getElementById('Hamburger').style.display = 'block';
            setStatus(true)
        }
    }
    return (
        <>

            <nav style={props.mode}>
                <a id='logo' href="/">Newsking.com</a>
                <ul id='nav-menu'>
                    <li><NavLink className='nav-link' to="/react-newsking">Home</NavLink></li>
                    <li><NavLink className='nav-link' to="/About">About us</NavLink></li>
                    <li><NavLink className='nav-link' to="/Contact">Contact us</NavLink></li>
                    <li className='nav-link' >Dark Mode <label className='switch' htmlFor='darkSwitch' >
                        <input type="checkbox" name="" className='checkbox' id='darkSwitch' onClick={props.showMode} />
                        <span className='slider' ></span>
                    </label>

                    </li>
                </ul>
                <label htmlFor="" id='Hamburger' onClick={hamFun}>&#9776;</label>
                <label htmlFor="" id='HamCloser' onClick={hamFun}>&times;</label>
            </nav>
        </>
    )
}
