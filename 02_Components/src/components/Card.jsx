import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className='card'>
        <img src={props.src} alt="" />
      <h1>{props.name}</h1>
      <p>{props.age}.</p>
    </div>
      
    </div>
  )
}

export default Card
