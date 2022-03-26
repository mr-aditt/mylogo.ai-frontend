import axios from 'axios';
require('dotenv').config();

export const getData = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL).then(
        data=>data.data
    )
}

export const register = async (useremail, password)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, { useremail, password }).then(
        data => data.data
    );
}

export const login = async (useremail, password)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, { useremail, password }).then(
        data => data.data
    );
}

export const upload = async (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/upload`, data).then(
        res=>console.log(res)
    )
}

export const uploadPP = async (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/upload/profile-pic`, data).then(
        res=>console.log(res)
    )
}

export const getSaved = (email)=>{
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`, {params: { useremail: email }}).then(
        data=>data.data
    )
}

export const saved = async (useremail, id)=>{
    return axios.post('http://localhost:5000/users/save', { useremail, id }).then(
        res=>console.log(res)
    )
}