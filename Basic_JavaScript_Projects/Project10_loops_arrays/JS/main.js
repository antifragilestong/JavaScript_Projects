



// show a count to 10 using a while loop.

function Call_Loop() {
   var Stdigit = "";
   var cx = 1;
   console.log(cx);
   
   while (cx < 11) {
      Stdigit += "<br>" + cx;
     // document.write(Stdigit + "<br>");
      cx++;
   }
   txtlength = Stdigit.length;
   document.getElementById("ListC").innerHTML = Stdigit + "<br>" + "The length of the string is: " + txtlength;
}


var Inst = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Conetent = "";
var y;

function for_loop() {
   for (y = 0; y < Inst.length; y++) {
      Conetent += Inst[y] + "<br>";
   }
  
   document.getElementById("List_now").innerHTML = Conetent;
}
   
function cat_pics() {
   var Cat_Picture = [];
   Cat_Picture[0] = "sleeping";
   Cat_Picture[1] = "playing";
   Cat_Picture[2] = "eating";
   Cat_Picture[3] = "purring";
   console.log(Cat_Picture);
   console.log(Cat_Picture[1]);
   document.getElementById("Cat_array").innerHTML = "In this picture, the cat is: " + Cat_Picture[1] + "."; 
   document.getElementById("cat_total").innerHTML = "The cat pictures' states: " + Cat_Picture; 
 
}

function constant_function() {
   const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
   console.log(Musical_Instrument.color);
   Musical_Instrument.color = "blue";
   Musical_Instrument.price = "$900";
   document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + "The color is " + Musical_Instrument.color + ".";
}  


var xb = 82;
document.write(xb);
{  
   var xb = 33;
   document.write("<br>" + xb);
}
document.write("<br>" + xb +"<br>");

var xc = 82;
document.write(xc);
{
   let xc = 33;
   document.write("<br>" + xc);
}
document.write("<br>" + xc);


function Car_cat() {
   let car = {
      make: "Citroen",
      model: "Berlingo  Multispace",
      year: "2011",
      color: "silver",
      description : function() {
         return "This car is a " + this.year + " " + this.color + " " + this.model;
      }
      
   }
document.getElementById("Car_object").innerHTML = car.description();   
}
console.log(car.description());
