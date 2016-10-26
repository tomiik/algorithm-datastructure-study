//bubble sort
//order O(n^2)

//increment
input = [1,2,3,4,5,6,7];
reversed = bubbleSort(input, -1);
console.log(reversed);
console.log(input);

//decrement
//input = [3,6,1,7,32,7,65,8,4,0,4,8,3,2,6,7];
//bubbleSort(input, -1);
//console.log(input);

function bubbleSort(a,direction){
  flag = true;
  j = 0;
  reversed = 0;
  while(flag){
    flag = false;
    //console.log("::")
    for(i = a.length - 1; i >= j+1; i--){
      if(a[i] * direction < a[i-1] * direction){
        temp = a[i];
        a[i] = a[i-1];
        a[i-1] = temp;
        flag = true;
        reversed++;
      }
      //console.log(a);
    }
    j++;
  }
  return reversed;
}
