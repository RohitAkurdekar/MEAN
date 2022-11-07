// prints factorial of number
exports.Factorial = function(my_number)
{
    let sum = 1;
    let tempNumber = my_number;
    while(tempNumber>1)
    {
        sum*=tempNumber;
        tempNumber-=1;
    }
    console.log("Factorial of",String(my_number),"is",String(sum));
}

// Checks whether number is prime or not
exports.isPrime = (my_number)=>
{
    let flag = true;
    for(i=2;i<(my_number/2);i+=1)
    {
        if((my_number%i)==0)   { flag = false; break;}
    }
    if(flag)    console.log(String(my_number),"is prime number");
    else  console.log(String(my_number),"is not a prime number");
}

//Print table of a number
exports.myTable = (my_number)=>
{
    for(i=1;i<11;i++)
    {
        console.log(String(my_number),"*",String(i),"=",String(my_number*i));
    }
}