import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledDetail } from './Detail.style';

export function Detail() {

    const location = useLocation();
    console.log(location.state.backdrop_path);
    console.log(location.state.title);
    return(
        <StyledDetail>
            <div className='detail'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${location.state.backdrop_path}`}></img>
                <p>{location.state.title}</p>
            </div>
        </StyledDetail>
    )
}
