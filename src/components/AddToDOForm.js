import React, { useRef, useState } from 'react'
import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'
 
function AddToDOForm(props) {
    const [toDoData ,setToDoData] =useState({title:'',description:'',createdAt:null})
    const inputRef = useRef(null)
    
    const changeFormData =(e)=>{
        let newToDoData = toDoData
        newToDoData [e.target.getAttribute('data-type')]=e.target.value
        setToDoData((prevState)=>{
            return {
                ...prevState,
                [e.target.getAttribute('data-type')]:e.target.value
                // createdAt:new Date().getDate()
            }
        })

        // if(newToDoData.username === '' || newToDoData.password === ''){
        //     inputRef.current.setAttribute('disabled',true)
        //     inputRef.current.classList.add('disabled')
        // }else{
        //     inputRef.current.removeAttribute('disabled')
        //     inputRef.current.classList.remove('disabled')
        // }
      
    }
    const submitForm =(e)=>{
        e.preventDefault();
        console.log(toDoData)
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers:{"content-type":"application/json",'Access-Control-Allow-Origin':'*'},
            mode: 'no-cors',
            body:toDoData
        }).then(message=>console.log(message)).catch(err=>console.log(err))
    }
  return (
      <>
        <form className='add-to-do__form' onSubmit={(e)=>{submitForm(e)}}>
            {/* <nav className='navbar-todo'>
                <button className='navbar-todo__close' onClick={props.closeTodo}><CloseIcon/></button>
                <h2 className='navbar-todo__heading'>
                    Create To Do Item
                </h2>
                <button type='submit' className='navbar-todo__Submit' onClick={submitForm}>Submit</button>
            </nav> */}
            <div className='add-to-do__form-container'>
                <div className='add-to-do-container'>
                    <input type='text' value={toDoData.title} data-type="title" onChange={(e)=>{changeFormData(e)}}  className='add-to-do__input' id='add-to-do__input-user' placeholder=' '/>
                    <label htmlFor='add-to-do__input-user'>title*</label>
                </div>
                <div className='add-to-do-container'>
                    <textarea className='add-to-do__input' value={toDoData.description} data-type="description" onChange={(e)=>{changeFormData(e)}} id='add-to-do__input-user' placeholder=' '></textarea>
                    <label htmlFor='add-to-do__input-user'>Description*</label>
                </div>
            </div>
        </form>
    </>
  )
}

export default AddToDOForm