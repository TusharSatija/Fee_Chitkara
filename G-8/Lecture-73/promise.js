let p=new Promise((res,rej)=>{
    rej();
})
let q=new Promise((res,rej)=>{
    res();
})

 async function fun()
 {
    return new Promise((res,rej)=>{
        res();
    })
 }

 console.log(fun());
console.log(p);