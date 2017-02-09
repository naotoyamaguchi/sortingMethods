function sort(arr){
  let newArray = arr;
  let swapped = true;
  while(swapped === true){
    swapped = false;
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
  }
  return newArray;
}


module.exports = sort;