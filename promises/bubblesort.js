const pgp = require('pg-promise')();
const sortFunction = require('../bubblesort');


function getAnswer(param){
  console.log("sanity");
  return sortFunction(param);
}