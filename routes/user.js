const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res)=> {
      usercontroller.getAllUsers(req, res);
})

router.get('/users/:id', (req, res)=> {
     usercontroller.getUser(req, res);
})

module.exports = router;



// sare bussines ka kam conyroler 
// git 1 tool hai -- kam le ja rha hai -- la rha bhi
// hit hub center repository..