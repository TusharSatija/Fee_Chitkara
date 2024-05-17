function outer(a)  // HOF
{
    setTimeout(()=>{
        console.log("inside outer function");
        a();  
    },1000);  
}
function inner()
{
    console.log("inside inner Function");
}

outer(inner);


//closure


function outer()
{
    let num=1;  
    function inner()
    {
        num++;
        console.log(num);
    }
    return inner;
}
let res=outer();
res();
res();
res();
res();