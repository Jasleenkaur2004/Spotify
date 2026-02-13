import React from 'react'

const ArtistMusicPage = ({currentEle}) => {
  return (
    <div className='artistMusic'>
      <img src= {currentEle.img} alt=''/>
      <h1>{currentEle.name}</h1>
      <audio src={currentEle.artistFile}  controls ></audio>
      </div>
  )
}

export default ArtistMusicPage
