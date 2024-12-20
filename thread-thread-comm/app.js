const {Worker, MessageChannel} = require('worker_threads');

const {port1, port2} = new MessageChannel()

const thread1 = new Worker("./thread-1.js", {workerData: {port: port1}, transferList: [port1]});
const thread2 = new Worker("./thread-2.js", {workerData: {port: port2}, transferList: [port2]})