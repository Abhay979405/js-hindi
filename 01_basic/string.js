let name="abhay";
const repocount=50;
console.log(name+repocount+" "+"dwivedi");

console.log(`my name is ${name} and my repocount is ${repocount}`);

const n=new String("abhay")
console.log(n[0]);
console.log(n.__proto__);
console.log(n.length);
console.log(n.toUpperCase());
console.log(n.charAt(2));
console.log(n.indexOf('h'));

const newstring=n.substring(0,4);
console.log(newstring);

const spacestring="     abhay ";
console.log(spacestring);
console.log(spacestring.trim());

const url="https://abhay.com/abhay%20dwivwdi";
console.log(url.replace('%20','-'));

console.log(url.includes('abhay'))
console.log(url.includes('hitesh'));

let sr="abh-hay-hf-vgh";
console.log(sr.split("-"));