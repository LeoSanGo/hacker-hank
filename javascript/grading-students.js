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
