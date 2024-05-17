function outer(a)  //HOF
{
    a();
   console.log("inside outer function...") 
}
function inner()
{
    console.log("inside inner function ..");
}
outer(inner);