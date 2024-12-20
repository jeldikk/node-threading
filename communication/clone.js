const v8 = require('v8');


// this function used structured cloning algorithms
// implemented in node:v8 module
// v8.serialize takes an object and converts into binary data
// v8.deserialize takes this buffer and converts into object back
// v8.serialize doesn't allow function to be as value for its key
function structuredClone(data){
    return v8.deserialize(v8.serialize(data))
}

const obj = {
    // func: () => {},
    name: "Kamal",
    more: {
        items: ['Coding', 'Techie'],
        test: {
            foo: 'bar'
        }
    },
    created: new Date()
}

const clonedObj = structuredClone(obj);

clonedObj.name = "New Name";
clonedObj.more.test.foo = "Nested New Name";

console.log("Original Object :", obj);
console.log("Cloned Object :", clonedObj)

