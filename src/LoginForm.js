import React, { useState } from 'react'
import {ReactComponent as LogoSvg} from './assets/imgs/instaLogo.svg'
// import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'

function LoginForm() {
    const [loginData ,setLoginData] =useState({email:null,password:null})
    const addLoginData =(e)=>{
        setLoginData((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const SendData=()=>{

    }
  return (
    <div className='login__form'>
        <LogoSvg> </LogoSvg>
        <h1>login To INSTABUG</h1>
        <div className='login__links-cont'>
            <button className='login__links login__links--google'>Google</button>
            <button className='login__links login__links--GitHub'>GitHub</button>
            <button className='login__links login__links--Micrsoft'>Micrsoft</button>
        </div>
        <div className='login__OR'>OR</div>
        <form onSubmit={SendData}>
            <div className='login__input-cont'>
                <label htmlFor='login__email'>Work Email</label>
                <input type="email" name="email" id ='login__email' className='login__form-email' onInput={(e)=>{addLoginData(e)}}/>
            </div>
            <div className='login__input-cont'>
                <label htmlFor='login__password'>Work Email</label>
                <input type="password" name="password" id ='login__password' className='login__form-password' onInput={(e)=>{addLoginData(e)}}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default LoginForm