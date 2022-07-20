var UserDB = require('../model/model')
//create and save user
exports.create = (req,res) => {
     if(!req.body){
         res.status(400).send({message : 'Content can not be empty!'})
         return
     }
     
     const user = new UserDB({
         name : req.body.name ,
         email : req.body.email ,
         gender : req.body.gender ,
         status : req.body.status
     })

     user
     .save(user)
     .then(data => {
        res.redirect('/')
        res.send(data)
        })
     .catch(err => (res.status(500).send({message : err.message || 'Some error occured while creating user'})))
}

//retrieve and return all users / single user
exports.find = (req,res) => {

    if(req.query.id){
      const id = req.query.id 

      console.log(id , 'IDDDDDDDD')

      UserDB.findById(id)
      .then(data => {
          if(!data){
              res.status(404).send({message : 'User not found'})
          }
          else{
              res.send(data)
          }
      })
      .catch(err => {
          res.status(500).send({message : 'Error retrieving user'})
      })
    }
    
    else{
    UserDB.find()
    .then(user => (res.send(user)))
    .catch(err => (res.status(500).send({message : err.message || 'Error occured while retriving data'})))
}}

//Update user by user id 
exports.update = (req,res) => {
     if(!req.body){
         return res.status(400).send({message : "Data to update can't be empty"})
     }

     const id = req.params.id
     UserDB.findByIdAndUpdate(id , req.body ,{useFindAndModify : false})
     .then(data => {
         if(!data){
             res.status(404).send({message : "Cannot update the user"})
         }
         else{
             res.send(data)
         }
     })
     .catch(err => {
         res.status(500).send({message : 'Error updating user info'})
     })
}

//Delete a user
exports.delete = (req,res) => {
   const id = req.params.id

   UserDB.findByIdAndDelete(id)
   .then(data => {
       if(!data){
           res.status(404).send({message : 'Cannot delete user'})
       }
       else{
           res.send({message :'User was successfully deleted'})
       }
   })
   .catch(err => res.status(400).send({message : 'Cannot delete user'}) )
}

