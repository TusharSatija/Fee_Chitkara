// let a=true;
// setTimeout(()=>{
//     a=false;
// },0);

// while(a)
// {
//     console.log(a++);
// }
setTimeout(()=>{
    console.log("one");
},2000)
console.log("one.1");  
setTimeout(()=>{
    console.log("two")
},1000);
console.log("two.1");
setTimeout(() => {
   console.log("three"); 
}, 0);


// one.1
// two.1
// three
//two 
//one


