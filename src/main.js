console.log('App version: ' + new Date().toISOString());
import './style.css';
import './contacts.css'

// Translation Data
const translations = {
    uk: {
        nav_home: "Головна",
        nav_about: "Про мене",
        nav_portfolio: "Торти",
        btn_order: "Замовити",
        ingredients_title: "СКЛАД:",
        cake1_title: "Фісташка-Малина",
        cake1_desc: "Вишукане поєднання горіхових нот та ягідної свіжості.",
        cake2_title: "Ваніль-Ягоди",
        cake2_desc: "Ванільний бісквіт на молоці, шоколадний ганаш, мікс ягідного конфі, крем маскарпоне з ваніллю",
        cake3_title: "Снікерс",
        cake3_desc: "Шоколадний бісквіт, арахіс з карамеллю, крем чіз, шоколадний ганаш, хрусткі рисові кульки",
        cake4_title: "Шоколадна Вишня",
        cake4_desc: "Шоколадний бісквіт, шоколадний ганаш, крем з маскарпоне, вишневий конфітюр, рисові кульки",
        cake5_title: "Фереро Роше",
        cake5_desc: "Шоколадний бісквіт з шоколадом, запечений фундучний чізкейк, шоколадний крем з нутелою, ганаш на молочному шоколаді, хрустяшка з фундуком та шоколадом",
        cake6_title: "Орео",
        cake6_desc: "Шоколадний бісквіт, запечений чізкейк з орео, крем з орео, шоколадний ганаш",
        cake7_title: "Банан-Шоколад",
        cake7_desc: "Шоколадний бісквіт (або ванільний), шоколадний крем з нутелою, ванільний крем, свіжий банан, карамель, хрусткі кульки",
        cake8_title: "Кокос-Вишня",
        cake8_desc: "Кокосові бісквіти, запечений кокосовий чізкейк, вишневий конфітюр, ванільний крем з маскарпоне",
        cake9_title: "Малиновий Чізкейк",
        cake9_desc: "Ванільний бісквіт, чізкейк запечений, малиновий ганаш, малиновий конфітюр, ванільний крем-чіз",
        cake10_title: "Тропіки",
        cake10_desc: "Кокосовий бісквіт, ванільний крем чіз з кокосом, конфі манго/маракуя, ганаш манго маракуя з маскарпоне",
        cake11_title: "Мілка",
        cake11_desc: "Шоколадний бісквіт, мус на білому шоколаді, шоколадний ганаш, хрусткі кульки",
        cake12_title: "Нутелла",
        cake12_desc: "Насичений шоколадний смак з фундуком та ніжним мусом.",
        cake13_title: "Молочна дівчинка",
        cake13_desc: "Ніжні ванільні коржі з легким йогуртовим кремом та ягодами.",
        cake14_title: "Фісташка Манго",
        cake14_desc: "Тропічне поєднання манго та маракуї з насиченою фісташкою.",
        cake15_title: "Рафаелло",
        cake15_desc: "Вишуканий кокосовий смак з хрустким мигдальним проліне.",
        nav_recipes: "Техкартки",
        nav_sweets: "Інші десерти",
        nav_reviews: "Відгуки",
        nav_contacts: "Контакти",
        contacts_h2: "Контакти",
        address_label: "Адреса",
        address_value: "Брунталь / Оломоуц, Чехія",
        phone_label: "Телефон",
        insta_label: "Ми в Instagram",
        nav_insta: "Instagram",
        hero_h1: "Авторські десерти для незабутніх моментів",
        hero_p: "Зроблено з любов'ю",
        hero_btn: "Переглянути Торти",
        about_h2: "Бабій Ангеліна",
        about_p1: "Я — кондитер, який спеціалізується на якісних десертах і тортах. У своїй роботі поєдную якісні інгредієнти, сучасні техніки та увагу до деталей. Для мене важливо, щоб десерт був не лише смачним, а й візуально привабливим.",
        about_p2: "Працюю з індивідуальними замовленнями та завжди орієнтуюсь на побажання клієнта, зберігаючи власний стиль і якість у кожному виробі.",
        stat_clients: "Щасливих Клієнтів",
        stat_experience: "Років Досвіду",
        portfolio_h2: "Авторські Торти",
        portfolio_p: "Оберіть свій ідеальний смак",
        btn_more: "Детальніше",
        recipes_h2: "Технологічні Картки",
        recipes_p: "Професійні рецепти для вашої кухні",
        pdf_badge: "PDF Формат",
        buy_btn: "Придбати",
        cheesecake_price: "650 грн",
        meringue_price: "450 грн",
        cheesecake_title: "Чізкейк 'Класичний'",
        cheesecake_desc: "Детальна покрокова інструкція приготування ідеально ніжного чізкейку з випіканням. Секрети ідеальної текстури та стабільності.",
        meringue_title: "Меренговий Рулет",
        meringue_desc: "Легкий та невагомий десерт, який підкорює з першого шматочка. Навчіться готувати хрустку скоринку та ніжний крем.",
        sweets_h2: "Інші десерти",
        sweets_p: "Більше ніж просто торти",
        macarons_title: "Макарони",
        macarons_desc: "Крихка скоринка та ніжний ганаш.",
        macarons_list: "Баунті • Дорблю • Рафаело • Лотус • Вишня • Манго • Смородина • Снікерс • Орео • Фісташка • Бейліз • Груша • Мілка • Бабл Гам • Фереро • Арахіс",
        desserts_title: "Інші десерти",
        desserts_desc: "Ідеальний варіант для кенді-бару або подарунка.",
        desserts_list: "Павлова • Капкейки • Мусові тістечка • Тарталетки • Чізкейки на паличці • Еклери • Шу • Десерти в стаканчиках • Печиво (горішки, трубочки, мадлен)",
        reviews_h2: "Відгуки",
        reviews_p: "Теплі слова від клієнтів",
        insta_h2: "Слідкуйте за нами",
        insta_p: "Перегляньте наші останні сторіз та новини в Instagram",
        insta_btn: "Перейти в Профіль",
        modal_inside: "Всередині Торта",
        modal_cross: "Вигляд у розрізі:",
        feat_ingredients: "Детальний перелік інгредієнтів",
        feat_base: "Технологія приготування основи",
        feat_bake: "Режим випікання та охолодження",
        feat_decor: "Поради щодо декорування",
        feat_meringue: "Рецепт ідеальної меренги",
        feat_cream: "Приготування авторського крему",
        feat_berry: "Робота з ягідною начинкою",
        feat_rolling: "Секрети згортання без тріщин",
        port1_title: "Святкові Торти",
        port2_title: "Елегантні Капкейки",
        port3_title: "Авторський Дизайн",
        port4_title: "Приватні Святкування",
        sweet1_title: "Французькі Макаруни",
        sweet2_title: "Свіжі Фруктові Пироги",
        sweet3_title: "Ніжні Чізкейки",
        review1_trans: "",
        review2_trans: "",
        review3_trans: "",
        review4_trans: "",
        review5_trans: "",
        review6_trans: ""
    },
    cs: {
        nav_home: "Hlavní",
        nav_about: "O mně",
        nav_portfolio: "Dorty",
        btn_order: "Objednat",
        ingredients_title: "SLOŽENÍ:",
        cake1_title: "Pistácie-Malina",
        cake1_desc: "Vynikající kombinace ořechových tónů a svěžesti lesních plodů.",
        cake2_title: "Vanilka-Lesní plody",
        cake2_desc: "Vanilkový korpus, čokoládová ganache, mix bobulového konfitu, mascarpone krém s vanilkou",
        cake3_title: "Snickers",
        cake3_desc: "Čokoládový korpus, arašídy s karamelem, cream cheese, čokoládová ganache, křupavé rýžové kuličky",
        cake4_title: "Čokoládová Višeň",
        cake4_desc: "Čokoládový korpus, čokoládová ganache, mascarpone krém, višňový konfit, rýžové kuličky",
        cake5_title: "Ferrero Rocher",
        cake5_desc: "Čokoládový korpus s čokoládou, pečený lískooříškový cheesecake, čokoládový krém s Nutellou, ganache z mléčné čokolády, křupavá vrstva s lískovými ořechy a čokoládou",
        cake6_title: "Oreo",
        cake6_desc: "Čokoládový korpus, pečený cheesecake s Oreo, Oreo krém, čokoládová ganache",
        cake7_title: "Banán-Čokoláda",
        cake7_desc: "Čokoládový korpus (nebo vanilkový), čokoládový krém s Nutellou, vanilkový krém, čerstvý banán, karamel, křupavé kuličky",
        cake8_title: "Kokos-Višeň",
        cake8_desc: "Kokosový korpus, pečený kokosový cheesecake, višňový konfit, vanilkový mascarpone krém",
        cake9_title: "Malinový Cheesecake",
        cake9_desc: "Vanilkový korpus, pečený cheesecake, malinová ganache, malinový konfit, vanilkový krém",
        cake10_title: "Tropické ovoce",
        cake10_desc: "Kokosový korpus, vanilkový krém s kokosem, mango/maracuja konfit, mango/maracuja ganache s mascarpone",
        cake11_title: "Milka",
        cake11_desc: "Čokoládový korpus, pěna z bílé čokolády, čokoládová ganache, křupavé kuličky",
        cake12_title: "Nutella",
        cake12_desc: "Intenzivní čokoládová chuť s lískovými oříšky a jemnou pěnou.",
        cake13_title: "Mléčná holka",
        cake13_desc: "Jemné vanilkové pláty s lehkým jogurtovým krémem a lesním ovocem.",
        cake14_title: "Pistácie Mango",
        cake14_desc: "Tropická kombinace manga a maracuji s výraznou pistácií.",
        cake15_title: "Raffaello",
        cake15_desc: "Gurmánská kokosová chuť s křupavým mandlovým praliné.",
        nav_recipes: "Recepty",
        nav_sweets: "Další dezerty",
        nav_reviews: "Recenze",
        nav_contacts: "Kontakty",
        contacts_h2: "Kontakty",
        address_label: "Adresa",
        address_value: "Bruntál / Olomouc, Česká republika",
        phone_label: "Telefon",
        insta_label: "Instagram",
        nav_insta: "Instagram",
        hero_h1: "Autorské dezerty pro nezapomenutelné okamžiky",
        hero_p: "Vyrobeno s láskou",
        hero_btn: "Prohlédnout dorty",
        about_h2: "Babiy Angelina",
        about_p1: "Jsem cukrářka specializující se na kvalitní dezerty a dorty. Ve své práci kombinuji kvalitní suroviny, moderní techniky a smysl pro detail. Je pro mě důležité, aby dezert byl nejen chutný, ale i vizuálně přitažlivý.",
        about_p2: "Pracuji na individuálních zakázkách a vždy se orientuji na přání klienta, přičemž si zachovávám vlastní styl a kvalitu v každém výrobku.",
        stat_clients: "Šťastných klientů",
        stat_experience: "Let zkušeností",
        portfolio_h2: "Autorské dorty",
        portfolio_p: "Vyberte si svou dokonalou chuť",
        btn_more: "Více informací",
        recipes_h2: "Technologické karty",
        recipes_p: "Profesionální recepty pro vaši kuchyni",
        pdf_badge: "Formát PDF",
        buy_btn: "Koupit",
        cheesecake_price: "310 Kč",
        meringue_price: "215 Kč",
        cheesecake_title: "Cheesecake 'Klasik'",
        cheesecake_desc: "Detailní krok za krokem návod na přípravu dokonale jemného pečeného cheesecaku. Tajemství dokonalé textury a stability.",
        meringue_title: "Meringuová roláda",
        meringue_desc: "Lehký a nadýchaný dezert, který si vás získá od prvního sousta. Naučte se připravit křupavou kůrku a jemný krém.",
        sweets_h2: "Další dezerty",
        sweets_p: "Více než jen dorty",
        macarons_title: "Makronky",
        macarons_desc: "Křupavá skořápka a jemná ganache.",
        macarons_list: "Bounty • DorBlue • Raffaello • Lotus • Višeň • Mango • Černý rybíz • Snickers • Oreo • Pistácie • Baileys • Hruška • Milka • Bubble Gum • Ferrero • Arašídy",
        desserts_title: "Ostatní dezerty",
        desserts_desc: "Ideální volba pro candy bar nebo dárek.",
        desserts_list: "Pavlova • Cupcakes • Pěnové dezerty • Tartaletky • Cheesecake nanuky • Eklérky • Choux • Dezerty v pohárcích • Sušenky & sladké pečivo (oříšky, trubičky, madlenky)",
        reviews_h2: "Recenze",
        reviews_p: "Hřejivá slova od klientů",
        insta_h2: "Sledujte nás",
        insta_p: "Podívejte se na naše nejnovější příběhy a novinky na Instagramu",
        insta_btn: "Přejít na profil",
        modal_inside: "Uvnitř dortu",
        modal_cross: "Pohled v řezu:",
        feat_ingredients: "Detailní seznam ingrediencí",
        feat_base: "Technologie přípravy základu",
        feat_bake: "Režim pečení a chlazení",
        feat_decor: "Tipy na zdobení",
        feat_meringue: "Recept na dokonalý merengue",
        feat_cream: "Příprava autorského krému",
        feat_berry: "Práce s bobulovou náplní",
        feat_rolling: "Tajemství rolování bez prasklin",
        port1_title: "Slavnostní dorty",
        port2_title: "Elegantní cupcakes",
        port3_title: "Autorský design",
        port4_title: "Soukromé oslavy",
        sweet1_title: "Francouzské makronky",
        sweet2_title: "Čerstvé ovocné koláče",
        sweet3_title: "Jemné cheesecaky",
        review1_trans: "Ahoj Angelinko, dort je 🔥 moc dobrý. Ty kuličky s višní všem fakt chutnaly 😍",
        review2_trans: "Dortík se moc líbil, je moc dobrý a krásný 🥰🥰 moc děkujeme.",
        review3_trans: "Moc děkujeme ❤️ roláda je mooc dobrá 😊💔 ❤️",
        review4_trans: "Dobré ráno, váš dortík je prostě úžasný, získal si moje srdce 🥰 moc se mi líbí a je moc dobrý. Upřímně děkuji za takovou krásu 😍",
        review5_trans: "Super, moc děkuji ❤️ Všem se to líbilo 😍 Moc dobré a velmi krásné 🫶",
        review6_trans: "Ano, vše jste udělala profesionálně. Doma jsme si to moc dlouho prohlíželi a bylo nám líto takovou krásu krájet 🥰 Jste skutečná mistryně svého řemesla 🥰 šikulka 🤗 Vše dopadlo skvěle, dívala jsem se na to a říkala si, jak je vůbec možné vlastníma rukama vytvořit takové zázraky. Křídla byla nádherná a ta panenka byla kouzelná, všechno jste moc krásně naaranžovala. Přejeme Vám milé a poctivé zákazníky 🥰 Moc Vám děkujeme ❤️"
    }
};

