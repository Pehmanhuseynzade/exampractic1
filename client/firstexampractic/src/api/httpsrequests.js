import axios from "axios";
import {BASE_URL} from "./base_URL"

//GET ALL DATAS

export const getAlldatas = async()=>{
     let GlobalData;
    await axios.get(`${BASE_URL}`)
    .then(res=>{
     GlobalData = res.data
    })
    return GlobalData
}

//Get All dats by Id

export const getAlldatasbyID = async(id)=>{
     let GlobalData;
     await axios.get(`${BASE_URL}/${id}`)
     .then(res=>{
          GlobalData = res.data
     })
     return GlobalData
}

//Delete by ID

export const deleteDatasByID = async(id)=>{
     await axios.delete(`${BASE_URL}/${id}`)
}

//POST data by ID

export const postDataByID = async(id,payload)=>{
     await axios.post(`${BASE_URL}/${id}`,payload)
}

//Put data by ID

export const putDataByID = async(update,id)=>{
     await axios.put(`${BASE_URL}/${id}`,update)
}