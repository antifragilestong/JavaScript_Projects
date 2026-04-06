

// show Hellow World in the console



function Hello_World_Function() {
   var A = document.getElementsByClassName("Click");
   A[0].innerHTML = "The Text has changed!";
   console.log(A);
   console.log(A[0]);
   console.log(A[0].innerHTML);
   document.getElementById("Changtext").innerHTML = A[0];
   document.getElementById("Changtext_A").innerHTML = A[0].innerHTML;
}









