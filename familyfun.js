let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const monthYearElement = document.getElementById('monthYear');
const daysElement = document.getElementById('days');
const selectedDateElement = document.getElementById('selectedDate');

let currentDate = new Date();

function renderCalendar(date) {
    currentDate = date;
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    
    daysElement.innerHTML = '';
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysElement.innerHTML += '<div class="day"></div>';
    }
    for (let day = 1; day <= lastDateOfMonth; day++) {
        daysElement.innerHTML += `<div class="day" data-date="${year}-${month + 1}-${day}">${day}</div>`;
    }
}

function handleDayClick(event) {
    if (event.target.classList.contains('day') && event.target.textContent) {
        const selectedDate = event.target.dataset.date;
        document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));
        event.target.classList.add('selected');
        selectedDateElement.textContent = `Selected Date: ${selectedDate}`;
    }
}

prevButton.addEventListener('click', () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    renderCalendar(newDate);
});

nextButton.addEventListener('click', () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    renderCalendar(newDate);
});

daysElement.addEventListener('click', handleDayClick);

renderCalendar(currentDate);

function display() {
    var ok = confirm("Submit the form?");
    if (ok == true){
        alert("Form Submitted");
    }
    else{
        alert("Failed to submit")
    }

}