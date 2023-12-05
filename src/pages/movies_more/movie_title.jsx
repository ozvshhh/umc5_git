import React,{useState} from "react";
//import style from"./movie_title.css"
import styled, {css} from 'styled-components';
import { StyledMovieTitle } from "./movie_title.style";

export function Movie_title(props) {


  return (
    
    <StyledMovieTitle>
    <div className="movie_title">
      <img className="img" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.results.backdrop_path}`}></img>
      <div className="line">
        <div className="line_title">
          {props.results.title}
        </div>
        <div className="line_margin"></div>
        <div className="line_score">
          {props.results.vote_average}
        </div>
      </div>     
    </div>
    </StyledMovieTitle>
  );
}



