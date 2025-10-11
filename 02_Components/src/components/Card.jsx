import React from 'react'

const Card = ({name,age,src}) => {
  return (
    <div>
       <div className='card'>
        <img src={src} alt="" />
      <h1>{name}</h1>
      <p>{age}.</p>
    </div>
      
    </div>
  )
}

export default Card
