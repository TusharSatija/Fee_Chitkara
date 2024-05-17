function outer() 
{
    let num=0;
    function inner()
    {
       num++;
       console.log(num); 
    }
    return inner;
}
let res=outer();
console.log(res)
res(); 
res();  
res(); 