import _ from 'lodash';

const arr = [1, 2, 3, 4, 5];

// sum all arr number using reduce
const sumUsingReduce = arr.reduce((acc, curr) => acc + curr);

// make sum from array using lodash
const sum = _.sum(arr);
console.log(sumUsingReduce);

// sum all arr number
let sum2 = 0;
const sumUsingForEach = arr.forEach(element => {
    sum2 += element;
});
console.log(sumUsingForEach);
