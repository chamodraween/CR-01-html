console.log("Run Function");

function onchange (){

}
// Arrow Function
const onchange1 = () => {

}

function number2 (n1, n2) {
    const ans =n1 + n2;
    console.log(ans);
}

function number3 (n1, n2, n3) {
    const ans =n1 + n2;
    console.log(ans);
}
number3(10, 20, 30);
number3(100, 200, 300);

// Arrow Function
console.log("..........Arrow Function.........")
const finalAnswer = (n1, n2) => {
   const ans = n1 * n2;
    console.log(ans);
}
finalAnswer(12, 3);

// return Function
console.log("..........return Function.........")
function returnValve (n1, n2){
    const ans = n1 * n2;
    return ans;
}
const text = returnValve(10, 5);
console.log(text);