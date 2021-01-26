var slideIndex = 0;
var timeoutHandle;
showSlides();

function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {slideIndex = 1};
    if (slideIndex < 1) {slideIndex = slides.length};
    slides[slideIndex-1].style.display = "block";
    timeoutHandle = setTimeout(nextSlide, 10000); // Change image every 10 seconds 
}
function nextSlide()
{
    clearTimeout(timeoutHandle);
    slideIndex++;
    showSlides();
}
function prevSlide()
{
    clearTimeout(timeoutHandle);
    slideIndex--;
    showSlides();
}