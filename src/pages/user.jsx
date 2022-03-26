import { React, useState, useEffect } from 'react';
import { getData } from '../api'
import { Link } from "react-router-dom";
import logo_img from '../assets/logo.png'
import '../user.css'
import Upload from '../component/upload'
import UploadProfilePic from '../component/profile_pic'
import { saveAs } from 'file-saver'


export default function UserData({ authenticate }) {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState(false);
  const [upload, setUpload] = useState(false);

  // Get initial data
  const handleData = async () => {
    const temp = await getData();
    setData(temp)
  }

  // Show empty profile pic
  const handleImgError = (event) => {
    event.target.src = 'https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png'
  }

  useEffect(() => {
    handleData();
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
          </div>

        </div>

        {data.map(item => {
          return (
            <div className="image-container" key={item._id}>
                <img src={`https://mylogo-backend.herokuapp.com/${item.image}`} alt="" onClick={() => {
                  saveAs(`https://mylogo-backend.herokuapp.com/${item.image}`, 'image.jpg') // Put your image url here.
                }}/>
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
