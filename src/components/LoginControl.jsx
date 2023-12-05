import React, {useState} from 'react'

import { StyeldLoginConatrol } from './LoginControl.style'

export function LoginControl(props) {
  
  
  return (
    <StyeldLoginConatrol>
        <div className='log_in_box'>
            <div className='log_in_btn_case'>
                <div className='log_in_btn' onClick={()=>{props.setIsLoggedIn(true)}}
                >{props.isLoggedIn? "로그인":"로그아웃"}</div>
            </div>
                <div className='log_in_notice'>{props.isLoggedIn? "로그인해주세요!" : "환영합니다"}</div>
        </div>
    </StyeldLoginConatrol>
  )
}

