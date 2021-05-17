/* 
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6 .
*/

function staircase(n) {
  const textoVazio = ' ';
  const textoHashtag = '#';
  for (let i = 1; i <= n; i++) {
    console.log(textoVazio.repeat(n - i) + textoHashtag.repeat(i));
  }
}

const n = 6;
staircase(n);

/* 
Other solutions
for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}

-------------------------------
var n = parseInt(readLine());
for(let i=0;i<n;i++){
    console.log(" ".repeat(n-i-1) + "#".repeat(i+1))     
}

--------------------------------
for(var x = 1; x <= n; x++){
    var string = " ".repeat(n - x) + "#".repeat(x);
    console.log(string);
}

*/
