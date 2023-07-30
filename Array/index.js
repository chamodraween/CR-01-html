console.log("run")

const name = "Kamal";
const name1 = "Sunil";
const name2 = "jayantha";


const names = [true, name1, 56, {age: 21, skin: "soft"}, [{},{}]];
console.log(names[4]);

console.log("..................")

const  cars = [];
cars[0] = "BMW";
cars[1] = "Volvo";
cars[2] = "Saab";
console.log(cars);

console.log("........Array Length..........")
// Array Length
const fruist = ["Apple", "Banana", "Orange", "Mango"];
alert(fruist.length);
console.log(fruist.length);

console.log("........Pop..........")
//Pop
fruist.pop();
console.log(fruist);

console.log("........Push..........")
//Push
fruist.push("Mango");
console.log(fruist);

console.log("........Shift..........")
//Shift
fruist.shift();
console.log(fruist);

console.log("........Un Shift..........")
//Un Shift
fruist.unshift("Apple");
console.log(fruist);
