import React, { useState } from 'react'



const Card = ({id,image,info,price,name,removeTour}) => {
    const[readmore,setReadmore]=useState(false);
    const description = readmore ? info:`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore)
    }

    


  return (

        <div className="card">
            <img src={image} className='image' />

            <div className="tourInfo">
            <div className="tour-details">
                <h4 className="tourPrice">₹ {price}</h4>
                <h4 className="tourName">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className='readMore' onClick={readmoreHandler}>
                    {readmore ? `Show Less` : `Read More`}
                </span>
               </div>
            </div>

          
                <button className='btnRed' onClick={() => removeTour(id)}>
                    Not Intrested
                    </button>      

        </div>
   
  )
}

export default Card