/* 
A person wants to determine the most expensive computer keyboard and USB drive that can be 
purchased with a give budget. Given price lists for keyboards and USB drives and a budget, 
find the cost to buy them. If it is not possible to buy both items,

return-1.

Example

b=60

keyboards [40, 50, 60]

drives [5, 8, 12]

The person can buy a 40 keyboard +12 USB drive 52, or a 50 keyboard+8 USB drive 58. Choose the latter

as the more expensive option and return 58.

Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n] the keyboard prices

• int drives[m]: the drive prices

• int b: the budget

Returns

• int the maximum that can bespent of -1 if it is not possible to buy both items

Input Format

The first line contains three space separated integers b. n. and m. the budget, the number of keyboard models and the

number of USB drive models.

The second line contains n space-separated integers keyboard, the prices of each keyboard model.

The third line contains m space-separated integers drives, the prices of the USB drives.

Constraints

1≤n,m< 1000

• 1 < b < 100

• The price of each item is in the inclusive range [1, 10ª6].

Sample Input 0

10 2 3
3 1 
5 2 8

Sample Output 0

9

Explanation 0

Buy the 2nd keyboard and the 3rd USB drive for a total cost of 8+1=9.

Sample Input 1

5 1 1

4

5

Sample Output 1
-1
Explanation 1

There is no way to buy one keyboard and one USB drive because 4 +5 > 5. so return -1.
*/

function getMoneySpent(keyboards, drives, b) {
  let newArray = [];
  let onbuddget = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      newArray.push(keyboards[i] + drives[j]);
    }
  }
  const sortedArray = newArray.sort((a, b) => a - b);
  sortedArray.filter((element) => {
    if (element <= b) {
      onbuddget = element;
    } else if (onbuddget <= 0) {
      onbuddget = -1;
    }
  });

  return onbuddget;
}

const b = 1;
const k = [298, 1, 25, 1];
const d = [5, 2, 8, 1];

console.log(getMoneySpent(k, d, b));

/* 
Other Solutions
function getMoneySpent(keyboards, drives, b) {
  return keyboards.reduce((acc, curr) =>
    Math.max(acc, ...drives.map(usb => usb + curr).filter(ku => b >= ku))
  , -1);
}

-----------------------------------
function getMoneySpent(keyboards, drives, b) {
    
 let valid = [];  
 keyboards.forEach(k => drives.forEach(d => k+d <= b ? valid.push(k+d) : 0));
 return valid.length === 0 ? -1 : Math.max(...valid); 
 
}

---------------------------------

function getMoneySpent(keyboards, drives, b) {
    let ans = -1;
    for(let i of keyboards){
        for(let j of drives){
            let temp = i+j;
            if(temp > ans && temp <= b){
                ans = temp;
            }
        }
    }
    return ans;
}

---------------------------------------
function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
    [ ...keyboards ].forEach((x, i) => {
        [ ...drives ].forEach((y, j) => {
            if (maxSpent < x + y && x + y <= b) {
                maxSpent = x + y;
            }
        });
    });
    return maxSpent;
}
*/
