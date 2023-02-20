import React from 'react'

export default function Loader(props) {
  return (
    <div id='loader' style={props.mode} className='Content-Page' >
        <img src="/loading.gif" alt="" width={200} />
    </div>
  )
}
