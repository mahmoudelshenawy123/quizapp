import React ,{useState ,useEffect} from 'react'
import {storage} from '../firebase.js'
import {ref ,uploadBytes ,uploadBytesResumable ,listAll ,getDownloadURL} from 'firebase/storage'
import { v4 } from 'uuid'
function UploadImages(){  
  const [imageUpload ,setImageUpload] =useState(null)
    const [imagereviewUpload ,setImagereviewUpload] =useState(null)
    const [images,setImages] =useState([])
    const image2Ref= ref(storage ,`images2`)
    
    const [isUploading ,setIsUploading] =useState(false)
    const changeImagePreview =(e)=>{
      setImageUpload(e.target.files[0])
        let url =URL.createObjectURL(e.target.files[0])
        setImagereviewUpload(url)
    }
    const uploadImage=()=>{
      const imageRef =ref(storage ,`images2/${imageUpload.name +v4()} `)
      setIsUploading(true)
      uploadBytesResumable(imageRef,imageUpload).then((snapShot)=>{
        alert('uploaded')
        setIsUploading(false)
        setImageUpload(null)
        getDownloadURL(snapShot.ref).then(url=>setImages(prevState=>[url,...prevState ]))
        setImagereviewUpload(null)
      }).catch(()=>{
        setIsUploading(false)
      })
    }
    useEffect(()=>{
      listAll(image2Ref).then(resp=>{
        resp.items.forEach(item=>{
          getDownloadURL(item).then(url=>{
            setImages(prevState=>[...prevState ,url])
            console.log(url)
          })
        })
      })
    },[])
  return (
    <div className='upload-container'>
        <input type='file' multiple onChange={(e)=>{changeImagePreview(e)}}/>
        <img src={imagereviewUpload} className='preview-image'/>
        {!isUploading &&  <button onClick={uploadImage}>upload</button>}
        {isUploading &&  <p>uploading ....</p>}
        {
          images.map(image=>(
            <img src={image} className='preview-image'/>
          ))
        }
    </div>
  )
}

export default UploadImages