async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({
                name: "오승택",
                id: "winchosse",
            })
        }, 1500)
    })
}
async function printData(){
    const data = await getData();
    console.log(data);
}
printData();
