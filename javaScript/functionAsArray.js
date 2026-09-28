arr=[function(a,b){
    return a+b;},
    function(a,b)
    {
        return a-b;
    },function(a,b)
    {
        return a*b;
    },
    function(a,b)
    {
    return a/b;
    }
];

let first=arr[1];
sum=first(10,8);
console.log(sum);

