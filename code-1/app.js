const {Worker} = require("worker_threads");
const fs = require("fs");

const a = 400;

// const thread1 = new Worker("./calc.js");
// const thread2 = new Worker("./calc.js");

// for(let i=0; i < 4; i++){
//     new Worker("./calc.js")
// }

setTimeout(() => {
    new Worker("./calc.js")
}, 2000)



// while(true){}

// console.log("Main Thread", {a})