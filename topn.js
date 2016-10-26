//find top N big numbers from array
r = [5, 3, 5,3,9,3,1,4,9];

//algorithm1 --- simple way O(n^2)
var maxv = -2000000000000;
var minv = r[0];

for(var j = 1; j < r.length; j++){
  for(var i = 0; i < j ; i++){
    maxv = Math.max(maxv,r[j]-r[i]);
  }
}

console.log(maxv);

//algorithm2 --- revised version --- O(n)
var maxv = -2000000000000;
var minv = r[0];

for(var i = 1; i < r.length; i++){
  maxv = Math.max(maxv, r[i] -minv);
  minv = Math.min(minv, r[i]);
  //console.log("r["+ i + "]:" + r[i] + "/maxv:" + maxv + "/minv:" + minv);
}

console.log(maxv);
