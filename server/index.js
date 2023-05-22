const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require("mongoose");

const app = express()
app.use(cors())
dotenv.config();
app.use(bodyParser.json())

//------------------------------------------------------------------

app.get('/', (req, res) => {
     res.send('Hello World!')
   })

   const InfoSchema = new mongoose.Schema({
     name : String,
     datee : String,
     desc : String,
     ImageURL : String,
   })
 
 const InfoModel = new mongoose.model('Info',InfoSchema);


//GET ALL DATAS

app.get(`/api/info`,async(req,res)=>{
     const {name} =req.query
     const newInfo = await InfoModel.find()
     if(!name){
          res.status(200).send(newInfo)
     }
     else{
          const searchedInfo = newInfo.filter((x)=>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
          res.status(200).send(searchedInfo)
     }
})

//gET ALL DATAS BY ID

app.get(`/api/info/:id`,async(req,res)=>{
     const {id} = req.params
     const infoID = await InfoModel.findById(id)
     res.status(200).send(infoID) 
})


//POST all datas

app.post(`/api/info`,async(req,res)=>{
     const{name,datee,desc,ImageURL} = req.body
     const NewInfo = InfoModel({
          name : name,
          datee : datee,
          desc : desc,
          ImageURL : ImageURL
     })

     await NewInfo.save()
     res.status(201).send({
          message : "Posted successfully!",
          payload: NewInfo
     })
})

//Delete

app.delete(`/api/info/:id`,async(req,res)=>{
     id = req.params.id
     const infoDelete = await InfoModel.findByIdAndDelete(id)
     res.status(202).send({
          message:`${infoDelete.name} successfully deleted!`
     })
})

//UPDATE

app.put(`/api/info/:id`,async(req,res)=>{
     const id = req.params.id
     const{name,datee,desc,ImageURL} = req.body
     const UpdateInfo = {
          name : name,
          datee : datee,
          desc : desc,
          ImageURL : ImageURL
     }
     await InfoModel.findByIdAndUpdate(id,UpdateInfo)
     res.status(200).send({
          message:`${UpdateInfo.name} update is succesfully!`
      })
     
     })


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD)).then(()=>{
    console.log('MongoDB connected!')
})


