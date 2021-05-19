/* 
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of

age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

candles (4,4, 1, 3]

The maximum height candles are 4 units high. There are 2 of them. so return 2.

Function Description

Complete the function birthday CakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights

Returns

int: the number of candles that are tallest

Input Format

The first line contains a single integer, n. size of candles[]

The second line contains n space-separated integers, where each Integer i describes the height of a candles[i]

Constraints

• 1 ≤ ≤ 105

1 candles[i]<10

Sample Input 0

4

3213

Sample Output 0

2

Explanation 0

Candle heights are [3, 2, 1, 3]. The tallest candles are 3 units, and there are 2 of them.
*/

function birthdayCakeCandles(candles) {
  let countCandles = 0;
  const highestCandle = Math.max(...candles);
  for (let index = 0; index < candles.length; index++) {
    if (highestCandle === candles[index]) countCandles++;
  }
  return countCandles;
}
const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));

/* 
Other Solutions
function birthdayCakeCandles(n, ar) {
    // Complete this function
    var max = Math.max(...ar);    
    var result = ar.filter(c => c === max);    
    return result.length;
}

--------------------------------------
const birthdayCakeCandles = a =>
(f => a.filter(v => v === f).length)(Math.max(...a));

------------------------------------------

const birthdayCakeCandles = (candles) =>
  ((tallest) => candles.filter((v) => v === tallest).length)(Math.max(...candles));

---------------------------------------


*/
