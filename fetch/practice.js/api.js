/*async function mokData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 1500)
    })
}*/
//더 가독성 있게 바꾸면
async function mockData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await response.json(); 
    return data; 
}


async function printData() {
    const data = await mockData();
    console.log(data);
}
printData();