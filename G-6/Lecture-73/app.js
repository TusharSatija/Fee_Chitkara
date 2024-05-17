//object 

let student = {
    //key : value
    name : "abc",
    age :21
}
console.log(student.name);


// Normal function

function fun()
{
    console.log("This is a fun function..");
}
fun();


function add(a,b)
{
    let c=a+b;
    return c; 
}
console.log(add(3,9));

const add1=(a,b)=>{
    return a+b;
}

console.log(add1(4,7));