if(true){
let a=10
var b=20
const c=30
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username="abhay";
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

//++++++++++++++++++++++interesting++++++++++++++++//
console.log(addvalue(5))
function addvalue(num){
    return num+1;
}
// addvalue(5)

const addtwo=function(num){
    return num+2
}
addtwo(5)