//non-premitive datatypes
// const heros=["shaktiman","naagraj","doga"];
// let myobj={
//     name:"abhay",
//     age:20
// }

// const myfunction=function(){
//     console.log("hello world");
// }

//primitive(stack m ) non-primitive(heap) m
let number=12344;
let anothernumber=number;
anothernumber=234;
console.log(anothernumber);
console.log(number);

//non-primitive
let obj={
    name:"abhay",
    age:20
}
let obj2=obj
obj2.age=25;
console.log(obj.age);
console.log(obj2.age);
