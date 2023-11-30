
import './App.css'; 
import axios from 'axios';
import {useState,useEffect} from 'react'
import Navbar from './Component/Navbar/Nav'
import Herosection from './Component/Hero_Section'
import Section  from './Component/Section';
import Filter from './Component/FilterSection';
import FAQ from './Component/FAQ';

function App() {

  const EndPoint= 'https://qtify-backend-labs.crio.do'

  const [topAlbums, setTopAlbums]=useState([]);
  const [newAlbums, setNewAlbums]=useState([]);
  const [songs, setSongs]=useState([]);
  const [genres,setGenres]=useState([]);
  const [filteredSongs,setFilteredSongs]=useState([]);


useEffect(()=>{
  axios.get(`${EndPoint}/albums/top`)
    .then(({data})=>{setTopAlbums(data)})

  axios.get(`${EndPoint}/albums/new`)
    .then(({data})=>{setNewAlbums(data)})

  axios.get(`${EndPoint}/songs`)
    .then((res)=>{setSongs(res.data) 
      setFilteredSongs(res.data)})

  axios.get(`${EndPoint}/genres`)
    .then((res)=>{setGenres([{"key":"all","label":"All"},...res.data.data])})
},[]);

  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section title="Top Albums" data={topAlbums}/>
      <Section title="New Albums" data={newAlbums}/>
      <div className='horizontal-line'></div>
      <Filter title="Songs" data={filteredSongs} genres={genres} executeFilter={(genre)=>{
          if(genre === 'all'){
            setFilteredSongs(songs)
          }else{
            setFilteredSongs(songs.filter(song => song.genre.key === genre))
          }
        }}/>
      <div className='horizontal'></div>  
      <FAQ/>
    </div>
  );
}

export default App;
