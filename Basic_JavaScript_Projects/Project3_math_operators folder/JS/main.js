
// Math_operator assignment


function more_Math() {
    var simple_Math =(1+2)*10/2-5;
    document.getElementById("Math").innerHTML ="(1+2)*10/2-5 is equal to :"+simple_Math;
}

function modulus() {
    var simple_Math=25%6;
    document.getElementById("Math").innerHTML ="When you divide 25 by 6, the remainder :"+simple_Math;
}

function negation_operate() {
    var x=10;
    document.getElementById("Math").innerHTML ="Negation Operator for 10 is :"+ -x;
}

function IcrementOper() {
    var x=4.3;
    x++;
    document.getElementById("Math").innerHTML ="Icrement Operator start from 4.3 :"+ x;
}

function DecrementOper() {
    var x=5.5;
    x--;
    document.getElementById("Math").innerHTML ="Decrement Operator from 5.5 is :"+ x;
}

function Random_0to1() {
    var rd=Math.random();
    document.getElementById("Math").innerHTML ="Generate a random number between 0 to 1 :"+ rd;
}

