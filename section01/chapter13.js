function main(value) {
    value();
}


function sub(){
    console.log(" i am sub");
}

main(sub);

function repeat(count){
    for(let idx = 1; idx <= count; idx++){
        console.log(idx);
    }
}