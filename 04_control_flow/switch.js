const month=3;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;
}

//falsy value
//0,-0,nan,null,undefined,bigint,false,""

//truthy value
//true,"0","false",[],{},function(){}

//nulish coalescing operator(??): null undefined
let val1=5??10
let val2=null??10
console.log(val2);
console.log(val1);

//ternary operator
//condition??true:false;
const icecreamprize=100;
icecreamprize>=80?console.log("greater than 80"):console.log("less than 80");