
// const sym=Symbol('mysym');



// const userjs={
//     name:"abhay",
//     age:20,
//     location:"kanpur",
//     [sym]:"mysym",
//     "my fullname":"abhay dwivedi",
//     email:"abhay@gmail.com",
//     isloggedIN:false,
//     lastloggedIn:["monday","saturday"]
// }
// console.log(userjs.email);
// console.log(userjs["email"])
// console.log(userjs["my fullname"])
// console.log(typeof userjs[sym]);

// userjs.email="hitesh@gmail.com"
// Object.freeze(userjs)
// userjs.email="aman@gmail.com"
// console.log(userjs.email)

// userjs.greeting=function(){
//     console.log("hello abhay");
// }
// console.log(userjs.greeting());



//********************************************objects-part_2 */

//const tinder=new Object(); y ek singelton object h 
// console.log(tinder)
const tinder={};// y ek non singelton object h 
tinder.id=1234
tinder.name="abhay"
tinder.isloggedIn=true
//console.log(tinder)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"abhay",
            lastname:"dwivedi"
        }
    }
}
//console.log(regularuser.fullname.username.lastname)

const obj1={a:"1",b:"2"}
const obj2={c:"3",d:"4"}

//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
//console.log(obj3)

const user=[
    {
        id:125566,
        email:"abhay@gmail.com"
    },
    {
        id:67899,
        email:"aman@gmail.com"
    }
]
// console.log(user[0].email)
// console.log(tinder)
// console.log(Object.keys(tinder))



const course={
    coursename:"js in hindi",
    courseprice:999,
    courseinstructor:"hitesh"
}
//object de structuring
const {courseinstructor:instructor}=course
console.log(instructor)