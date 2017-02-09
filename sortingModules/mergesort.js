function split(arr){
  if(arr.length < 2){
    return arr;
  }

  let left = arr.splice(0, arr.length/2);
  let right = arr;

  return merge(split(left), split(right));
}

function merge(left , right){
  let answer = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      answer.push(left.shift());
    } else {
      answer.push(right.shift());
    }
  }

  while(left.length){
    answer.push(left.shift());
  }

  while(right.length){
    answer.push(right.shift());
  }

  console.log("merge sort...." , answer);
  return answer;
}

module.exports = split;