// Cake Data (Translated)
// Cake Data (Translated)
const cakes = [
    {
        id: 1,
        uk: {
            title: "Фісташка-Малина",
            description: "Вишукане поєднання горіхових нот та ягідної свіжості.",
            fillings: ["Ванільний масляний бісквіт", "Конфі з малини", "Фісташковий ганаш", "Крем чіз з маскарпоне"]
        },
        cs: {
            title: "Pistácie-Malina",
            description: "Vynikající kombinace ořechových tónů a svěžesti bobulí.",
            fillings: ["Vanilkový máslový piškot", "Malinové konfit", "Pistáciová ganache", "Krém s mascarpone"]
        },
        image: "/images/c1.png",
        crossSection: "/images/c1.png"
    },
    {
        id: 2,
        uk: {
            title: "Ваніль-Ягоди",
            description: "Класика, яка ніколи не набридає.",
            fillings: ["Ванільний бісквіт на молоці", "Шоколадний ганаш", "Мікс ягідного конфі", "Крем маскарпоне з ваніллю"]
        },
        cs: {
            title: "Vanilka-Lesní plody",
            description: "Klasika, která nikdy neomrzí.",
            fillings: ["Vanilkový piškot s mlékem", "Čokoládová ganache", "Mix bobulového konfit", "Krém mascarpone s vanilkou"]
        },
        image: "/images/c2.png",
        crossSection: "/images/c2.png"
    },
    {
        id: 3,
        uk: {
            title: "Снікерс",
            description: "Улюблений смак у форматі торта.",
            fillings: ["Шоколадний бісквіт", "Арахіс з карамеллю", "Крем чіз", "Шоколадний ганаш", "Хрусткі рисові кульки"]
        },
        cs: {
            title: "Snickers",
            description: "Oblíbená chuť ve formě dortu.",
            fillings: ["Čokoládový piškot", "Arašídy s karamelem", "Sýrový krém", "Čokoládová ganache", "Křupavé rýžové kuličky"]
        },
        image: "/images/c3.png",
        crossSection: "/images/c3.png"
    },
    {
        id: 4,
        uk: {
            title: "Шоколадна Вишня",
            description: "Гармонія шоколадної гірчинки та вишневої кислинки.",
            fillings: ["Шоколадний бісквіт", "Шоколадний ганаш", "Крем з маскарпоне", "Вишневий конфітюр", "Рисові кульки"]
        },
        cs: {
            title: "Čokoládová Višeň",
            description: "Harmonie čokoládové hořkosti a višňové kyselosti.",
            fillings: ["Čokoládový piškot", "Čokoládová ganache", "Krém s mascarpone", "Višňový džem", "Rýžové kuličky"]
        },
        image: "/images/c4.png",
        crossSection: "/images/c4.png"
    },
    {
        id: 5,
        uk: {
            title: "Фереро Роше",
            description: "Розкішний горіхово-шоколадний десерт.",
            fillings: ["Шоколадний бісквіт з шоколадом", "Запечений фундучний чізкейк", "Шоколадний крем з нутелою", "Ганаш на молочному шоколаді", "Хрустяшка з фундуком та шоколадом"]
        },
        cs: {
            title: "Ferrero Rocher",
            description: "Luxusní oříškovo-čokoládový dezert.",
            fillings: ["Čokoládový piškot", "Pečený lískooříškový cheesecake", "Čokoládový krém s nutellou", "Ganache z mléčné čokolády", "Křupavá vrstva s lískovými oříšky"]
        },
        image: "/images/c5.png",
        crossSection: "/images/c5.png"
    },
    {
        id: 6,
        uk: {
            title: "Орео",
            description: "Для фанатів легендарного печива.",
            fillings: ["Шоколадний бісквіт", "Запечений чізкейк з орео", "Крем з орео", "Шоколадний ганаш"]
        },
        cs: {
            title: "Oreo",
            description: "Pro fanoušky legendární sušenky.",
            fillings: ["Čokoládový piškot", "Pečený cheesecake s oreo", "Krém s oreo", "Čokoládová ganache"]
        },
        image: "/images/c6.png",
        crossSection: "/images/c6.png"
    },
    {
        id: 7,
        uk: {
            title: "Банан-Шоколад",
            description: "Солодкий та насичений смак.",
            fillings: ["Шоколадний бісквіт (або ванільний)", "Шоколадний крем з нутелою", "Ванільний крем", "Свіжий банан", "Карамель", "Хрусткі кульки"]
        },
        cs: {
            title: "Banán-Čokoláda",
            description: "Sladká a sytá chuť.",
            fillings: ["Čokoládový piškot (nebo vanilkový)", "Čokoládový krém s nutellou", "Vanilkový krém", "Čerstvý banán", "Karamel", "Křupavé kuličky"]
        },
        image: "/images/c7.png",
        crossSection: "/images/c7.png"
    },
    {
        id: 8,
        uk: {
            title: "Кокос-Вишня",
            description: "Екзотична ніжність.",
            fillings: ["Кокосові бісквіти", "Запечений кокосовий чізкейк", "Вишневий конфітюр", "Ванільний крем з маскарпоне"]
        },
        cs: {
            title: "Kokos-Višeň",
            description: "Exotická jemnost.",
            fillings: ["Kokosové piškoty", "Pečený kokosový cheesecake", "Višňový džem", "Vanilkový krém s mascarpone"]
        },
        image: "/images/c8.png",
        crossSection: "/images/c8.png"
    },
    {
        id: 9,
        uk: {
            title: "Малиновий Чізкейк",
            description: "Подвійна насолода малиною.",
            fillings: ["Ванільний бісквіт", "Чізкейк запечений", "Малиновий ганаш", "Малиновий конфітюр", "Ванільний крем-чіз"]
        },
        cs: {
            title: "Malinový Cheesecake",
            description: "Dvojité malinové potěšení.",
            fillings: ["Vanilkový piškot", "Pečený cheesecake", "Malinová ganache", "Malinový džem", "Vanilkový krém sýr"]
        },
        image: "/images/c9.png",
        crossSection: "/images/c9.png"
    },
    {
        id: 10,
        uk: {
            title: "Тропіки",
            description: "Сонячний смак манго та маракуї.",
            fillings: ["Кокосовий бісквіт", "Ванільний крем-чіз з кокосом", "Конфі манго-маракуя", "Ганаш манго-маракуя з маскарпоне"]
        },
        cs: {
            title: "Tropiky",
            description: "Slunečná chuť manga a marakuji.",
            fillings: ["Kokosový piškot", "Vanilkový krém sýr s kokosem", "Konfit mango-marakuja", "Ganache mango-marakuja s mascarpone"]
        },
        image: "/images/c10.png",
        crossSection: "/images/c10.png"
    },
    {
        id: 11,
        uk: {
            title: "Мілка",
            description: "Найніжніший шоколадний смак.",
            fillings: ["Шоколадний бісквіт", "Мус на білому шоколаді", "Шоколадний ганаш", "Хрусткі кульки"]
        },
        cs: {
            title: "Milka",
            description: "Nejjemnější čokoládová chuť.",
            fillings: ["Čokoládový piškot", "Pěna z bílé čokolády", "Čokoládová ganache", "Křupavé kuličky"]
        },
        image: "/images/c11.png",
        crossSection: "/images/c11.png"
    },
    {
        id: 12,
        uk: {
            title: "Нутелла",
            description: "Насичений шоколадний смак з фундуком та ніжним мусом.",
            fillings: ["Шоколадний бісквіт", "Хрусткий прошарок", "Шоколадний ганаш", "Фундучний ганаш", "Мус нутела", "Крем з нутеллою"]
        },
        cs: {
            title: "Nutella",
            description: "Intenzivní čokoládová chuť s lískovými oříšky a jemnou pěnou.",
            fillings: ["Čokoládový korpus", "Křupavá vrstva", "Čokoládová ganache", "Lískooříšková ganache", "Nutella pěna", "Nutella krém"]
        },
        image: "/images/c12.png",
        crossSection: "/images/c12.png"
    },
    {
        id: 13,
        uk: {
            title: "Молочна дівчинка",
            description: "Класичний ніжний торт на згущеному молоці з ягідним акцентом.",
            fillings: ["Тоненькі ванільні коржі", "Ягідне конфі", "Йогуртовий крем"]
        },
        cs: {
            title: "Mléčná holka",
            description: "Klasický jemný dort z kondenzovaného mléka s bobulovým akcentem.",
            fillings: ["Tenké vanilkové pláty", "Bobulové konfit", "Jogurtový krém"]
        },
        image: "/images/c13.png",
        crossSection: "/images/c13.png"
    },
    {
        id: 14,
        uk: {
            title: "Фісташка Манго",
            description: "Тропічне поєднання манго та маракуї з насиченою фісташкою.",
            fillings: ["Фісташковий бісквіт", "Фісташковий крем", "Компоте манго-маракуя", "Кусочки манго", "Запечений манговий чізкейк"]
        },
        cs: {
            title: "Pistácie Mango",
            description: "Tropická kombinace manga a maracuji s výraznou pistácií.",
            fillings: ["Pistáciový korpus", "Pistáciový krém", "Mango-maracuja konfit", "Kousky manga", "Pečený mangový cheesecake"]
        },
        image: "/images/c14.png",
        crossSection: "/images/c14.png"
    },
    {
        id: 15,
        uk: {
            title: "Рафаелло",
            description: "Вишуканий кокосовий смак з хрустким мигдальним проліне.",
            fillings: ["Меренговий бісквіт", "Кокосовий запечений чізкейк", "Кокосовий крем-чіз", "Мигдальне проліне"]
        },
        cs: {
            title: "Raffaello",
            description: "Gurmánská kokosová chuť s křupavým mandlovým praliné.",
            fillings: ["Meringuový piškot", "Kokosový pečený cheesecake", "Kokosový krém", "Mandlové praliné"]
        },
        image: "/images/c15.png",
        crossSection: "/images/c15.png"
    }
];

