import React from 'react';
import './popularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtist = ({setCurrentPage , setCurrentEle}) => {
  return (
    <div className='popularArtistsMainContainer trendingSectionMainContainer'>
         <span>
         Popular Artist
          </span>
        
        <ArtistCard setCurrentPage = {setCurrentPage} setCurrentEle = {setCurrentEle}/>
    </div>
  );
};

export default PopularArtist;
