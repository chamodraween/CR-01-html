console.log("Hello Word")

// Variable type 3
//     1. var
//     2. let
//     3. const

// global variable and local variable

var name = "Chamod"; // Global variable
Check()

function Check(){
    var name = "Raween" // Local variable
    document.write(name)
}

document.write(name)

//Let
let x =10;
console.log(x)
console.log("..................................")
{
    x = 12;
    console.log(x)
}

//Var
var v = 25;
console.log(v)

{
    var n = 12;
    var n = 20;
    console.log(n)
    console.log("..................................")
}

//const
const d = 17;
//const d = 51;  ==== error
// d = 16;  ==== error
console.log(d)

{
    console.log(d)
    //d = 34;
    //const d = 34;  ==== error
}
console.log("..................................")