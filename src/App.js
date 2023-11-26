
import './App.css'; 
import axios from 'axios';
import {useState,useEffect} from 'react'
import Navbar from './Component/Navbar/Nav'
import Herosection from './Component/Hero_Section'
import Section  from './Component/Section';

function App() {

  const EndPoint= 'https://qtify-backend-labs.crio.do'

  const [topAlbums, setTopAlbums]=useState([])
  const [newAlbums, setNewAlbums]=useState([])

useEffect(()=>{
  axios.get(`${EndPoint}/albums/top`).then(({data})=>{setTopAlbums(data)})
  axios.get(`${EndPoint}/albums/new`).then(({data})=>{setNewAlbums(data)})
},[]);

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Section title="Top Albums" data={topAlbums}/>
      <Section title="New Albums" data={newAlbums}/>
    </>
  );
}

export default App;
