import React from 'react';
import './trendingCard.css'
import { TrendingCarddDta } from '../../config/congif'

const TrendingCard = ({setCurrentPage , setCurrentEle}) => {
 
  return (
    <>
    <div className='trendingCardMainContainer'>
    {
      TrendingCarddDta.map ((ele , id )=>{
        return (
          <>
           <div  key={id} onClick={()=>{
            setCurrentPage("musicSpecificPage")
            setCurrentEle(ele)
           }}
           className='cardContainer'>
            <img src={ele.imgSrc} alt=''/>  
            <div className='cardTextContainer'>      
             <h2>{ele.heading}</h2>
             <p>{ele.subHeading}</p>
             </div>
             <span id="playButton">
              <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9800-icone e-9800-baseline" viewbox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
             </span>
            </div>
          </> 
        )
      })
    }
    </div>
    </>
  );
};

export default TrendingCard;
