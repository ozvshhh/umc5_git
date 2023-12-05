import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader } from "./Header.style";

import { LoginControl } from './LoginControl';

export function Header(props) {
  return (
    <StyledHeader>
        <div className='header'>
            <Link to="/home">
                <img
                    style={{ width: "154px", height: "20px" }}
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="로고"
                />
            </Link>
            <ui><Link to="/movies">영화</Link></ui>
            <ui><Link to="/tv">프로그램</Link></ui>
            <ui><Link to="/celebirity">인물</Link></ui>
            <ui><Link to="/login"><LoginControl isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}></LoginControl></Link></ui>
        </div>
    </StyledHeader>
    )
}


