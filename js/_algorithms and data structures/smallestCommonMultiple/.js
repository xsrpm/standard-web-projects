/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
//https://es.wikipedia.org/wiki/M%C3%ADnimo_com%C3%BAn_m%C3%BAltiplo

function smallestCommons(arr) {
  arr.sort((a,b)=>a-b)
  let arr2=[]
  for(let i=arr[0];i<=arr[1];i++)
    arr2.push(i)
  console.log(arr2)
  let mul=1
  let j=2
  while(j<=arr[1]){
    let div=false
    for(let i=0;i<arr2.length;i++){
      if(arr2[i]%j===0){
        arr2[i]/=j
        div=true
      }
    }
    console.log(j)
    console.log(div)
    console.log(arr2)
    if(!div){
      j++
    }
    else{
      mul*=j
    }
  }
  return mul;
}


console.log(smallestCommons([1,5]))


/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/