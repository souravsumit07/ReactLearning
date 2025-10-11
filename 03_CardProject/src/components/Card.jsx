import { Bookmark } from 'lucide-react'
import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card'>

        <div className="cardTop">
            <h4>{data.price} </h4>
            <Bookmark size={20} />
        </div>

        <div className="cardMiddle">
            <h2> {data.title}</h2>
        </div>

        <div className="cardBottom">
            <img src={data.logo} alt="" />
            <p>{data.title}</p>
            <button>View</button>
        </div>

    </div>
    
  )
}

export default Card
