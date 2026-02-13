import React from 'react'
import './specificMusicPage.css'


const SpecificMusicFile = ({currentEle}) => {
  return (
    <div className='page'>
      <div className='nextpage'>
      <img src= {currentEle.imgSrc} alt=''/>
      </div>
      <div className='nextPage2'>
      <h1>{currentEle.heading}</h1>
      <h4>{currentEle.subHeading}</h4>
      <br/>
      <audio src={currentEle.musicFile} autoPlay controls ></audio>
      
    </div>
    </div>
  )
}

export default SpecificMusicFile
