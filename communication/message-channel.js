const {Worker, MessageChannel} = require("worker_threads");

const {port1, port2} = new MessageChannel();

port1.postMessage({
    event: 'message',
    from: 'port1',
    data: {
        hello: "Hello World from port1"
    }
});

port1.on('message', (msg) => {
    console.log("message transferred in the channel is");
    console.log("on port1 :",{msg});


})

port2.on('message', (msg) => {
    console.log("message transferred in the channel is");
    console.log("on port2 :", {msg});

    port2.postMessage({
        event: 'message',
        from: 'port2',
        data: {
            hello: "Hello World from port2"
        }
    })
})