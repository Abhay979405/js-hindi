
//for loop
for(let i=0;i<10;i++){
    if(i==5){
        //console.log("5 is best number");
    }
    //console.log(i);
}

let myarr=["flash","batman","spiderman"];
for(let i=0;i<myarr.length;i++){
    //console.log(myarr[i]);
}


//for-of loop
["",""]
[{},{}]
const arr=[1,2,3,4,5]
for(const num of arr){
   // console.log(num);
}
const greeting="hello world"
for(const greet of greeting){
    //console.log(greet)
}
//map in js
const map=new Map()
map.set("IN","INDIA")
map.set("UN","UNITED STATE")
map.set("FR","FRANCE")
//console.log(map)
for(const [key,value] of map){
   // console.log([key,value])
}


const myobject={
    js:"javascript",
    cpp:"c++",
    ruby:"ruby",
    golang:"google"
}
for(const key in myobject){
   // console.log(myobject[key])
}

// const programming=["js","ruby","python","cpp"];
// programming.forEach(language => {
//     console.log(language);
// });

const students = [
  {
    id: 1,
    name: "Abhay",
    course: "Information Technology"
  },
  {
    id: 2,
    name: "Riya",
    course: "Computer Science"
  },
  {
    id: 3,
    name: "Aman",
    course: "Electronics"
  }
];

students.forEach((item)=>{
    console.log(item.name);
})


//filter
const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynum.filter((num)=>num>5)
console.log(newnums)