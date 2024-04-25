window.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".scroll-imagenes");

    let scrollPosition = 0;
    const scrollSpeed = 1; 
    const scrollDelay = 30; 

    function scrollImages() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
    }

    setInterval(scrollImages, scrollDelay);
});





