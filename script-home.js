function sendEmail() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var mail = document.getElementById('mail').value;
    var userRequest = document.getElementById('userRequest').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_message.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('fullName=' + fullName + '&phoneNumber=' + phoneNumber + '&mail=' + mail + '&userRequest=' + userRequest);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('fullName').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('mail').value = '';
            document.getElementById('userRequest').value = '';
            document.querySelector('.successMessage').style.color = 'green';
            document.querySelector('.successMessage').textContent = 'Запрос успешно отправлен';
        } else {
            document.querySelector('.errorMessage').style.color = 'red';
            document.querySelector('.errorMessage').textContent = 'Произошла ошибка при отправке запроса';
        }
        }
    };
    



function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay.style.display === 'none') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

//Анимация чисел
function animateValue(element, start, end, duration) {
    var obj = document.querySelector(element);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.textContent = current + (element === '.left' ? ' лет' : (element === '.center' ? ' филиалов' : ' кг'));
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue('.left', 0, 13, 2000); // Анимация для значения "13"
animateValue('.center', 0, 19, 2000); // Анимация для значения "19"
animateValue('.right', 4500, 5000, 2000); // Анимация для значения "5000"


//Ответы на вопросы
function toggleDetails(element) {
    const closeBtn = element.querySelector('.close-btn');
    closeBtn.classList.toggle('rotated');
    const detailsBox = element.querySelector('.details-box');
    
    if (element.classList.contains('show-details')) {
        element.classList.remove('show-details');
    } else {
        closeAllDetails();
        element.classList.add('show-details');
    }
}

function closeAllDetails() {
    const grayBoxes = document.querySelectorAll('.gray-box');

    grayBoxes.forEach(box => {
        box.classList.remove('show-details');
    });
}



let slideIndex = 0;

function addReview() {
    const name = document.querySelector('.rounded-input').value;
    const comment = document.querySelector('.rounded-textarea').value;

    if (name && comment) {
        const reviewsSlider = document.getElementById('reviews-slider');
        const reviewSlide = document.createElement('div');
        reviewSlide.classList.add('review-slide');
        reviewSlide.innerHTML = '<div class="review-box"><img src="img/man.png"><strong>' + name + '</strong><br><br>' + comment + '</div>';
        reviewsSlider.appendChild(reviewSlide);
        
        showSlides();
    }
}

function showSlides() {
    const slides = document.getElementsByClassName('review-slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    slides[slideIndex].classList.add('active');
    slideIndex++;
    
    setTimeout(showSlides, 5000); // Измените время показа отзывов здесь (в миллисекундах)
}

showSlides();


function sendmail() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + name + '&phone=' + phone + '&email=' + email);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('name').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').textContent = 'Запрос отправлен успешно';
            } else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').textContent = 'Произошла ошибка при отправке запроса';
            }
        }
    };
};



function init() {
    let map = new ymaps.Map('map', {
        center: [56.348342568376395,44.09111949999989],
        zoom: 16
    })

}

ymaps.ready(init);

