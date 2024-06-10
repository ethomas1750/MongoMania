const express = require('express')
const router = express.Router()
const {getAllRecipe,createRecipe} = require("./controller/recipeController")

router.get("/getall/recipe",(req,res)=>{
    getAllRecipe()
        .then((payload)=>{
            res.json({message:"Success",data: payload})
        })
        .catch((error)=>{
            res.json({message:"Error",error: error})
        })
})

router.post("/create/new/recipe",(req,res)=>{
    createRecipe(req.body)
        .then((payload)=>{
            res.json({message:"New Recipe Uploaded",data:payload})
        })
        .catch((error)=>{
            res.json({message:"Error",error:error})
        })
})

module.exports = router
