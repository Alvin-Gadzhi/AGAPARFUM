
//Автопрокрутка слайдера с JS
document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#productCarousel");
    let interval = 2000; // Интервал в миллисекундах (2 секунды)
    let carouselInstance = new bootstrap.Carousel(carousel);

    let autoSlide = setInterval(() => {
        carouselInstance.next();
    }, interval);

    // Остановка автопрокрутки при наведении
    carousel.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    // Возобновление автопрокрутки при уходе курсора
    carousel.addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => {
            carouselInstance.next();
        }, interval);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Зацикливание слайдов
        autoplay: {
            delay: 3000, // Задержка между слайдами (3 секунды)
            disableOnInteraction: false, // Не отключать после взаимодействия
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 800, // Скорость перелистывания (0.8 сек)
    });
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Показывать 1 изображение
    loop: true, // Зацикленный слайдер
    autoplay: {
        delay: 2000, // Автоматическое пролистывание каждые 2 секунды
        disableOnInteraction: false // Продолжает автопрокрутку после взаимодействия
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});




document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-container").forEach(card => {
        card.addEventListener("click", function () {
            // Получаем название и описание аромата из data-* атрибутов
            let title = this.getAttribute("data-title");
            let description = this.getAttribute("data-description");
            let image = this.querySelector("img").src; // Получаем изображение товара

            // Обновляем содержимое модального окна
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalDescription").innerText = description;
            document.getElementById("modalImage").src = image;

            // Показываем модальное окно
            let modal = new bootstrap.Modal(document.getElementById("productModal"));
            modal.show();
        });
    });
});





















