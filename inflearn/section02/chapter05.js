let arr1 = [1, 2, 3,];

arr1.forEach(function(item, idx, arr){
    console.log(idx, item * 2);
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);

let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);
console.log(isInclude);

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);