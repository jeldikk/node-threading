const {workerData} = require("worker_threads");

const {port} = workerData;

port.on('message', (msg) => {
    console.log("Thread 1 >", msg)
})

setInterval(() => {
    port.postMessage("Message from Thread-1")
}, 3000)