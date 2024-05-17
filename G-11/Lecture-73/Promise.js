//promise 3 state ---> 1. fullfilled  2.reject  3. Pending 

let p=new Promise((res,rej)=>{

})

console.log(p);

let q=new Promise((res,rej)=>{
        res();
})
console.log(q)
let r=new Promise((res,rej)=>{
    rej();
})
console.log(r)
