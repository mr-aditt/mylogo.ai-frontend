import React, {useState} from 'react'
import { upload } from '../api';



export default function Upload({cancel, data}) {
    const [file, setFile] = useState();
    
    const send = (e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append("file", file);
        upload(data);
        cancel(false)
    }

    const loadFile = function (event) {
        const file = event.target.files[0];
        setFile(file);
        var output = document.getElementById('upload-img');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    
    };

    return (
        <form action='#' className='upload'>
            <img id="upload-img" alt="TO_UPLOAD" />
            <input type="file" name="file" id="file" accept='.jpg' onChange={(e) => loadFile(e)} />
            <button type='submit' className='btn-primary' onClick={(e)=>send(e)}>Upload</button>
            <button className='btn-secondary' onClick={()=>cancel(false)}>Cancel</button>
        </form>
    )
}
