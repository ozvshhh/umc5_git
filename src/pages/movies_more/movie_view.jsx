import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
//import style from"./movie_title.css"

import { Movie_title } from "./movie_title";
import { Movie_detail } from "./movie_detail";

export function Movie_view(props) {

  const[mod,setMod] = useState(0);
  const navigate = useNavigate()
  const gotoDetail = ()=>{
    navigate(`/detail/${props.results.title}`,{state:{title:props.results.title, backdrop_path:props.results.backdrop_path}})
  }

  return (
        <div 
        onMouseOver ={()=>{setMod(1)}}
        onMouseOut={()=>{setMod(0)}}
        onClick={()=>{gotoDetail()}}>
          {mod===0 ? <Movie_title results={props.results} index={props.index}/> : <Movie_detail results={props.results} index={props.index}/>}
        </div>
  );
}
