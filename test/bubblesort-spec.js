const chai = require('chai');
chai.should();
const bubbleSort = require('../bubblesort');
const insertionSort = require('../insertionsort');
const quicksort = require('../quicksort');
const mergesort = require('../mergesort');


describe('TestString', function() {
  let arrayToSort;
  beforeEach(function () {
    arrayToSort = [5,1,4,2,8];
    bubbleSort(arrayToSort);
  });

  it('should be anumber', function() {
    arrayToSort.should.be.an('array');
  });

  it('should be an array', function() {
    arrayToSort.should.be.an('array');
  });

  it('should return an array with the following', function () {
    arrayToSort.should.deep.equal([1,2,4,5,8]);
  });
});

// describe('Quicksort', function() {
//   let arrayToSort =[12,3,4,2,1,5,7,8,0,2];
//   beforeEach(function () {
//     arrayToSort = [6,3,4,2,1,5,12,7,8,0,2];
//   });

//   it('should be an array', function() {
//     quicksort(arrayToSort).should.be.an('array');
//   });
// });

describe('Mergesort', function() {
  let arrayToMergeSort;
  beforeEach(function(){
    arrayToMergeSort = [12,3,4,2,1,5,7,8,0,2];
  });

  it('should be sorted', function() {
    mergesort(arrayToMergeSort).should.be.an('array');
  });
});