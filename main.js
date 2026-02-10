// Progress Bars
const spans = document.querySelectorAll(".prog-bar span");

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
})

// B.T.T BTN
// Get the button
let backToTopBtn = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        backToTopBtn.style.display = "block";
    }
    else{
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function(){
    scrollToTop();
}

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

// Section Fading
document.addEventListener("DOMContentLoaded", function(){
    const fadeInSections = document.querySelectorAll(".fade-in-sec");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});