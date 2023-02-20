import React from 'react'
import '../App.css';


export default function Newscard(props) {
  return (
    <div id='card'style={props.mode.backgroundColor==='black'?{backgroundColor:'black'}:props.mode} >
        <img src={props.img} alt="img"  width={200}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.newsUrl} target='_blank' rel="noreferrer" id='rm'>Read More...</a>
    </div>
  )
}
