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