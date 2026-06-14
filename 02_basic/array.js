//const myarr=[2,3,45,6,"abhay"];
//console.log(myarr[0]);

//const newarr=new Array(1,2,3,5);
//console.log(newarr);

//array method
//newarr.push(39);
//console.log(newarr);
//newarr.pop();
//newarr.unshift(28);
//console.log(newarr);
//console.log(newarr.includes(28));
//join kya krta h isko array m convert krta h uske sath hi uske element ko string m convert kr deta h 
//const myarr=newarr.join();
// console.log(myarr)
// const newarr=new Array(1,2,3,5);
// console.log("A",newarr);
// //slice
// console.log("B",newarr.slice(1,3));
// //splice
// console.log("c",newarr.splice(1,3));
// console.log("D",newarr);

//const arr=[1,2,3,4,6];
//slice 
//console.log(arr.slice(1,3));
//splice
//splice y krta h ki main array ko change r deta h splice wale element ko main array se hta deta h 
// console.log(arr.splice(1,3));
// console.log(arr);



const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flashman","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][0])

//const allheros=marvel_heros.concat(dc_heros)
//console.log(allheros)

//spread operator
const all_hero=[...marvel_heros,...dc_heros]
console.log(all_hero)
//flat jitne bhi internal array k andr array ko ek single arr m convert kr deta h
const another_arr=[1,2,3,[45,667,6],5,[78,900,57],[45,678]]
const updated_arr=another_arr.flat(Infinity)
console.log(updated_arr)