const {Worker, MessageChannel} = require('worker_threads');

const {port1: thread1FromPort, port2: thread1ToPort} = new MessageChannel();
const {port1: thread2FromPort, port2: thread2ToPort} = new MessageChannel();

const thread1 = new Worker("./thread-1.js", {workerData: {port: thread1ToPort}, transferList:[ thread1ToPort]});
const thread2 = new Worker("./thread-2.js", {workerData: {port: thread2ToPort}, transferList: [thread2ToPort]});

setInterval(() => {
    thread1FromPort.postMessage("Message from main-thread to thread-1");
    thread2FromPort.postMessage("Message from main-thread to thread-2")
}, 2000)

thread1FromPort.on('message', (msg) => {
    console.log("Main(T1) > ", msg)
});

thread2FromPort.on('message', (msg) => {
    console.log("Main(T2) > ", msg)
})