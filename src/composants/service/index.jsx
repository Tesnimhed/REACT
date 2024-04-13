import React from 'react'
import cat from "./image.webp"
import "./service.css"
export default function Service() {
    let exist=false
  return (
    <React.Fragment>
    <div className='container'>
        <img src={cat}></img>
        <div>
        <h1> lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quo esse soluta perferendis, doloribus accusamus suscipit, enim voluptatibus a quasi quam facere laudantium dic
            *ta? Labore amet iure cupiditate, nam quod a.S</p>
        </div>
    </div>
    {
        exist?(<h3>je m'appelle tesnim</h3>):(<h3>je m'appelle hedjeres</h3>)
   
    }
    
    </React.Fragment>
  )
}
