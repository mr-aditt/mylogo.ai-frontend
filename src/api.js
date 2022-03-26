import axios from 'axios';

export const getData = ()=>{
    return axios.get('https://mylogo-backend.herokuapp.com/').then(
        data=>data.data
    )
}

export const register = async (useremail, password)=>{
    return axios.post(`https://mylogo-backend.herokuapp.com//users/signup`, { useremail, password }).then(
        data => data.data
    );
}

export const login = async (useremail, password)=>{
    return axios.post(`https://mylogo-backend.herokuapp.com//users/signin`, { useremail, password }).then(
        data => data.data
    );
}

export const upload = async (data)=>{
    return axios.post(`https://mylogo-backend.herokuapp.com//users/upload`, data).then(
        res=>console.log(res)
    )
}