console.log("Run Functions")

//console.log("Go to Home...")
//console.log("Go to School...")

PrintTwo();
PrintOne();
PrintOne();
maths(220,10);
maths(220,590);
maths2023(5,10);

const result = maths2023(3,5);
console.log(result);

function PrintOne(){
    console.log("Go to Home...");
}
function PrintTwo(){
    console.log("Go to School...")
}

function maths(one, two){
    //let one = 100;
    //let  two = 200;
    let total = one + two;
    console.log(total)
}


function maths2023(one, two){
    let total = one * two
    return total;
}

// Flow Controllers

// IF
const marks = 75;
marksTotal = 96;

if (75 < marks){
    console.log("Exam Passed")
}

const markss = 20;
if (30 > markss){
    console.log("Exam Failed");
}

//IF Else
if (50 < marks){
    console.log("Exam Passed All the best");
}
else {
    console.log("Exam Failed Sad");
}

//else if

if (75 <= marks){
    console.log("Grade A");
}else if (65 <= marks){
    console.log("Grade B");
}else if (55 <= marks){
    console.log("Grade C");
}else {
    console.log("Grade Failed");
}

// Nexted if
if (75 <= marks){
    console.log("Exam Passed...");
    if (marksTotal < 50){
        console.log("Maths Passed");
    } else {
        console.log("Maths Faild");
    }
}else {
    if (marksTotal > 50){
        console.log("Exam Failed");
    }
}

// Switch
switch (marks){
    case 75:
        console.log("Grad : A");
        break;
    case 65:
        console.log("Grad : B");
        break;
    case 55:
        console.log("Grad : C");
        break;
    default:
        console.log("Fail...");
}


