import React from 'react';
import './artistCard.css';
import { artistList } from '../../config/congif';

const ArtistCard = ({ setCurrentPage, setCurrentEle }) => {
  return (
    <div className='artistCardMainContainer'>
      {artistList.map((ele, id) => (
        <div
          key={id}
          onClick={() => {
            setCurrentPage("artistSpecificPage");
            setCurrentEle(ele);
          }}
          className="artistCard"
        >
          {/* Show heart only if showHeart is true */}
          {ele.showHeart && <div className="heartOverlay">❤️</div>}

          <img src={ele.img} alt={ele.name} />
          
          <div className="textContainer">
            <h1>{ele.name}</h1>
            <p>Artist</p>
          </div>

          <span id="playButton">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="e-9800-icone e-9800-baseline"
              viewBox="0 0 24 24"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
