import React from 'react';

import svg from '../img/Untitled.svg';

import { StyledAdPage } from "./AdPage.style";

export  function AdPage() {
  return (
    <StyledAdPage>
      <img className='adimg' src={svg}/>
    </StyledAdPage>
  )
}
