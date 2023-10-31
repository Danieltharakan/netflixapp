import React, { useEffect } from 'react'
import './Banner.css';
import { useState } from 'react';
import instance from '../instance';

function Banner({fetchUrl}) {
    const [allMovies,setMovies]=useState()
   
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{
        const {data} = await instance.get(fetchUrl)
        setMovies(data.results[Math.floor(Math.random()*data.results.length)]);
        //console.log(data.results);
        //setMovies(data.results)//storing into state to get access out side the function
    }
    console.log(allMovies);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${allMovies?.backdrop_path})`,backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className='banner-content'>
            <h1>{allMovies?.name}</h1>
            <button type="button" class="btn btn-danger bi bi-play-fill"><span style={{color:"white", backgroundColor:"transparent"}}>Play</span></button>
            <button style={{marginLeft:"10px"}}  type="button" class="btn btn-outline-light">More Info</button>
            <h2>{allMovies?.overview?.slice(0,200)}...</h2>
           

        </div>
    
  </div>
  )
}

export default Banner
