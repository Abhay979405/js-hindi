//imediately invoked function (IIFE)
//global scope k pollusion se dikt hoti h kyi baar use htane k liye iske use krte h 
function chai(){
    console.log("DB connected")
}
//chai()
(function chai(){
    console.log("DB connected")
})()
