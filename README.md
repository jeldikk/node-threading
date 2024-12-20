# worker_threads module

- Workers are similar to threads
- variables defined in on thread are completely isolated to the main thread


- calling process.exit(0) is going to exit all threads


The communication from main thread to child threads happens through `MessageChannel`.

Creating a new instance of MessageChannel will create a pair of ports which we will pass it to child threads for future communications

do not forget to transfer the ownership of ports to the threads to which you are passing as workerData