var express = require('express');
var router = express.Router();
const { UsersController } = require('../Controllers');

/* GET users listing. */
// const users =[
//   {
//   name:'Abc',
//   age:12,
//   username:'username_1',
//   password:'abc123',
// },
// {
//   name:'Abc',
//   age:12,
//   username:'username_2',
//   password:'abc123',

// },
// {
//   name:'Abc',
//   age:12,
//   username:'username_3',
//   password:'abc123',

// },
// {
//   name:'Abc',
//   age:12,
//   username:'username_4',
//   password:'abc123',

// },
// {
//   name:'Abc',
//   age:12,
//   username:'username_5',
//   password:'abc123',

// }
// ];
/* GET Users Listing. */
router.get('/', async function(req, res, next) {
   const filter = req.query;
  try {
    const results = await UsersController.getAllUsers(filter);
    return res.status(200).send({
      message:"Successfully Fetched Users",
      data: results

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message:' Something WENT WRONG',
      data:error
    });
    
  }
  
  
});
// Get Single User
router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
 try {
   const results = await UsersController.getUserById(id);
   return res.status(200).send({
     message:"Successfully Fetched Users",
     data: results

   });
 } catch (error) {
   console.log(error)
   res.status(500).send({
     message:' Something WENT WRONG',
     data:error
   });
   
 }
 
 
});

  /* Add Users . */  

router.post('/', async function(req,res,next){
  const data = req.body;
  try {
    const user = await UsersController.addUser(data);
    res.status(200).send({
      message: 'Successfully saved user',
      data: user
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

// Login User
router.post('/login', async (req,res,next) => { 
  const {username, password} = req.body;
  if(!username){
    return res.status(400).send({
      message: 'Username Required',
      data :null
    })
  }
  if(!password){
    return res.status(400).send({
      message: 'password Required',
      data: null
    });
  }
  try{
    const user = await UsersController.verifyUser({username, password});
    if(!user){
      return res.status(401).send({
        message: 'Invalid Credentials',
        data :null
      });
    }
    res.status(200).send({
      message: 'Successfully login user',
      data: user
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});




/* update Users Listing. */
router.put('/:id',async function(req,res,next){
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await UsersController.updateUser(id,data);
    res.status(200).send({
      message:'Successfully festch users',
      data:result
  });

}catch (error) {
    res.status(500).send({
      message:'Something went wrong',
      data:error
    
    });
}
});
router.delete('/:id',async function(req,res,next) {
   const id = req.params.id;
   const data = req.body;
   try {
    const result = await UsersController.deleteUser(id,data);
    res.status(200).send({
      message:'Successfully delete user',
      data:result
  });

}catch (error) {
    res.status(500).send({
      message:'Something went wrong',
      data:error
    
    });
}
 
});

module.exports = router;
