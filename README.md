# sortingMethods

## Bubble Sort

### ELI5

Go down a list (array) of numbers in pairs incrementing by one. If the first number is greater than the second number, switch the two around and go on (else keep go on). Once you reach the end of the list, repeat. If you iterate through the array and there are no switch/swaps, you are complete.

### Pseudo code

``` javascript 
procedure bubbleSort( A : list of sortable items )
   n = length(A)
   repeat 
     swapped = false
     for i = 1 to n-1 inclusive do
       /* if this pair is out of order */
       if A[i-1] > A[i] then
         /* swap them and remember something changed */
         swap( A[i-1], A[i] )
         swapped = true
       end if
     end for
   until not swapped
end procedure
```

### Best Case Scenario

The array is already sorted.

### Worst Case Scenario

The array is in reverse.


## Insertion Sort

### ELI5

Go down a list (array) of numbers and look for a number that is less than the one before it. Take that number and iterate backwards to find a location where it is greater than the number on the left (before) it, AND less than the number of the right (after) it. Insert it there and keep going down the array. Once you reach the end, iterate through the array again until no insertions are done.

### Pseudo code

Asdf

### Best Case Scenario

The array is already sorted. You would iterate once, and find that no insertions were required and you are complete. Linear run time.

### Worst Case Scenario

A reversed order array. You would have to insert each number into the sorted portion of the array. Quadtratic run time.

## Selection Sort

### ELI5

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt excepturi atque ratione magnam nisi odio eveniet veritatis animi, incidunt ducimus optio similique impedit asperiores, iure dignissimos enim et quod.

### Pseudo code

Asdf

### Best Case Scenario

text

### Worst Case Scenario

text

## Merge Sort

### ELI5

####not done..

Merge sort works initially by splitting an array down into pairs of two. Then the main part of  the function comes into play when merging them back together into bigger and bigger arrays until it is complete. 

### Pseudo code

Asdf

### Best Case Scenario

The array is already sorted. Although you will still split the entire array, there will be no merges that require extra steps.

### Worst Case Scenario

Not sure...

## Quick Sort

### ELI5

Quick sort divides the list of numbers (array) based on a pivot point (number) and creates two seperate arrays; one (we'll call left) that has all numbers that are less, and one (we'll call right) that has all numbers greater than the pivot point. You then call this recursively and merge the left/pivot/rights.

### Pseudo code
``` javascript
 Quicksort(A,p,r) {  
     if (p < r) {  
        q <- Partition(A,p,r)  
        Quicksort(A,p,q)  
        Quicksort(A,q+1,r)  
     }  
 }  
 
 
 
 Partition(A,p,r)  
     x <- A[p]  
     i <- p-1  
     j <- r+1  
     while (True) {  
         repeat  
             j <- j-1  
         until (A[j] <= x)  
         repeat  
             i <- i+1  
         until (A[i] >= x)  
         if (i A[j]  
         else   
             return(j)  
     }  
 }  
 ```


### Best Case Scenario

text

### Worst Case Scenario

text