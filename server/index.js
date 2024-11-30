const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Users = require('./userModel')


const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>{
    console.log('database connected....!!');
}).catch((err)=>{
    console.log(err);
})

app.get('/users',async (req,res)=>{
    try {
        const users = await Users.find()
        return res.status(201).send(users)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
    
})
app.get('/oneUser/:id',async (req,res)=>{
    const {id} = req.params
    try {
        const user = await Users.findById(id)
        return res.status(201).send(user)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
    
})
app.post('/createUser',async (req,res)=>{
    const {name,age,phone} = req.body
    try {
        const newUser = new Users({
            name,age,phone
        })
        const created = await newUser.save()
        if(!created){
            return res.status(401).json({error:'user not created!'})
        }
        return res.status(201).send('successfully created!')
    } catch (error) {
        res.status(401).json({error:error.message})
    }
    
})

app.put('/updateUser/:id',async(req,res)=>{
    const {name,age,phone} = req.body
    const {id} = req.params
    try {
        const update = await Users.findByIdAndUpdate(id,{name,age,phone})
        if (!update) {
            return res.status(401).json({error:'user not updated!'})
        }
        return res.status(201).json({message:'user updated!'})

    } catch (error) {
        return res.status(401).json({error:error.message})
    }

})

app.delete('/deleteUser/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const deleteUser = await Users.findByIdAndDelete(id)
        if (!deleteUser) {
            return res.status(401).json({error:'user not deleted!'})
        }
        return res.status(201).json({message:'user deleted!'})
    } catch (error) {
        return res.status(401).json({error:error.message})
    }
})

app.listen(PORT,()=>{
    console.log('server is running on port '+PORT);
})