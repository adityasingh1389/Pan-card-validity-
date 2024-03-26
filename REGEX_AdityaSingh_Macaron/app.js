//pan's format
//first five characters are capital letters A-Z , next four are numbers from 0-9, and last character is also a capital Letter

var userInput=document.querySelector("#user-input");
var checkBtn=document.querySelector("#btn");
// var msg=document.querySelector("");
// console.log(msg)
var panRegex=/[A-Z]{5}[0-9]{4}[A-Z]{1}/;


function check()
{
    var val=userInput.value.trim();
    if (panRegex.test(val))
    {
        console.log(val);
        alert("valid");
        userInput.value="";
    }
    else
    {
        console.log(val);
        alert("not valid");
        userInput.value="";
    }
}

checkBtn.addEventListener("click",check);

