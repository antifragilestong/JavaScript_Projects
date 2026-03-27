



// show type of variable

var x = 10;
var y = "Hello";

function GlobalVar_Function() {

    function Add_numbers_1() {
    var xA = 20+x;
    var rq = 200;
    
    }

    function Add_numbers_2() {
    var zt = 100;
    var xB = z+x;
    
    }

var xC = 20+x;
var xD = 100+x;
document.getElementById("GlobVarA").innerHTML=xC;
document.getElementById("GlobVarB").innerHTML=xD;

console.log(zt);

}

console.log(rq);


// Utilizing the time function on if , else if and else statements.

function Time_function() {

    const Nhour = new Date().getHours();
    
    console.log(Nhour);
    if (Nhour<12 && Nhour>=4){
        document.getElementById("GreetTime").innerHTML="Good morning, have a good day!";
    }
    else if (Nhour>=12 && Nhour<18) {
        document.getElementById("GreetTime").innerHTML="Good afternoon, how is your day!";
    }
    else if (Nhour>=18 && Nhour<22) {
        document.getElementById("GreetTime").innerHTML="Good evening, have a good night!";
    }
    else {
        document.getElementById("GreetTime").innerHTML="Good night!";
    }
}
    



