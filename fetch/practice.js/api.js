async function mokData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        }, 1500)
    })
}

async function printData() {
    const data = await mokData();
    console.log(data);
}
printData();