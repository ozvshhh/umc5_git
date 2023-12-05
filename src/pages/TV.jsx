import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { Movie_title } from "./movies_more/movie_title";
import { Movie_detail } from "./movies_more/movie_detail";
import { Movie_view } from "./movies_more/movie_view";


import styled, { css } from "styled-components";
//import style from "../pages/movies.css";

import {tvdummy} from "../data/tvDummy.js";
import { StyledMovies } from "./movies.style";

export function TV(props) 
{
  const[results,setResults] = useState(tvdummy.results.slice(0,16))
  const[mod,setMod] = useState(0)

  const navigate = useNavigate()


  console.log(results[0])
  return(
    <StyledMovies>
      <div className="top_margin"></div>
      <div className="movies_container">
        <div className="movies">
          {results.map((v,i)=>{
            return(<div className="movie_view">
            <Movie_view results={v} index={i}/>
            </div>)})}
        </div>
      </div>
  </StyledMovies>)
  
}
