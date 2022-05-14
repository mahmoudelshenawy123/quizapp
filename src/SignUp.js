import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/SignUp.css'
function SignUp() {
    let siqnUp={
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        phonenumber:'',
        country:'',   
        email:'',   
    }
    const [signUpData ,setLoginData] =useState(siqnUp)
    const inputRef = useRef(null)
    const changeFormData =(e)=>{
        let newSignUpData = signUpData
        newSignUpData [e.target.getAttribute('data-type')]=e.target.value
        setLoginData((prevState)=>{
            return {
                ...prevState,
                [e.target.getAttribute('data-type')]:e.target.value
            }
        })
        CheckAvilable(newSignUpData)
    }
    const CheckAvilable=(newSignUpData)=>{
        console.log('asds')
        if(newSignUpData.username === '' || newSignUpData.password === ''){
            inputRef.current.setAttribute('disabled',true)
            inputRef.current.classList.add('disabled')
        }else{
            inputRef.current.removeAttribute('disabled')
            inputRef.current.classList.remove('disabled')
        }
    }
    const submitForm =(e)=>{
        e.preventDefault();
        console.log('signUpData')

            console.log(signUpData)
    }
  return (
    <section className='sign-up'>
        <h1 className='sign-up-header'>
            SignUp
        </h1>
        <form className='sign-up__form' onSubmit={(e)=>{submitForm(e)}}>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.firstname} data-type="firstname" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-firstname' placeholder=' '/>
                <label htmlFor='sign-up__input-firstname'>Firstname*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.lastname} data-type="lastname" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-lastname'  placeholder=' '/>
                <label htmlFor='sign-up__input-lastname'>Lastname*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.username} data-type="username" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-userName' placeholder=' '/>
                <label htmlFor='sign-up__input-userName'>UserName*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.phonenumber} data-type="phonenumber" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-phonenumber' placeholder=' '/>
                <label htmlFor='sign-up__input-phonenumber'>phonenumber*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.country} data-type="country" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-country' placeholder=' '/>
                <label htmlFor='sign-up__input-country'>country*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.email} data-type="email" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-email'  placeholder=' '/>
                <label htmlFor='sign-up__input-email'>email*</label>
            </div>
            <div className='sign-up__input-container'>
                <input type='text' value={signUpData.password} data-type="password" onChange={(e)=>{changeFormData(e)}} className='sign-up__input' id='sign-up__input-password'  placeholder=' '/>
                <label htmlFor='sign-up__input-password'>Password*</label>
            </div>
            <button type='submit' className='sign-up__sign-in disabled' disabled ref={inputRef} >
                Sign Up
            </button>
        </form>
        <Link to="/login" className='sign-up__login'>
            Don't have an account? Sign Up
        </Link>
    </section>
  )
}

export default SignUp