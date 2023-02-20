import React from 'react'
import '../App.css';

export default function Contact(props) {
  return (
    <div className='Content-Page' style={props.mode.backgroundColor==='black'?{backgroundColor:'#3c3c3c',color:'white'}:props.mode}>

    <h1>Contact us</h1>
    <ul  id='contact-id'>
      <li>Email:sanketwaghmare508@gmail.com</li>
      <li>Mobile: +91 9582928333</li>
    </ul>
        <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum soluta quos voluptate, inventore ut ratione sapiente, eos dicta esse pariatur eius porro sint. Voluptas ipsa, ex in dolore autem, reprehenderit aperiam amet tempore tenetur similique veritatis ea dicta voluptatum ipsam enim dolor consectetur! Odit quae eligendi iste ipsam ipsum in accusantium sequi! Cupiditate rem iste, provident aut magni quaerat vel dolore ex nesciunt libero ea commodi asperiores dolorem? Quam a accusantium culpa optio, iure mollitia repellendus maiores sint natus saepe praesentium iste atque, vero error porro beatae? Odio ullam laudantium perferendis quidem facere fugiat maxime ad ipsam impedit corrupti id adipisci, alias aut minima labore laboriosam quam tempora? Adipisci impedit iste voluptas dolorem debitis nobis illum sit neque necessitatibus similique porro ipsam ipsum aut cum excepturi, nesciunt omnis? Quod rem eveniet ex. Dolor provident temporibus velit, ab nihil minima esse odit ex iste tempora dolore vel cumque culpa fuga deleniti voluptatum error repellat veritatis assumenda. Repellendus, deleniti quisquam. Reprehenderit officiis corporis quidem modi quis porro ducimus consequatur molestias, doloribus perferendis laboriosam illo amet commodi dicta doloremque, magnam vero dignissimos est, iure temporibus iusto nisi adipisci! Corrupti illum laboriosam, aperiam animi non, error recusandae alias voluptatem voluptatibus ipsa dignissimos distinctio.</p>
</div>
  )
}
