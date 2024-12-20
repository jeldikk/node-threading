const {workerData} = require("worker_threads");

const {port} = workerData;

port.on('message', (msg) => {
    console.log("Thread2 > ", msg)
});

setInterval(() => {
    port.postMessage("Message from Thread-2")
}, 3000)