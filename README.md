# Cakes by Lina

Лендинг-сайт авторської кондитерської **Cakes by Lina** — десерти ручної роботи з Брунталя / Оломоуця, Чехія.

🌐 **Live demo:** [cakes-by-lina.netlify.app](https://cakes-by-lina.netlify.app/)

---

## Про проєкт

Односторінковий сайт-портфоліо для кондитера Ангеліни Бабій. Включає каталог авторських тортів, технологічні картки, галерею інших десертів, відгуки клієнтів і контактний блок з картою. Інтерфейс перекладено двома мовами: українська 🇺🇦 та чеська 🇨🇿.

## Превʼю

<p align="center">
  <img src="public/images/first.png" alt="Hero" width="48%" />
  <img src="public/images/hero_cake.png" alt="Hero cake" width="48%" />
</p>

### Авторські торти

<p align="center">
  <img src="public/images/c1.png" alt="Cake 1" width="24%" />
  <img src="public/images/c2.png" alt="Cake 2" width="24%" />
  <img src="public/images/c3.png" alt="Cake 3" width="24%" />
  <img src="public/images/c4.png" alt="Cake 4" width="24%" />
</p>
<p align="center">
  <img src="public/images/c5.png" alt="Cake 5" width="24%" />
  <img src="public/images/c6.png" alt="Cake 6" width="24%" />
  <img src="public/images/c7.png" alt="Cake 7" width="24%" />
  <img src="public/images/c8.png" alt="Cake 8" width="24%" />
</p>
<p align="center">
  <img src="public/images/c9.png" alt="Cake 9" width="24%" />
  <img src="public/images/c10.png" alt="Cake 10" width="24%" />
  <img src="public/images/c11.png" alt="Cake 11" width="24%" />
  <img src="public/images/c12.png" alt="Cake 12" width="24%" />
</p>

### Інші десерти

<p align="center">
  <img src="public/images/dessert1.jpg" alt="Dessert 1" width="32%" />
  <img src="public/images/dessert2.jpg" alt="Dessert 2" width="32%" />
  <img src="public/images/dessert3.jpg" alt="Dessert 3" width="32%" />
</p>

### Технологічні картки

<p align="center">
  <img src="public/images/cheesecake_recipe.jpg" alt="Cheesecake recipe" width="48%" />
  <img src="public/images/meringue_roll_recipe.jpg" alt="Meringue roll recipe" width="48%" />
</p>

---

## Структура сайту

| Розділ | Опис |
| --- | --- |
| **Hero** | Головний банер із CTA-кнопкою |
| **Про мене** | Біографія кондитера + статистика |
| **Торти** | Каталог із 14 авторськими тортами та модальними вікнами з деталями |
| **Техкартки** | Покрокові рецепти десертів |
| **Інші десерти** | Галерея додаткових солодощів |
| **Відгуки** | Слайдер із відгуками клієнтів |
| **Контакти** | Адреса, телефон, Instagram, Google-карта |

## Стек

- **Vite 7** — збірка та dev-сервер
- **Vanilla JavaScript** — без фреймворків
- **CSS3** — кастомні анімації, reveal-ефекти, адаптивна верстка
- **Google Fonts** — Playfair Display + Lato
- Власна **i18n**-система (UA / CZ) на `data-i18n`

## Особливості

- 📱 Повністю адаптивний дизайн (mobile-first)
- 🌍 Перемикач мов UA / CZ
- ✨ Scroll-анімації (reveal, zoom, parallax)
- 🍰 Інтерактивна галерея тортів із модалками
- 📍 Інтегрована Google-карта в контактах
- 💬 Слайдер відгуків

## Запуск локально

```bash
# Встановити залежності
npm install

# Dev-режим (http://localhost:5173)
npm run dev

# Продакшн-збірка
npm run build

# Перегляд продакшн-збірки
npm run preview
```

## Структура проєкту

```
.
├── index.html              # Розмітка всіх секцій
├── public/
│   └── images/             # Фото тортів, десертів, логотип
├── src/
│   ├── main.js             # Логіка: i18n, модалки, слайдер, анімації
│   ├── style.css           # Основні стилі
│   └── contacts.css        # Стилі секції контактів
└── package.json
```

## Контакти

- 📍 Брунталь / Оломоуц, Чехія
- 📞 [+420 776 000 575](tel:+420776000575)
- 📷 Instagram: [@cakesby.linaa](https://instagram.com/cakesby.linaa)

---

© 2026 Cakes by Lina
