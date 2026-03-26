



// show type of variable

function my_type1() {
    var tyString = document.write(typeof "word");
    document.getElementById("TypeofString").innerHTML=tyString;
   
}

// show type of variable as number

function my_type2() {
    var tyNumber = document.write(typeof 999);
    const styNumber = String(tyNumber);
    document.getElementById("TypeofNumber").innerHTML=styNumber;
}

// Shows infinity number status
function my_type3() {
    var InfNumber = document.write(4E787);
    document.getElementById("InfinityNo").innerHTML=InfNumber;
}

// shows negative infinity number status
function my_type4() {
    var NegINumber = document.write(-3E456);
    document.getElementById("NegInfinityNo").innerHTML=NegINumber;
}

// shows boolean logic 10>2
function my_type5() {
    var booINumber = document.write(10>2);
    document.getElementById("Boologic").innerHTML=booINumber;
}

// shows boolean logic 2>10
function my_type6() {
    var booINumber = document.write(2>10);
    document.getElementById("Boologic").innerHTML=booINumber;
}

// shows console.log()
    console.log(2+2);
    console.log(3>10);

// Show 5+5 == 7 
function my_type7() {
    var booINumber = document.write(5+5==7);
    document.getElementById("Boologic7").innerHTML=booINumber;
}

// Show 5+2 == 7 
function my_type8() {
    var booINumber = document.write(5+2==7);
    document.getElementById("Boologic8").innerHTML=booINumber;
}   
   
 // Show exact the logic of value and type 
function my_type9() {
    var x=10;
    var y=10;
    var z=document.write(x===y);
    document.getElementById("Boologic9").innerHTML=z;
}    


function my_type10() {
    var x=10;
    var y="10";
    var z=document.write(x===y);
    document.getElementById("Boologic10").innerHTML=z;
}    

function my_type11() {
    var x=10;
    var y=8;
    var z=document.write(x===y);
    document.getElementById("Boologic11").innerHTML=z;
}    

function my_type12() {
    var x=10;
    var y="8";
    var z=document.write(x===y);
    document.getElementById("Boologic12").innerHTML=z;
}    

function my_typeA() {
    var z=document.write(5>2 && 10>4);
    document.getElementById("BoologicA").innerHTML=z;
}  

function my_typeB() {
    var z=document.write(5>10 && 10>4);
    document.getElementById("BoologicB").innerHTML=z;
}  

function my_typeC() {
    var z=document.write(5>10 || 10>4);
    document.getElementById("BoologicC").innerHTML=z;
}  

function my_typeD() {
    var z=document.write(5>10 || 10>20);
    document.getElementById("BoologicD").innerHTML=z;
}  

function my_typeE() {
    var z=document.write(!(20>10));
    document.getElementById("BoologicE").innerHTML=z;
}  

function my_typeF() {
    var z=document.write(!(5>10));
    document.getElementById("BoologicF").innerHTML=z;
} 
