import './style.css'

// Cake Data
const cakes = [
    {
        id: 1,
        title: "Мрійливий Святковий Торт",
        description: "Ідеальний вибір для днів народження та особливих подій. Цей торт має вологі ванільні коржі, поєднані зі свіжим полуничним компоте та шовковистим кремом на основі швейцарської меренги.",
        image: "/images/cake_1.png",
        crossSection: "/images/cake_2.png", // Reuse image as placeholder for now
        fillings: ["Ванільний бісквіт", "Полуничне компоте", "Крем з швейцарської меренги"]
    },
    {
        id: 2,
        title: "Елегантне Асорті Капкейків",
        description: "Досконалість у кожному шматочку. Наші капкейки доступні в різних смаках, включаючи Червоний Оксамит, Подвійний Шоколад та Лимонну Цедру, прикрашені нашим фірмовим кремом.",
        image: "/images/cake_2.png",
        crossSection: "/images/cake_1.png", // Placeholder
        fillings: ["Різноманітні смаки", "Крем-чіз", "Їстівне золото"]
    },
    {
        id: 3,
        title: "Авторський Золотий Ярус",
        description: "Справжній витвір мистецтва для розкішних подій. Шари темного шоколадного ганашу та горіхового праліне гарантують, що смак буде таким же вишуканим, як і вигляд.",
        image: "/images/cake_3.png",
        crossSection: "/images/hero_cake.png", // Placeholder
        fillings: ["Темний шоколадний бісквіт", "Горіхове праліне", "Ганаш з темного шоколаду"]
    },
    {
        id: 4,
        title: "Опівнічне Золото",
        description: "Поєднання чорненої какао-глазурі та текстурованого золота. Всередині — насичені шоколадні коржі з прошарком солоної карамелі та хрустким шаром.",
        image: "/images/black_gold_cake.jpg",
        crossSection: "/images/cake_3.png", // Placeholder
        fillings: ["Шоколадний бісквіт", "Солона карамель", "Хрусткий шар (кранч)"]
    }
];

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сайт Cakes by Lina завантажено');

    const modal = document.getElementById('cake-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFillings = document.getElementById('modal-fillings');
    const modalCrossSection = document.getElementById('modal-cross-section');

    // Open Modal
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const portfolioItem = e.target.closest('.portfolio-item');
            const id = parseInt(portfolioItem.getAttribute('data-id'));
            const cake = cakes.find(c => c.id === id);

            if (cake) {
                modalImg.src = cake.image;
                modalTitle.textContent = cake.title;
                modalDesc.textContent = cake.description;
                modalCrossSection.src = cake.crossSection;

                // Populate fillings
                modalFillings.innerHTML = cake.fillings.map(filling => `<li>${filling}</li>`).join('');

                modal.classList.add('visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('visible');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
            closeModal();
        }
    });
});
