//Higher Order Function...
// when a function is pass as an argument in  function is know as higher order function 

// when a function return another  entire function is also known as higher order function

function outer(a)  //HOF
{
    a();
    console.log("inside Outer function")
}

function inner()
{
    console.log("inside inner function")
} 
outer(inner)  

