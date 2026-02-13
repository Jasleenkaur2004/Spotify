import React , {useState} from 'react';
import './mainSection.css';
import Trending from '../trending/Trending'
import PopularArtist from '../popularArtists/PopularArtist'
import SpecificMusicFile from '../../pages/specificMusicPage/SpecificMusicFile';
import ArtistMusicPage from '../../pages/artistMusicPage/ArtistMusicPage';

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentEle, setCurrentEle] = useState("artistSpecificPage")
  return (
    <main className = "mainSection">
      {console.log(currentPage,currentEle)}
      {
        currentPage === "home" ?
        <>
         <Trending setCurrentEle = {setCurrentEle} setCurrentPage = {setCurrentPage} />
         <PopularArtist setCurrentEle = {setCurrentEle} setCurrentPage = {setCurrentPage} />
        </> : 
        currentPage === "musicSpecificPage" ? 
        <>
        <SpecificMusicFile currentEle={currentEle} />
        </> :
         currentPage === "artistSpecificPage" ? 
         <>
         <ArtistMusicPage currentEle={currentEle} />
         </> :
          null  
            
      }
    </main>
  );
};

export default MainSection;
