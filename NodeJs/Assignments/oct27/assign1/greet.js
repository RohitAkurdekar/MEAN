let date = new Date();


exports.greet = function()
{
    let hours = date.getHours();
    if(hours>6 && hours <12)
        console.log("Good morning");
    else if(hours>=12 && hours <17)
        console.log("Good afternoon");
    else if(hours>=17 && hours <19)
        console.log("Good evening");
    else
        console.log("Good night");
}