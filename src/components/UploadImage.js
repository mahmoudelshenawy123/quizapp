import React, { useState ,useEffect } from 'react'
import {storage} from '../firebase'
import {ref ,uploadBytes ,listAll ,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
function UploadImage() {
    const [imageUpload,setImageUpload] = useState(null)
    const [imageUploadPreview,setImageUploadPreview] = useState(null)
    const [images ,setImages] =useState([])
    const storageRef =ref(storage,'images/')
    const previewImage =(e)=>{
        setImageUpload(e.target.files[0])
        let src =URL.createObjectURL(e.target.files[0])
        setImageUploadPreview(src)
    }
    const upploadImage =()=>{
        if(imageUpload ==null)return;
        const imageRef= ref(storage ,`images/${imageUpload.name +v4()}`)
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert('image uploaded')
        })
    }
    useEffect(()=>{
        listAll(storageRef).then(response=>{
            response.items.forEach(item=>{
                getDownloadURL(item).then(url=>{
                    setImages(prevState=>{return[...prevState,url]})
                })
            })
        })
    },[])
  return (
    <div className='upload-container'>
        <input type='file' onChange={(e)=>{previewImage(e)}}/>
        <img src={imageUploadPreview} className='preview-image' alt=''/>
        <button className='upload' onClick={upploadImage}>Upload</button>
        {
             images.map((image,index)=>(
                <img src={image} alt={image} className='preview-image' key={index}/>
             ))
        }
    </div>
  )
}

export default UploadImage