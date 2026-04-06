



// show switch.

function Color_Function() {
   var Color_Output;
   var Colors = document.getElementById("Color_Input").value;
   var Color_String = " is a great color!";
   switch(Colors) {
      case "Red":
         Color_Output = "Red" + Color_String;
      break;
      case "Blue":
         Color_Output = "Blue" + Color_String;
      break;
      case "Green":
         Color_Output = "Green" + Color_String;
      break;
      case "Yellow":
         Color_Output = "Yellow" + Color_String;
      break;
      case "Pink":
         Color_Output = "Pink" + Color_String;
      break;
      case "Purple":
         Color_Output = "Purple" + Color_String;
      break;
      default:
      Color_Output = "Please enter a color name exactly as written on the above list.";  
   }
   document.getElementById("OutputC").innerHTML = Color_Output;
}

function Hello_World_Function() {
   var A = document.getElementsByClassName("Click");
   A[0].innerHTML = "The Text has changed!";
   console.log(A);
   console.log(A[0]);
   console.log(A[0].innerHTML);
   document.getElementById("Changtext").innerHTML = A[0];
   document.getElementById("Changtext_A").innerHTML = A[0].innerHTML;
}

function DrawSquare() {
     const canv = document.getElementById("GPsq_Name");
     const ctx = canv.getContext("2d");
     
     const grd = ctx.createLinearGradient(0, 0, 450, 0); //create a gradient
     grd.addColorStop(0, "white");
     grd.addColorStop(1, "black");
     ctx.fillStyle = grd;
     ctx.fillRect(0, 0, 450, 350)
     
     
     ctx.fillStyle = "blue"; //color of the square 
     ctx.fillRect(10, 30, 150, 100);

     ctx.beginPath();               // draw a circle  
     ctx.arc(95,250,40,0,1*Math.PI);  
     ctx.stroke();

     ctx.moveTo(0,0);        // draw a line
     ctx.lineTo(450,350);
     ctx.stroke();

     var imgA = document.getElementById("scream");  //place an image
     ctx.drawImage(imgA,200,10);

     ;

   }

