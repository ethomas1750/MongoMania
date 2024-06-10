const Recipe = require("../model/Recipe")

module.exports = {
    getAllRecipe : (callback)=>{
        Recipe.find({})
         .then((payload)=>{
            callback(null, payload)
         })
         .catch(error=>{
            callback(error, null)
         })
    },
    createRecipe: (body, callback)=>{
            let savedRecipe = new Recipe({
                recipeName: body.recipeName,
                ingredients: body.ingredients,
                directions: body.directions
            })
            savedRecipe.save()
                .then((payload)=>{
                    callback(null, payload)
            })
            .catch(error =>{
                callback(error, null)
            })
        } 
    }
