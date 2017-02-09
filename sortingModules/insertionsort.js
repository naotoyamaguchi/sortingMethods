function insertionSort(values) {
  for(var i = 1; i < values.length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
  return values;
}