let currentLang = 'uk';

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    // Force unregister all service workers to fix cache/manifest issues
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let registration of registrations) {
                registration.unregister();
                console.log('Service Worker unregistered');
            }
        });
    }
    console.log('Сайт Cakes by Lina завантажено');


    // Language Switching Logic
    const updateContent = (lang) => {
        if (currentLang === lang) return;

        const app = document.getElementById('app');
        app.classList.add('lang-transition');
        app.classList.add('lang-switching');

        setTimeout(() => {
            currentLang = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang].hasOwnProperty(key)) {
                    const content = translations[lang][key];
                    // Automatically wrap list dots with gold styling
                    el.innerHTML = content.includes(' • ')
                        ? content.replace(/ • /g, ' <span class="gold-sep">•</span> ')
                        : content;
                }
            });

            // Update active class on switcher
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });

            // Update HTML lang attribute
            document.documentElement.lang = lang === 'uk' ? 'uk' : 'cs';

            // Fade back in
            setTimeout(() => {
                app.classList.remove('lang-switching');
            }, 50);
        }, 300);
    };

    // Initialize Switcher
    const langSwitchers = document.querySelectorAll('.lang-btn');
    langSwitchers.forEach(btn => {
        btn.addEventListener('click', () => {
            updateContent(btn.getAttribute('data-lang'));
        });
    });    // Mobile Menu Logic
    const header = document.querySelector('.site-header');
    const scrollProgress = document.querySelector('.scroll-progress');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    // Header scroll effects
    let ticking = false;
    let cachedWindowHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener('resize', () => {
        cachedWindowHeight = document.documentElement.scrollHeight - window.innerHeight;
    }, { passive: true });

    const updateScrollEffects = () => {
        const scrolled = window.scrollY;

        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollProgress && cachedWindowHeight > 0) {
            const progress = (scrolled / cachedWindowHeight) * 100;
            scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });

    if (menuToggle && navLinks) {
        const openMenu = () => {
            menuToggle.classList.add('active');
            navLinks.classList.add('active');
            document.body.classList.add('menu-active');
            document.documentElement.classList.add('menu-active');
        };

        const closeMenu = () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-active');
            document.documentElement.classList.remove('menu-active');
        };

        menuToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('is-visible');
                // Once animated, no need to observe anymore
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and all reveal elements
    document.querySelectorAll('section, .hero-section, [class*="reveal-"]').forEach(el => {
        revealObserver.observe(el);
    });

    // Side Decoration Parallax
    const sideDecoration = document.querySelector('.side-decoration');
    if (sideDecoration) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            sideDecoration.style.transform = `translateY(${scrolled * 0.15}px)`;
        }, { passive: true });
    }

    // Reviews Slider Logic
    const sliderContainer = document.getElementById('reviewsSlider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (sliderContainer && prevBtn && nextBtn) {
        const getReviewScrollAmount = () => {
            const cards = sliderContainer.querySelectorAll('.review-card');
            if (cards.length > 1) {
                // Exact distance from start of first card to start of second card
                return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
            } else if (cards.length === 1) {
                return cards[0].offsetWidth;
            }
            return 400;
        };

        const isReviewAtEnd = () => {
            const cards = sliderContainer.querySelectorAll('.review-card');
            if (!cards.length) return true;
            const lastCard = cards[cards.length - 1];
            return lastCard.getBoundingClientRect().right <= sliderContainer.getBoundingClientRect().right + 30;
        };

        const updateReviewButtons = () => {
            if (sliderContainer.scrollLeft <= 5) prevBtn.style.opacity = '0.3';
            else prevBtn.style.opacity = '1';

            if (isReviewAtEnd()) nextBtn.style.opacity = '0.3';
            else nextBtn.style.opacity = '1';
        };

        sliderContainer.addEventListener('scroll', updateReviewButtons);
        window.addEventListener('resize', updateReviewButtons);

        prevBtn.addEventListener('click', () => {
            if (sliderContainer.scrollLeft <= 0) return;
            sliderContainer.scrollBy({
                left: -getReviewScrollAmount(),
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            if (isReviewAtEnd()) return;
            sliderContainer.scrollBy({
                left: getReviewScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Initial check
        setTimeout(updateReviewButtons, 100);
    }

    // Portfolio Slider Logic
    const portfolioSlider = document.getElementById('portfolioSlider');
    const prevPortfolioBtn = document.querySelector('.prev-portfolio-btn');
    const nextPortfolioBtn = document.querySelector('.next-portfolio-btn');

    if (portfolioSlider && prevPortfolioBtn && nextPortfolioBtn) {
        const getScrollAmount = () => {
            const cards = portfolioSlider.querySelectorAll('.portfolio-card');
            if (cards.length > 1) {
                // Exact distance from start of first card to start of second card
                return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
            } else if (cards.length === 1) {
                return cards[0].offsetWidth;
            }
            return 340;
        };

        const isPortfolioAtEnd = () => {
            const cards = portfolioSlider.querySelectorAll('.portfolio-card');
            if (!cards.length) return true;
            const lastCard = cards[cards.length - 1];
            return lastCard.getBoundingClientRect().right <= portfolioSlider.getBoundingClientRect().right + 30;
        };

        const updatePortfolioButtons = () => {
            if (portfolioSlider.scrollLeft <= 5) prevPortfolioBtn.style.opacity = '0.3';
            else prevPortfolioBtn.style.opacity = '1';

            if (isPortfolioAtEnd()) nextPortfolioBtn.style.opacity = '0.3';
            else nextPortfolioBtn.style.opacity = '1';
        };

        portfolioSlider.addEventListener('scroll', updatePortfolioButtons);
        window.addEventListener('resize', updatePortfolioButtons);

        prevPortfolioBtn.addEventListener('click', () => {
            if (portfolioSlider.scrollLeft <= 0) return;
            portfolioSlider.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        nextPortfolioBtn.addEventListener('click', () => {
            if (isPortfolioAtEnd()) return;
            portfolioSlider.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Initial check
        setTimeout(updatePortfolioButtons, 100);
    }

    // Modal Logic
    const modal = document.getElementById('cakeModal');
    const modalCloseBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalFillings = document.getElementById('modalFillings');
    const modalImage = document.getElementById('modalMainImage');
    const modalOrderBtn = document.querySelector('.modal-order-btn');

    function openModal(cakeId) {
        const cake = cakes.find(c => c.id == cakeId);
        if (!cake) return;

        const lang = currentLang; // Use the global currentLang variable

        modalTitle.textContent = cake[lang].title;
        modalDesc.textContent = cake[lang].description;
        modalImage.src = cake.image;
        modalImage.alt = cake[lang].title;

        // Apply clean background for mobile
        const modalImagesContainer = document.querySelector('.modal-images');
        if (modalImagesContainer) {
            modalImagesContainer.style.background = 'transparent';
        }

        // Populate fillings
        modalFillings.innerHTML = '';
        cake[lang].fillings.forEach(filling => {
            const li = document.createElement('li');
            li.textContent = filling;
            modalFillings.appendChild(li);
        });

        // Update Order Button Text dynamically just in case
        modalOrderBtn.textContent = translations[lang].btn_order || (lang === 'uk' ? 'Замовити' : 'Objednat');

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hiding');

        // Wait for the animation to complete (matching CSS duration 0.4s)
        setTimeout(() => {
            modal.classList.remove('show');
            modal.classList.remove('hiding');
            document.body.style.overflow = '';
        }, 400);
    }

    // Event Delegation for Portfolio Items (Card or Button click)
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        portfolioSection.addEventListener('click', (e) => {
            const card = e.target.closest('.portfolio-card');
            // If click is on a nav button, ignore
            if (e.target.closest('.slider-btn')) return;

            if (card) {
                const cakeId = card.getAttribute('data-id');
                openModal(cakeId);
            }
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    // Final cleanup of any elements that might have missed the observer
    document.querySelectorAll('[class*="reveal-"]').forEach(el => {
        if (typeof revealObserver !== 'undefined') {
            revealObserver.observe(el);
        }
    });
});
