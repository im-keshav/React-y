import React from 'react'
import { Bookmark } from 'lucide-react';

function Cards(props) {
  return (
         <div className="card">
          <div className="top">
            <img src={props.companyLogo} alt="" />
            
            <Bookmark size={20} strokeWidth={2}/>

          </div>
          <div className="center">
            <h2>{props.jobRole}</h2>
            <p>{props.description}</p>
            <div className='tag'>
              <h3>{props.tag1}</h3>
              <h3>{props.tag2}</h3>
            </div>
          </div>
          <div className="bottom">
            <button className='btn'>Details</button>
            <button>Apply Now</button>
          </div>
        </div>

  )
}

export default Cards