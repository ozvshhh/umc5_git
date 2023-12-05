import React from 'react'

export function Ad(props) {
  return (
    <button
    onClick={()=>{props.setIsAd(props.isAd ? false:true)}}>
    {props.isAd ? '광고 안 보기' : '광고 보기'}
    </button>
  )
}
