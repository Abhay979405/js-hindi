function sayname(){
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("Y")
}

//sayname()

// function addtwonumber(a,b){
//     console.log(a+b)
// }
function addtwonumber(a,b){
    let result=a+b
    return result;
    console.log("abhay")
}
const result=addtwonumber(4,3);
//console.log(result)
// rest operator
function calculatCartPrize(...num1){
    return num1
}
console.log(calculatCartPrize(200,400,600))

const boj1={
    username:"abhay",
    prize:199
}
 function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and the prize is ${anyobject.prize}`)
}
console.log(handleobject(boj1))