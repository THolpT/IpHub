const services = [
    {
        "id": 1,
        "name": "Представление интересов в досудебном, административном порядке и судах",
        "category": ["Управление", "Защита"],
        "description": "Предоставление правовой поддержки в судах",
        "imageUrl": "./img/1.png"
    },
    {
        "id": 2,
        "name": "Распоряжение исключительным правом на объекты интеллектуальной собственности.",
        "category": ["Защита", "Управление"],
        "description": "Помощь в подготовке, оформлении и ведении документации по распоряжению исключительным правом",
        "imageUrl": "./img/2.png"
    },
    {
        "id": 3,
        "name": "Подготовка патентной заявки",
        "category": ["Патенты", "Управление"],
        "description": "Важный этап оформления патента",
        "imageUrl": "./img/3.png"
    },
    {
        "id": 4,
        "name": "Регистрация товарного знака",
        "category": ["Защита", "Управление"],
        "description": "Проведение оценки и проверки товарного знака",
        "imageUrl": "./img/4.png"
    },
    {
        "id": 5,
        "name": "Регистрации НМПТ и ГУ",
        "category": ["Товарные знаки", "Управление"],
        "description": "Полное сопровождение делопроизводства по регистрации",
        "imageUrl": "./img/5.png"
    },
    {
        "id": 6,
        "name": "Предварительная проверка обозначения товарного знака, знака обслуживания",
        "category": ["Товарные знаки", "Защита"],
        "description": "Проведение предварительной проверки охраноспособности обозначения",
        "imageUrl": "./img/6.png"
    },
    {
        "id": 7,
        "name": "Международная регистрация товарного знака",
        "category": ["Товарные знаки", "Управление"],
        "description": "Предварительная проверка охраноспособности товарного знака",
        "imageUrl": "./img/7.png"
    },
    {
        "id": 8,
        "name": "Региональная регистрация товарного знака",
        "category": ["Товарные знаки", "Управление"],
        "description": "Проведение предварительной оценки охраноспособности товарного знака",
        "imageUrl": "./img/8.png"
    },
  ];
  
  // Функция для создания карточки услуги
  function createServiceCard(service) {
    return `
      <a href="/usluga/${service.id}/complex" class="slide slide-service slide-service_light">
        <div class="slide_category">
          <div class="category_item">${service.category}</div>
        </div>
        <div class="slide-service__img-container">
          <img src="${service.imageUrl}" class="slide-service__img">
        </div>
        <div class="slide-service__text">
          <div class="slide-service__title">${service.name}</div>
          <div class="slide-service__descr">${service.description}</div>
        </div>
      </a>
    `;
  }
  
  // Функция для отображения карточек
  function displayServices(services) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = services.map(createServiceCard).join('');
  }
  
  // Инициализация отображения карточек
  displayServices(services);
  
  // Функция фильтрации и поиска
  function filterServices() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredServices = services.filter(service => {
      return service.name.toLowerCase().includes(searchInput) ||
             service.category.join(', ').toLowerCase().includes(searchInput);
    });
    displayServices(filteredServices);
  }
  
  // Слушатель событий для поля поиска
  document.getElementById('searchInput').addEventListener('input', filterServices);