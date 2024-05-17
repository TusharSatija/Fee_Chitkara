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
res();
res();
res();
res();
res();