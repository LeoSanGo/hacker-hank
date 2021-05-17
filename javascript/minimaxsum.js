function miniMaxSum(arr) {
  const newArray = arr.sort((a, b) => a - b);
  const total = newArray.reduce(
    (total, currentElement) => total + currentElement
  );
  return console.log(total - newArray[4], total - newArray[0]);
}

const arr = [1, 3, 5, 4, 2];
miniMaxSum(arr);

/* 
Other Solutions
arr.sort((a,b) => a-b);
    console.log(String(arr.slice(0,4).reduce((a,b)=>a+b)) + ' ' + String(arr.slice(1,5).reduce((a,b)=>a+b)));

-----------------------------------
function miniMaxSum(arr) {
    
    let min = +Infinity, max = -Infinity, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min)
            min = arr[i];
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(sum - max, sum - min); 
}

------------------------------

const sum = arr.reduce((acc, next) => acc + next, 0);
console.log(sum - Math.max(...arr), sum - Math.min(...arr));

----------------------------------
const totalSum = arr.reduce((total, num) => total + num)
console.log(totalSum - Math.max.apply(null, arr), totalSum - Math.min.apply(null, arr))

-------------------------------
function miniMaxSum(arr) {
    
    const sum = arr.reduce((acc, next) => acc + next);
    let min, max;
    min = sum - Math.max(...arr);
    max = sum - Math.min(...arr);
    
    console.log(min, max);
}

-----------------------------------
let sum=0
for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
}
  console.log(sum-Math.max(...arr),sum-Math.min(...arr))

  
*/
