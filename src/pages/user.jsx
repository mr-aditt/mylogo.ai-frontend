import { React, useState, useEffect } from 'react';
import { getData, saved, getSaved } from '../api'
import { Link } from "react-router-dom";
import logo_img from '../assets/logo.png'
import '../user.css'
import Upload from '../component/upload'
import UploadProfilePic from '../component/profile_pic'
import { saveAs } from 'file-saver'


export default function UserData({ authenticate }) {
  // const [images, setImages] = useState([]);
  // const [save, setSave] = useState(false);
  const [data, setData] = useState([]);
  const [pic, setPic] = useState(false);
  const [upload, setUpload] = useState(false);
  // const [saveList, setSaveList] = useState([]);

  // Get initial data
  const handleData = async () => {
    const temp = await getData();
    setData(temp)
    // console.log(newTemp);
  }

  // Show empty profile pic
  const handleImgError = (event) => {
    event.target.src = 'https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png'
  }

  // Save user logos
  // const handleSave = (event) => {
  //   var id = event.target.id;
  //   saved(localStorage.getItem('useremail'), id)
  //   setSave(!save)
  // }

  // Get user's saved logos
  // const getUserData = async () => {
  //   const userImages = await getSaved(localStorage.getItem('useremail'))
  //   setImages(data.filter(o1 => userImages.some(o2 => o1._id === o2)));
  // }

  useEffect(() => {
    handleData();
    // getUserData();
  }, [data])


  return (
    <>
      <nav className="flex-r">
        <div>
          <Link to='#'><img src={logo_img} alt="LOGO" /></Link>
        </div>
        <div className='flex-l'>
          <button className='btn-primary' onClick={() => setUpload(true)}>Upload</button>
        </div>
      </nav>
      <div className='users-page-container'>
        {(upload) && <Upload cancel={setUpload} data={data}/>}
        {(pic) && <UploadProfilePic />}
        <div className="wrapper">
          <div className="sidebar">
            <div className="profile">
              <img src="" alt='' onError={(event) => handleImgError(event)} onClick={() => setPic(true)} />
              <h3>{localStorage.getItem('useremail')}</h3>
              <button className='btn-secondary' onClick={() => authenticate(false)}>Logout</button>
            </div>
            <hr />
            {/* <div className='saved-images'>
              {
                images.map(item=>{
                  return <img src={`http://localhost:5000/${item.image}`} alt="ALT" key={item}/>
                })
              }
            </div> */}
          </div>

        </div>

        {data.map(item => {
          return (
            <div className="image-container" key={item._id}>
                <img src={`http://localhost:5000/${item.image}`} alt="" onClick={() => {
                  saveAs(`http://localhost:5000/${item.image}`, 'image.jpg') // Put your image url here.
                }}/>
              {/* {!save && <i className="fa-regular fa-heart save" id={item._id} onClick={(e) => handleSave(e)}></i>}
              {save && <i className="fa-solid fa-heart save save-color" id={item._id} onClick={(e) => handleSave(e)}></i>} */}
            </div>
          )
        })}

      </div>
      {/* <div className="user-page-footer">
        <span className="gradient">mylogo.ai</span>
        <span className="serif">Copyright 2022</span>
      </div> */}
    </>
  )
}
