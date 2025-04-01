let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let item of arr2){
    console.log(item);
}

let person = {
    name : "오승택",
    age : 25,
    hobby : "테니스",
};

let keys = Object.keys(person);
console.log(keys);
for (let i = 0; i < keys.length; i++){
    console.log(keys[i]);
}

let values = Object.values(person);
for(let value of values){
    console.log(values);
}

