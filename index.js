
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
    const modal = new bootstrap.Modal(document.getElementById('productModal'));

    // Объект с данными о парфюмах и их аккордах
    const accordsData = {
        //женская парфюмерия
        "Devil's Intrigue": {
            description: "",
            accords: ["Белый чай", "Османтус", "Апельсиновый цвет", "Сандал", "Кашмеран", "Сухая древесина", "Ваниль"]
        },
        "Kilian Good Girl": {
            description: "",
            accords: ["Османтус", "Жасмин", "Тубероза", "Нарцисс", "Роза", "Амбра", "Кедр"

            ]
        },

        "Chanel Chance": {
            description: "",
            accords: ["Розовый перец", "Лимон", "Ананас", "Жасмин", "Ирис", "Пачули", "Ваниль", "Мускус"]
        },

        "Lanvin Éclat d’Arpège": {
            description: "",
            accords: ["Зеленый чай", "Лист сирени", "Пион", "Персик", "Глициния", "Мускус", "Кедр", "Амбра"

            ]
        },

        "Chanel Coco Mademoiselle": {
            description: "",
            accords: ["Апельсин", "Розовый перец", "Жасмин", "Роза", "Пачули", "Ваниль", "Мускус", "Тонка бобы"]
        },

        "Lanvin Princess": {
            description: "",
            accords: ["Личи", "Мандарин", "Жасмин", "Тубероза", "Ваниль", "Пачули", "Карамель"]
        },

        "Chanel Chance": {
            description: "",
            accords: ["Грейпфрут", "Жасмин", "Мускус", "Ирис", "Цедра"

            ]
        },

        "Paco Rabanne Olympéa": {
            description: "",
            accords: ["Мандарин", "Жасмин", "Соленая ваниль", "Амбра", "Кедр", "Мускус"

            ]
        },
        "L'Interdit": {
            description: "",
            accords: ["Тубероза", "Жасмин", "Апельсиновый цвет", "Пачули", "Ваниль", "Мускус", "Кедр"

            ]
        },
        "Tom Ford Black Orchid": {
            description: "",
            accords: ["Черная орхидея", "Трюфель", "Ирис", "Амбра", "Пачули", "Ваниль", "Сандал", "Личи", "Кедр"

            ]
        },
        "Carolina Herrera Good Girl": {
            description: "",
            accords: ["Тубероза", "Жасмин самбак", "Какао", "Кафе", "Ваниль", "Тонка бобы", "Мускус", "Пачули"

            ]
        },
        "Armani Code": {
            description: "",
            accords: ["Цветок апельсина", "Жасмин", "Горький апельсин", "Ваниль", "Тонка бобы", "Пачули", "Мед"

            ]
        },

        // мужская парфюмерия 
        "Versace Eros": {
            description: "",
            accords: ["Мята", "Зеленое яблоко", "Лимон", "Тонка бобы", "Амбра", "Герань", "Ваниль", "Древесные ноты", "Кедр"

            ]
        }, "Paco Rabanne Invictus": {
            description: "",
            accords: ["Морские ноты", "Грейпфрут", "Лавр", "Жасмин", "Пачули", "Древесные ноты", "Амбра", "Мускус"

            ]
        }, "Armani Acqua di Giò": {
            description: "",
            accords: ["Бергамот", "Морские ноты", "Мандарин", "Жасмин", "Розмарин", "Мускатный шалфей", "Пачули", "Древесные ноты", "Мускус"

            ]
        }, "Paco Rabanne 1 Million": {
            description: "",
            accords: ["Грейпфрут", "Мята", "Красный апельсин", "Роза", "Корица", "Кожа", "Пачули", "Амбра"

            ]
        }, "Creed Aventus": {
            description: "",
            accords: ["Ананас", "Черная смородина", "Бергамот", "Яблоко", "Пачули", "Жасмин", "Дубовый мох", "Мускус", "Ваниль"

            ]
        }, "Antonio Banderas The Secret": {
            description: "",
            accords: ["Грейпфрут", "Мята", "Корица", "Перец", "Бобы тонка", "Древесные ноты", "Мускус"

            ]
        }, "Lacoste White": {
            description: "",
            accords: ["Грейпфрут", "Кардамон", "Розмарин", "Иланг-иланг", "Тубероза", "Кедр", "Ветивер"

            ]
        }, "Louis Vuitton L'Immensité": {
            description: "",
            accords: ["Грейпфрут", "Имбирь", "Бергамот", "Амбра", "Кашмеран", "Водные ноты", "Лабданум"

            ]
        }, "Bvlgari Aqva Marine": {
            description: "",
            accords: ["Грейпфрут", "Мандарин", "Нероли", "Водоросли", "Розмарин", "Кедр", "Амбра"

            ]
        },

        "Tom Ford for Men": {
            description: "",
            accords: ["Цитрус", "Лаванда", "Пачули", "Табак", "Ветивер", "Гальбанум", "Амбра"]
        },

        "Chanel Egoïste Platinum": {
            description: "",
            accords: ["Лаванда", "Розмарин", "Герань", "Грейпфрут", "Древесные ноты", "Пачули", "Мускус", "Ветивер"

            ]
        },

        "Dior Sauvage": {
            description: "",
            accords: ["Бергамот", "Перец", "Амбра", "Лаванда", "Пачули", "Ветивер", "Сандал", "Мускус"

            ]
        },


        // унисекс парфюмерия
        "Megamare": {
            description: "",
            accords: ["Морские ноты", "Грейпфрут", "Мандарин", "Лаванда", "Жасмин", "Древесные ноты", "Ветивер"

            ]
        },

        "Boadicea The Victorious": {
            description: "",
            accords: ["Сафран", "Ладан", "Роза", "Пачули", "Амбра", "Мускус", "Кедр", "Древесные ноты"

            ]
        },

        "Mark Antoine Barros": {
            description: "",
            accords: ["Роза", "Лаванда", "Табак", "Пачули", "Сандал", "Ветивер", "Амбра"

            ]
        },

        "Ganymede": {
            description: "",
            accords: ["Кожаные ноты", "Мандарин", "Бергамот", "Кедр", "Амбра", "Жасмин", "Фиалка", "Мускус"

            ]
        },

        "Kilian Share": {
            description: "",
            accords: ["Сахарная вата", "Апельсиновый цвет", "Жасмин", "Ваниль", "Карамель", "Белый мускус", "Пачули"

            ]
        },

        "Molecule Dark": {
            description: "",
            accords: ["Амбра", "Ваниль", "Пачули", "Сандал", "Мускус"

            ]
        },
        // каталог

        "Tom Ford Lost Cherry": {
            description: "",
            accords: ["Вишня", "Миндаль", "Ликёр", "Вишнёвый сироп", "Жасмин Самбак", "Роза", "Тонка Бобы", "Ваниль", "Сандал", "Ветивер", "Кедр"]
        },

        "Kirke": {
            description: "",
            accords: ["Груша", "Ирис", "Мандарин", "Цитрусы", "Амбра", "Кедр", "Сандал", "Мускус", "Ваниль"]
        },

        "Black Afgano": {
            description: "",
            accords: ["Каннабис", "Смола", "Тампин", "Кофе", "Табак", "Древесина", "Ладан"

            ]
        },

        "Dolce & Gabbana The One": {
            description: "",
            accords: ["Персик", "Личи", "Мандарин", "Лилия", "Жасмин", "Сандал", "Амбра", "Ваниль"

            ]
        },

        "Intino": {
            description: "",
            accords: ["Груша", "Цитрусы", "Тубероза", "Жасмин", "Роза", "Кедр", "Пачули", "Амбра", "Ваниль"

            ]
        },

        "Narcotic": {
            description: "",
            accords: ["Жасмин", "Тубероза", "Мускус", "Ваниль"

            ]
        },

        "Baccarat": {
            description: "",
            accords: ["Жасмин", "Сафран", "Кедр", "Амбра", "Фирн"]
        },

        "Kilian Good Girl": {
            description: "",
            accords: ["Тубероза", "Жасмин самбак", "Тонка бобы", "Ладан", "Мускус", "Сандал"]
        },

        "Arabian Modavi Gold": {
            description: "",
            accords: ["Амбра", "Ваниль", "Пачули", "Сандал", "Мускус", "Уд", "Пряности"]
        },
    };

    // Добавляем обработчики на карточки
    document.querySelectorAll(".card-container").forEach(item => {
        item.addEventListener("click", function () {
            const title = this.getAttribute("data-title")?.trim(); // Убираем лишние пробелы
            const description = this.getAttribute("data-description") || "Описание отсутствует.";
            const imageSrc = this.querySelector("img")?.src || "";

            console.log("Выбранный парфюм:", title);

            // Обновляем информацию в модальном окне
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalDescription").innerText = description;
            document.getElementById("modalImage").src = imageSrc;

            // Очищаем предыдущие аккорды
            const modalAccords = document.getElementById("modalAccords");
            modalAccords.innerHTML = '<div class="accords-title">Основные аккорды:</div>';

            // Проверяем, есть ли аккорды для данного аромата
            if (accordsData[title]) {
                accordsData[title].accords.forEach(accord => {
                    const accordDiv = document.createElement("div");
                    accordDiv.classList.add("accord");
                    accordDiv.innerText = accord;
                    modalAccords.appendChild(accordDiv);
                });
            } else {
                console.error("Парфюм не найден в accordsData:", title);
                const noAccordsDiv = document.createElement("div");
                noAccordsDiv.classList.add("accord");
                noAccordsDiv.innerText = "Нет доступных аккордов для этого аромата.";
                modalAccords.appendChild(noAccordsDiv);
            }

            // Показываем модальное окно
            modal.show();
        });
    });
});


// Функция для показа QR-кода
function showQR() {
    document.getElementById('qrContainer').style.display = 'flex';
}

// Функция для закрытия QR-кода
function closeQR() {
    document.getElementById('qrContainer').style.display = 'none';
}







