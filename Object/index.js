console.log("run")
let person = {
    fistname: "Chamod",
    lastname: "Raween",
    eyecolor: "Black",

    run: function (){
        alert("run");
    }
}
console.log(person.fistname+""+person.lastname);
person.run();
document.write(person.fistname+" "+person.lastname);