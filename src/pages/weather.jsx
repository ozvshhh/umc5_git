import axios from 'axios';
import React,{useEffect, useState} from 'react'

export function Weather() {

    const [location, setLocation] = useState("Seoul");
    const [temp, setTemp] = useState("11");
    const [weather, setWeather] = useState("Clear");

    const API_KEY = "c7ffa3ac7a2048cd38099366b74c236c"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    
    

    axios.get(URL)
    .then((res)=>{console.log(res)})

    
    //useEffect(setLocation(getdata()[0]),[])

    return (
    <div className='com_Weather'>
      <input placeholder='도시이름을 입력하세요'></input>
      <div className='data'>
        <div className='city_name'></div>
        <div className='temporature'></div>
        <div className='weather'></div>
      </div>
    </div>
  )
}
