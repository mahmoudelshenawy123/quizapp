import React, { useRef, useState } from 'react'

function AddToDOForm() {
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
        fetch('http://localhost:8000/todos',{
            method:'POST',
        },toDoData).then(message=>console.log(message)).catch(err=>console.log(err))
    }
  return (
    <form className='add-to-do__form' onSubmit={(e)=>{submitForm(e)}}>
        <div className='add-to-do-container'>
            <input type='text' value={toDoData.name} data-type="name" onChange={(e)=>{changeFormData(e)}}  className='add-to-do__input' id='add-to-do__input-user' placeholder=' '/>
            <label htmlFor='add-to-do__input-user'>UserName*</label>
        </div>
        <div className='add-to-do-container'>
            <textarea className='add-to-do__input' value={toDoData.description} data-type="description" onChange={(e)=>{changeFormData(e)}} id='add-to-do__input-user' placeholder=' '></textarea>
            <label htmlFor='add-to-do__input-user'>Description*</label>
        </div>
    </form>
  )
}

export default AddToDOForm