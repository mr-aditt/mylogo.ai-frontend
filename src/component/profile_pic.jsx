import React, {useState} from 'react'
import { uploadPP } from '../api';
import axios from 'axios'



export default function UploadProfilePic({cancel}) {
    const [file, setFile] = useState();
    
    const send = async ()=>{

        const data = new FormData();
        data.append("file", file);
        console.log(file);
        uploadPP(file)
    }

    const loadFile = function (event) {
        const file = event.target.files[0];
        setFile(file);
        var output = document.getElementById('upload-profile-pic');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    
    };

    return (
        <form action='#' className='profile-pic-upload'>
            <h3>Profile Pic</h3>
            <img id="upload-profile-pic" alt="" />
            <input type="file" name="file" id="file" accept='.jpg' onChange={(e) => loadFile(e)} />
            <button type='submit' className='btn-primary' onClick={send}>Upload</button>
            <button className='btn-secondary' onClick={()=>cancel(false)}>Cancel</button>
        </form>
    )
}