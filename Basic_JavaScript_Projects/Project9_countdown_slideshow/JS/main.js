



// show a countdown timer.


function CDdown() {
    var cseonds = document.getElementById("CDseconds").value;

    function cdtick() {
        cseonds = cseonds - 1;
        CDtimer.innerHTML = cseonds;
        var cdtime = setTimeout(cdtick, 1000);
        if (cseonds == -1) {
            alert("Time's up!");
            clearTimeout(cdtime);
            CDtimer.innerHTML = "";
        }
    }
    cdtick();
}


//  show a slideshow of images.

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";


}



