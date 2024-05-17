//higher order Function

function outer(a)   // hof
{
    console.log("inside outer function..");
    a();
}
function inner()
{
    console.log("inside inner function..")
}
outer(inner);
