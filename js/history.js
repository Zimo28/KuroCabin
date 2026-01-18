let currentIndex = 0;
const items = document.querySelectorAll('.history-item');
const yearDisplay = document.getElementById('yearDisplay');
const years = ["2015", "2019", "2024"];

function changeSlide(direction) {
    // Buang class active daripada item sekarang
    items[currentIndex].classList.remove('active');

    
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;

    
    setTimeout(() => {
        items[currentIndex].classList.add('active');
        yearDisplay.innerText = years[currentIndex];
    }, 50); 
}

function goHome() {
    window.location.href = "../pages/about-us.html";
}
