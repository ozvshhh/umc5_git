import React, { useState } from 'react'

import {Ad} from "../components/Ad"
import {AdPage} from "../components/AdPage"

import {StyledHome} from "./Home.style"



export function Home() {
    const [isAd,setIsAd] = useState(false);

    return (
        <StyledHome>
            {isAd ? <AdPage></AdPage>:<></>}
            <Ad isAd={isAd} setIsAd={setIsAd}></Ad>
            <div>안녕하세요dfdfdsf</div>
        </StyledHome>
    )
}
