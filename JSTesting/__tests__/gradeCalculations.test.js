const { averageExams,isStudentPassExam } = require('../gradeCalculations');
 
// group all test cases in a single describe block
describe('pengujian olah aritmatika', () => {
test('it should return exact average', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
})

test('it should return student passed exam or not', () => {
    const listValueOfExams2 = [80, 100, 100, 80];
    const name2 = 'Budi';
    expect(isStudentPassExam(listValueOfExams2, name2)).toBe(true);
})

test('it should return exam failed status', () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, 'Budi')).toBe(false);
})

});