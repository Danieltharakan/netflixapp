import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,fetchUrl,isPresent}) {
    const [allMovies,setAllMovies]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";
    //jscode
/* console.log(fetchUrl); */

const fetchData = async() =>{
    const {data} = await instance.get(fetchUrl)
    /* console.log(data.results); */
    setAllMovies(data.results)
}
console.log(allMovies);
useEffect(()=>{
    fetchData()
},[])
  return (
    <div className='row'>
        <h1 style={{marginLeft:"40px",marginTop:"10px"}}>{title}</h1>
        <div className='movie-row'>
            {
                allMovies?.map(item=>(
                    <img className={`movie ${isPresent && 'movie_poster'}`} src={`${base_url}${isPresent?item.poster_path:item.backdrop_path}`} alt="no image"/>
                ))
            }
        </div>
        </div>

  )
}

export default Row