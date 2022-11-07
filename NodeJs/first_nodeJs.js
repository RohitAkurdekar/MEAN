/*****************************************
 * @name commands to NodeJs
 * To install in ubuntu
 *          sudo apt install nodeJs
 * To install on windows
 *          visit official NodeJs and download file[older version]
 * 
 * To execute file
 *      node filename.js
 * To enter REPL - Read Execute Print Loop
 *      node 
 * 
 * 
 * Problem: Security Error-->  Unauthorized Access
 *      Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 *      Then restart application
 *******************************************************************************/

function nameLength(arrName)
{
    for (c_name of arrName)
    {
        if(c_name.length>4)
            console.log(c_name)
    }
}


my_arr = ["Rohit","read","digvijay","save","tadaa"]

nameLength(my_arr)


function findMin(arrNum)
{
    tempNumb = arrNum[0]
    for(numb of arrNum)
    {
        if(!(numb>tempNumb))
            tempNumb = numb        
    }
    console.log(tempNumb)
}

arrNumb= [7,6,8,1,2]

findMin(arrNumb)