function outer()    //HoF
{
    let num=0;
    function inner()
    {
        num++;
        console.log(num);
    }
    return inner;
}
let ans=outer();
ans();
ans();
ans();
ans();
