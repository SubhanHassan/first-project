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
      message: 'Successfully fetched users',
      data: results
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
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






/* update Users Listing. */
router.put('/:id',async function(req,res,next){
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await UsersController.updateUsers(id,data);
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
router.delete('/:id',function(req,res,next){
   const id =req.params.id;
   users.splice(id,1);
  res.send({
    message:'Successfully delete users',
    data:users
});
});

module.exports = router;
