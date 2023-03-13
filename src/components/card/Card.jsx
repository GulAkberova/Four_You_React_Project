import React from 'react'
import { Link} from "react-router-dom";

function Card({index}) {
  return (
  <>
    
               <div className="mehsul_img">
                 <Link to={`/product/${index.id}`}>
                   <img src={index.images[0].image}/>
                
                 </Link>
               </div>
               <div className="mehsul_text">
                 <h5>{index.title}</h5>
                 <p>{index.price}m</p>
               </div>
             
  </>

  )
}

export default Card