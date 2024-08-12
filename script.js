document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.input-field');
    let isValid = true;

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        const container = input.parentElement;
        const tooltip = container.querySelector('.tooltip');

        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            label.classList.add('error');
            container.classList.add('error');
        } else {
            input.classList.remove('error');
            label.classList.remove('error');
            container.classList.remove('error');
        }
    });

    if (isValid) {
        window.location.href = './thankyou.html'; 
    }
});




const scrollContainer = document.querySelector('.scroll-content');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function scrollLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots(currentIndex);
        console.log("Left Arrow Clicked: ", currentIndex);
    }
}

function scrollRight() {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
        scrollContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots(currentIndex);
        console.log("Right Arrow Clicked: ", currentIndex);
    }
}

function goToSlide(index) {
    if (index >= 0 && index < dots.length) {
        currentIndex = index;
        scrollContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots(currentIndex);
    }
}

// Initial setup
updateDots(currentIndex);
scrollContainer.style.transform = `translateX(0%)`;
