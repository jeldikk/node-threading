const {workerData} = require("worker_threads");

const port = workerData.port;

port.postMessage("Sending message from Thread-2");

port.on("message", (msg) => {
    console.log("Message received at Port 2 :", msg);
    // console.log({msg});
})