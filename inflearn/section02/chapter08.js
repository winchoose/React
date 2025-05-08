function add10(num){
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof num === "number"){
                resolve(num + 10);
            }
            else {
                reject("num은 숫자가 아닙니다");
            }

        }, 3000)
    });
    return promise;
}

add10(0).then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);
    return add10(result);
})
.catch((error) => {
    console.log(result);
    return add10(error);
})