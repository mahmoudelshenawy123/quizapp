import React from 'react'
import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'

function DescriptionModal(props) {
    const closeModal=()=>{
        props.toggleModal()
    }
    const todo = props.todo
  return (
    <div className='description'>
         <div className='description__modal-backdrop' onClick={closeModal}></div>
        <div className='description__content'>
            <div className='description__content-header'>
                <h2 className='description__content-heading'>
                    {todo.title}
                </h2>
                <button className='description__content-close' onClick={closeModal}>
                    <CloseIcon/>
                </button>
            </div>
            <div className='description__content-desc'>
                <p className='description__content-desc-para'>
                    {todo.description}
                </p>
            </div>
        </div>

    </div>
  )
}

export default DescriptionModal