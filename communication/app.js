const {Worker} = require("worker_threads")

const data = {
    name: 'Main',
    age: 10,
    place: 'Guntur'
}

// the passing data to thread happens through
// structured cloning algorithm
new Worker("./calc.js", {workerData: data})

setTimeout(() => {
    console.log("Data in Main thread :", {data})
}, 2500)