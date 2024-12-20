const {parentPort} = require("worker_threads");

setInterval(() => {
    parentPort.postMessage("Message from thread-2")
}, 2500)