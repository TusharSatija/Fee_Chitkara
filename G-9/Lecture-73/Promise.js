const p= new Promise((res,rej)=>{
    rej();
})
console.log(p);

async function test(){
    return new Promise((res,rej)=>{
        rej();
    })
}
console.log(test());



