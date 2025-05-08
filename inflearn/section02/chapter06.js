
let arr1 = [
    {name : "오승택", hobby: "테니스"},
    {name : "김은자", hobby: "테니스"},
    {name : "오장석", hobby: "당구"},
];

const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") return TreeWalker;
});

console.log(tennisPeople);

let arr2 = [1, 2, 3,];

arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});

let names = arr1.map((item) => item.name);
console.log(names);

let arr3 = ["오승택", "김대웅", "이준호"];
arr3.sort()
console.log(arr3)

let arr4 = [10, 3, 5];
arr4.sort((a,b) => {
    if(a > b){
        return 1
    }
    else if(a < b){
        return -1
    }
    else{
        return 0;
    }
});
console.log(arr4)