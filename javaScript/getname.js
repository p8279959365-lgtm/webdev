// function fullName(starting,ending)
// {
//     let full=starting+ending;
//     return full;
// }
// let f=fullName("Pratham","Jain");
// console.log(f);


// assigning function to a variable
let hi=function()
{
    greetme("pratham","jain");
    console.log("hi hello");
}
hi();
// 
function greetme(fname,lname)
{
    console.log(fname+lname);
}

// function return

function getsquare(n){
    return function square(n){
        return(n*n);
    }
}
ans=getsquare(5);
console.log(ans);
final=ans(10);
console.log(final);