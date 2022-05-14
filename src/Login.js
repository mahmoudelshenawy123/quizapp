import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './stylesheets/Login.css'

function Login() {
    const [loginData ,setLoginData] =useState({username:'',password:''})
    const [users,setUsers] =useState([])
    const inputRef = useRef(null)
    let navigate = useNavigate();

    const changeFormData =(e)=>{
        let newLoginData = loginData
        newLoginData [e.target.getAttribute('data-type')]=e.target.value
        setLoginData((prevState)=>{
            return {
                ...prevState,
                [e.target.getAttribute('data-type')]:e.target.value
            }
        })

        if(newLoginData.username === '' || newLoginData.password === ''){
            inputRef.current.setAttribute('disabled',true)
            inputRef.current.classList.add('disabled')
        }else{
            inputRef.current.removeAttribute('disabled')
            inputRef.current.classList.remove('disabled')
        }
      
    }
    const submitForm =async (e)=>{
        e.preventDefault();
        let users= await  fetch('http://localhost:8000/users').then(res=>res.json()).then(data=>data)
        if(checkUser()){
            navigate('/Home');
        }
        console.log(checkUser())

        setUsers(users)
    }
    const checkUser=()=>{
        let xx= users.find(user=>{
            if(user.username===loginData.username && user.password===loginData.password){
                console.log('adsass')
                return true
            }
        })
        return xx ?true:false
    }
  return (
    <section className='login'>
        <h1 className='login-header'>
            login
        </h1>
        <form className='login__form' >
            <div className='login__input-container'>
                <input type='text' value={loginData.username} data-type="username" onChange={(e)=>{changeFormData(e)}} className='login__input' id='login__input-user' placeholder=' '/>
                <label htmlFor='login__input-user'>UserName*</label>
            </div>
            <div className='login__input-container'>
                <input type='text' value={loginData.password} data-type="password" onChange={(e)=>{changeFormData(e)}} className='login__input' id='login__input-password'  placeholder=' '/>
                <label htmlFor='login__input-password'>Password*</label>
            </div>
            <button type='submit' className='login__sign-in disabled' ref={inputRef} onClick={(e)=>{submitForm(e)}}>
                Sign In
            </button>
        </form>
        <Link to="/SignUp" className='login__sign-up'>
            Don't have an account? Sign Up
        </Link>
    </section>
  )
}

export default Login