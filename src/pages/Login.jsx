import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Login(props) {


  const [user,setUser] = useState({id:"",pw:""});
  const [isSending,setIsSending] = useState(0);

  const url = "http://localhost:8000"


  function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }

  const updateId = (value)=>{
    setUser((user)=>{
      let newuser = {...user};
      newuser.id = value;
      
      return newuser
    })
    console.log(user);
  }

  const updatePw = (value)=>{
    setUser((user)=>{
      let newuser = {...user};
      newuser.pw = value;
      return newuser
    })
    console.log(user);
  }
  
  const submitEvent = (user)=>
  {
    setIsSending(1);
    console.log("submit",user);
    axios.post(url+"/user/login",{id:user.id, pw:user.pw})
    .then((res)=>{
      console.log(res);
      console.log(res.data.result.AccessToken);
      localStorage.setItem("token", res.data.result.AccessToken);
      localStorage.setItem("id", res.data.result.userId);
      sleep(1500);
      setIsSending(0);
    })
    .catch((err)=>
    {
      console.log(err);
      sleep(1500);
      setIsSending(0);
    })
  }
  
  const checkEmpty = (user) =>
  {
    if(user.id==="")
      if(user.pw ==="")
        alert("값을 입력하세요");
  }

  return (
    <div className='login'>

        {isSending===1 ? <div className='loading'>로딩중...</div>:
          <>
          <p>이메일과 비밀번호를 입력해주세요</p>
        <div className='email_box'>
            <div className='email_notice'>이메일 주소</div>
            <input className='email_input' onChange={(e)=>{updateId(e.target.value);}} type='email'></input>
            <div className='warnning'>올바른 이메일을 입력해주세요</div>
            <div className='succes'>올바른 이메일 입니다.</div>
        </div>
        <div className='pw_box'>
            <div className='pw_notice'>비밀번호</div>
            <input className='pw_input' onChange={(e)=>{updatePw(e.target.value);}} type='password' placeholder='영문,숫자,특수문자 포함 8자 이상'></input>
        </div>
        
        <button className='check_btn'
        disabled={isSending}
        onClick={()=>
        {
          props.setIsLoggedIn(false);
          alert("로그인성공!");
          submitEvent(user);
        
        }}>
            확인
        </button>
          </>
        }
        
        

        
    </div>
  )
}
