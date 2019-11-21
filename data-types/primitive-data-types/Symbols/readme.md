Symbols are a new primitive type in ES-6 and are used as unique identifier and helps in customised iteration.
It is good as there is no polymorphyism - overiding of existing object data. It is also used in the ES-6 iterators and iterations - see folder. They dont conflict with object keys which are strings, numbers or booleans.

Factory function 
```
const id = Symbol()
const courseInfo = {
    title: "ES6",
    topics: [ "babel", "webpack", "template-literals", "classes"],
    id: 123
}
courseInfo[id] = 456;
console.log(courseInfo[id])
console.log(courseInfo)
```