
function quicksort(arr){
  if(arr.length === 0){
    console.log("if arr length = 0 ", arr);
    return arr;
  }
  let pivot = arr[0];
  let left =[];
  let right = [];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }
    if(arr[i] >= pivot){
      right.push(arr[i]);
    }
  }
  let newArray = quicksort(left).concat(pivot, quicksort(right));
  console.log("PIVOT", pivot);
  console.log("LEFT", left);
  console.log("RIGHT", right);
  console.log("NEW ARRAY" , newArray);
  return newArray;
  //this is the correct/cleaner way, but I left the variable newArray so I could console log it.
  //return quicksort(left).concat(pivot, quicksort(right));
}

quicksort([3,4,62,32,101,95,23,1,4,200,34]);

// function quicksort(arr, left, right){
//   // 
// }

// module.exports = quicksort;