import React,{useState} from "react";
//import style from"./movie_detail.css"
import { StyledMovieDetail } from "./movie_detail.style";

export function Movie_detail(props) {
  console.log(props)
  return (
    <StyledMovieDetail results={props.results} className="movie_detail">
      <div className="title"></div>
      <div className="line">
        {props.results.title}
        {props.results.vote_average}
      </div>
      <div className="overlay">
        <div className="overlay_title">
          {props.results.title}
        </div>
        <div className="overlay_content">
          {props.results.overview}
        </div>
        
      </div>
    </StyledMovieDetail>
  );
}
