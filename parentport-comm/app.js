const {Worker} = require("worker_threads");

const thread1 = new Worker("./thread-1.js");
const thread2 = new Worker("./thread-2.js");

thread1.on('message', (msg) => {
    console.log("Main(T1) > ", msg)
});

thread2.on('message', (msg) => {
    console.log("Main(T2) > ", msg)
});
