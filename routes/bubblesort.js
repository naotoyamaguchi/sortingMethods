const express = require('express');
const bodyparser = require('body-parser');
const router = express.Router();
router.use(bodyparser.urlencoded({encoded: true}));
router.use(bodyparser.json());
const sortFunction = require('../bubblesort');
let test = [5,1,4,2,8];

router.post('/', (req, res) => {
  console.log(req.body);

  
  // let array = JSON.parse(req.body.array);
  // res.send(sortFunction(array));
});

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;