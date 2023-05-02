var express = require('express');
var router = express.Router();

/* GET users listing. */
const users =[
  {
  name:'Abc',
  age:12,
  username:'username_1',
  password:'abc123',
},
{
  name:'Abc',
  age:12,
  username:'username_2',
  password:'abc123',

},
{
  name:'Abc',
  age:12,
  username:'username_3',
  password:'abc123',

},
{
  name:'Abc',
  age:12,
  username:'username_4',
  password:'abc123',

},
{
  name:'Abc',
  age:12,
  username:'username_5',
  password:'abc123',

}
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message:'Successfully festch users',
    data:users
});
});
router.post('/',function(req,res,next){
  const data = req.body;
  users.push(data);
  res.send({
    message:'Successfully saved users',
    data:users
});
});
router.put('/:id',function(req,res,next){
  const id = req.params.id;
  const data = req.body;
  if(!users[id]){
    return req.send({
      message: 'This is Invalid',
      data:null
    });
  }
    users[id]=data;
    res.send({
    message:'Successfully update users',
    data:users
});
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