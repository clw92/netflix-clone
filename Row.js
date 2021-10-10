import React from 'react'
import { useState, useEffect } from 'react';
import axios from "./axios"
import "./Row.css" 


const base_Url ="https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {



const [movies,setMovies] = useState([]);

useEffect (() => {

    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)

   
       
        return request;
    }

    fetchData();
},[fetchUrl])



    return (
        <div className="row">
           <h3> {title} </h3>
           <h1> {movies.title} </h1>

           <div className="row__posters">

            
           
           
           {movies.map(movie => {

             return <img
             key={movie.id}
             className="row__poster" 
             src={`${base_Url}${movie.poster_path}`}
             alt={movie.title} />
             
               
            

            })}
          

            </div>
            
        </div>
    )
}

export default Row;
 