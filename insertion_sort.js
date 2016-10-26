// insertion sort alorithm
// sort numbers in the array
// order: minimum O(n) , maximum O(n^2)

input = [5,5,5,5,5,2,4,6,1,3];

console.log(input);

//increment
insertion_sort(input,1);
console.log(input);

input = [5,5,5,5,5,2,4,6,1,3];

//decrement
insertion_sort(input,-1);
console.log(input);


function insertion_sort(a,direction){
    for(var i = 1; i < a.length; i++){
      v = a[i];
      j = i - 1;
      while(j >= 0 && a[j] * direction > v * direction){
        //console.log("¥a[" + (j+1) + "]:" + a[j+1] + " = " + "a[" + j + "]:" + a[j]);
        a[j+1] = a[j];
        j--;
      }
      //console.log("a[" + (j+1) + "]:" + a[j+1] + " = " + "v:" +v);
      a[j+1] = v
      //console.log(a)
    }
}
