/* 
HackerLand University has the following grading policy:

• Every student receives a grade in the inclusive range from 0 to 100.

• Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5 If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples

grade 84 round to 85 (85-84 is less than 3) grade 29 do not round (result is less than 40)

grade 57 do not round (60-57 is 3 or higher)

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Function Description

Complete the function grading Students in the editor below.

gradingStudents has the following parameter(s): • int graces[n]: the grades before rounding

Returns

inting the grades after rounding as appropriate

Input Format

The first line contains a single integer, n. the number of students.

Each line of the n subsequent lines contains a single integer, grades[i].

Constraints

• 1 ≤ n ≤ 60

0 grades < 100

Sample Input 0

4

73

67

38

33

Sample Output 0

75 67

40

33

Explanation 0

ID

1

2

3

4

Original Grade

73

67

38

33

Final Grade

75

67

40

33

1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75-73 <3, the student's grade is rounded to 75 2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70-673, the grade will not be modified and

the student's final grade is 67. 3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40-38<3, the student's grade will be rounded

40.

4. Student 4 received a grade below 33, so the grade will not be modified and the student's final grade is 33.
*/

function gradingStudents(grades) {
  let newGrade = [];
  const compareGrades = grades.slice();

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrade.push(grades[i]);
    } else if (!(grades[i] % 5 === 0)) {
      while (!(grades[i] % 5 === 0)) {
        grades[i]++;
      }
      console.log(grades[i]);
      if (grades[i] - compareGrades[i] < 3) {
        newGrade.push(grades[i]);
        console.log(i + '-' + newGrade[i] + '- ' + compareGrades[i]);
      } else newGrade.push(compareGrades[i]);
    } else {
      newGrade.push(compareGrades[i]);
    }
  }
  return newGrade;
}

const grades = [38, 39, 40, 41, 42];
console.table(gradingStudents(grades));

/* 
Other Solutions

function solve(grades){
    return grades.map((n) => {
        let diff = 5 - (n % 5);
        if(diff < 3 && n >= 38) {
            n += diff;
        }
        
        return n;
    })
}

----------------------------------------

function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var grade = parseInt(readLine());
        var incrementedGrade = grade;
        if(grade < 38){
            console.log(grade);
            continue;
        }
        // increment , if needed, until grade is a multiple of 5
        while(incrementedGrade % 5 != 0){
            incrementedGrade++
        }
        if(incrementedGrade - grade < 3 )
            console.log(incrementedGrade);
        else
            console.log(grade);
            
    }

}

*/
