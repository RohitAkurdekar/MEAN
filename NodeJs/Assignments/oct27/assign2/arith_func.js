// returns addition of received numbers
exports.add = (num1,num2)=>
{
    return num1+num2;
}
// returns addition of received numbers
exports.sub = (num1,num2)=>
{
    return num1-num2;
}
// returns addition of received numbers
exports.mul = (num1,num2)=>
{
    return num1*num2;
}
// returns addition of received numbers
exports.div = (num1,num2)=>
{
    return num1/num2;
}
// returns addition of received numbers
exports.min = (num1,num2,num3)=>
{
    if(num1<num2 && num1<num3)
        return num1;
    else if(num2<num3)
        return num2;
    else 
        return num3;
}
// returns addition of received numbers
exports.max = (num1,num2,num3)=>
{
    if(num1>num2 && num1>num3)
        return num1;
    else if(num2>num3)
        return num2;
    else 
        return num3;
}
