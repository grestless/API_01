const express = require('express');
const userSchema = require('../MODELS/user');

const router = express.Router();



//create usuario
router.post("/users", (req, res) => {

    const user = userSchema(req.body); //para que interpreta la info hay q transformarlo a un obj json
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
    
});

//get usuarios
router.get("/users", (req, res) => {

 userSchema //para que interpreta la info hay q transformarlo a un obj json
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
    
});


//get UN usuario por id
router.get("/users:id", (req, res) => {
    const {id} = req.params;
    userSchema //para que interpreta la info hay q transformarlo a un obj json
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({message: error}));
       
   });

   //put usuario(update)
   router.put("/users:id", (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
           .updateOne({_id:id},{$set:{name, age, email} })
           .then((data) => res.json(data))
           .catch((error) => res.json({message: error}));
       
   });

   //delete usuario
     router.put("/users:id", (req, res) => {
        const {id} = req.params;
        userSchema
               .deleteOne({_id:id},{$set:{name, age, email} })
               .then((data) => res.json(data))
               .catch((error) => res.json({message: error}));
           
       });
    




module.exports = router;

