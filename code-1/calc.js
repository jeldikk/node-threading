const fs = require("fs")
const a = 100;

console.log(" Worker Thread ",{a})

setTimeout(() => {
    // new Worker("./calc.js")
    fs.writeFile("./text.txt", "this is a normal text written from main thread", {encoding: 'utf-8'}, (err) => {
        if(err){
            console.error(err);
            return
        }
        else{
            console.log("File written")
        }
    })
}, 3000)