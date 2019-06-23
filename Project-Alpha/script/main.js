let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
}


const input = document.getElementById("input-txt");
const userInput = document.getElementById("txt-area")
const submit = document.getElementById("btn-submit")

submit.addEventListener("POST", () => {
    e.preventDefault();
    let nameTag = document.createElement("h3");
    let userInputTag = document.createElement("textarea");

    nameTag.innerHTML = input.value;
    userInputTag.innerHTML = userInput.value;
    console.log("input")

    document.getElementById("submit_form").appendChild(nameTag);
    document.getElementById("submit_form").appendChild(userInputTag);

});
