const {workerData} = require("worker_threads");

console.log("data passed from main thread ", workerData)
workerData.name = "Thread";
console.log("Data modified in Thread :", workerData)
