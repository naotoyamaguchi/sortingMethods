function sort(arr){
  let newArray = arr;
  let swapped = false;
  for(let i = 1; i < newArray.length; i++){
    let current = newArray[i];
    let previous = newArray[i - 1];
    if(current < previous){
      let placeholder = newArray[i];
      newArray[i] = previous;
      newArray[i-1] = placeholder;
      swapped = true;
    }
  }
  if(swapped === false){
    console.log("right before the return", newArray);
    return newArray;
  } else {
    console.log("hitting the else", newArray);
    return sort(newArray);
  }
}



module.exports = sort;