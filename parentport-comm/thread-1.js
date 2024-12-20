const {parentPort} = require("worker_threads");

setInterval(() => {
    parentPort.postMessage("Message from thread 1")
}, 2500)