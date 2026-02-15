import { useEffect } from 'react';
import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

// ---------------------------------------------------------------------------
// Translation map -- every key used on this page, across 5 languages.
// The helper `t(key)` below picks the right string for `currentLanguage`.
// ---------------------------------------------------------------------------
type Lang = 'he' | 'en' | 'fr' | 'es' | 'ru';

const homeTranslations: Record<string, Record<Lang, string>> = {
  // Top bar
  freeShippingBanner: {
    he: 'משלוחים חינם החל מ- 399 ש"ח',
    en: 'Free shipping from 399 \u20AA',
    fr: 'Livraison gratuite \u00e0 partir de 399 \u20AA',
    es: 'Env\u00edo gratis desde 399 \u20AA',
    ru: 'Бесплатная доставка от 399 \u20AA',
  },

  // Hero / Books
  heroTitle: {
    he: 'ספרי רבנו נחמן מברסלב זצ\u05f4ל',
    en: 'Books of Our Master Rabbi Nachman of Breslov',
    fr: 'Livres de Notre Ma\u00eetre Rabbi Nachman de Breslov',
    es: 'Libros de Nuestro Maestro Rabino Nachman de Breslov',
    ru: 'Книги Нашего Учителя Рабби Нахмана из Бреслов',
  },
  heroSubtitle: {
    he: 'עכשיו אונליין',
    en: 'Now Online',
    fr: 'Maintenant en Ligne',
    es: 'Ahora en L\u00ednea',
    ru: 'Теперь Онлайн',
  },
  enterStore: {
    he: 'כניסה לחנות',
    en: 'Enter Store',
    fr: 'Entrer dans la Boutique',
    es: 'Entrar a la Tienda',
    ru: 'Войти в Магазин',
  },
  discoverActivities: {
    he: 'באו לגלות על הפעילות שלנו',
    en: 'Discover Our Activities',
    fr: 'D\u00e9couvrez nos Activit\u00e9s',
    es: 'Descubra Nuestras Actividades',
    ru: 'Узнайте о Наших Мероприятиях',
  },

  // Uman raffle
  raffleTitle: {
    he: 'הגרלה כרטיס לאומן מתנה',
    en: 'Uman Flight Ticket Raffle Gift',
    fr: "Tirage au Sort Billet d'Avion Uman Cadeau",
    es: 'Sorteo Boleto de Vuelo a Uman Regalo',
    ru: 'Розыгрыш Билета на Самолет в Умань в Подарок',
  },
  raffleSubtitle: {
    he: 'קח ספר... והטיסה לאומן עלינו!',
    en: 'Take a book... and the flight to Uman is on us!',
    fr: 'Prenez un livre... et le vol vers Uman est pour nous!',
    es: '\u00a1Toma un libro... y el vuelo a Uman corre por nuestra cuenta!',
    ru: 'Возьмите книгу... а перелет в Умань за наш счет!',
  },
  raffleBody: {
    he: 'מזוודה יש? ספר לדרך יש? תכינו את הלב!\n\nקרן רבי ישראל מזמינה אתכם להכנס להגרלת ההגרלות, כרטיס טיסה לציונו הקדוש של רבי נחמן באומן, עיר הגעגועים\n\nחוויה רוחנית בלתי נשכחת של תעצומות וכח!',
    en: "Got a suitcase? Got a book for the road? Prepare your heart!\n\nRabbi Israel Foundation invites you to enter the raffle of raffles, a flight ticket to the holy tomb of Rabbi Nachman in Uman, the city of longing\n\nAn unforgettable spiritual experience of strength and power!",
    fr: "Vous avez une valise? Un livre pour la route? Pr\u00e9parez votre c\u0153ur!\n\nLa Fondation Rabbi Israel vous invite \u00e0 participer au tirage des tirages, un billet d'avion vers la tombe sainte de Rabbi Nachman \u00e0 Uman, la ville de l'aspiration\n\nUne exp\u00e9rience spirituelle inoubliable de force et de puissance!",
    es: '\u00bfTienes maleta? \u00bfLibro para el camino? \u00a1Prepara tu coraz\u00f3n!\n\nLa Fundaci\u00f3n Rabino Israel te invita a participar en el sorteo de sorteos, un boleto de avi\u00f3n a la tumba sagrada del Rabino Nachman en Uman, la ciudad de la a\u00f1oranza\n\n\u00a1Una experiencia espiritual inolvidable de fortaleza y poder!',
    ru: 'Есть чемодан? Есть книга в дорогу? Подготовьте свое сердце!\n\nФонд Рабби Израэля приглашает вас принять участие в розыгрыше розыгрышей, билет на самолет к святой могиле Рабби Нахмана в Умани, городе тоски\n\nНезабываемый духовный опыт силы и мощи!',
  },
  howToParticipate: {
    he: 'איך משתתפים?',
    en: 'How to participate?',
    fr: 'Comment participer?',
    es: '\u00bfC\u00f3mo participar?',
    ru: 'Как участвовать?',
  },
  step1: {
    he: 'מבצעים רכישה באתר.',
    en: 'Make a purchase on the site.',
    fr: 'Effectuer un achat sur le site.',
    es: 'Realizar una compra en el sitio.',
    ru: 'Сделать покупку на сайте.',
  },
  step2: {
    he: 'שולחים את פרטים עם מספר ההזמנה',
    en: 'Send details with order number',
    fr: 'Envoyer les d\u00e9tails avec le num\u00e9ro de commande',
    es: 'Enviar detalles con n\u00famero de pedido',
    ru: 'Отправить детали с номером заказа',
  },
  step3: {
    he: 'ונכנסים להגרלה הגדולה.',
    en: 'Enter the big raffle.',
    fr: 'Entrer dans le grand tirage.',
    es: 'Entrar en el gran sorteo.',
    ru: 'Войти в большой розыгрыш.',
  },
  step4: {
    he: 'מחכים לזכייה הגדולה, ולחוויות הרוחניות באומן!',
    en: 'Wait for the big win and spiritual experiences in Uman!',
    fr: 'Attendre la grande victoire et les exp\u00e9riences spirituelles \u00e0 Uman!',
    es: '\u00a1Esperar la gran victoria y las experiencias espirituales en Uman!',
    ru: 'Ждать большой победы и духовных переживаний в Умани!',
  },
  joinRaffle: {
    he: 'לחצו כאן להצטרף להגרלה',
    en: 'Click here to join the raffle',
    fr: 'Cliquez ici pour rejoindre le tirage',
    es: 'Haga clic aqu\u00ed para unirse al sorteo',
    ru: 'Нажмите здесь, чтобы присоединиться к розыгрышу',
  },

  // Detailed raffle section
  specialRaffle: {
    he: 'הגרלה מיוחדת \u2013 הזדמנות לזכות',
    en: 'Special Raffle \u2013 Opportunity to Win',
    fr: 'Tirage Sp\u00e9cial \u2013 Opportunit\u00e9 de Gagner',
    es: 'Sorteo Especial \u2013 Oportunidad de Ganar',
    ru: 'Специальный Розыгрыш \u2013 Возможность Выиграть',
  },
  freeFlight: {
    he: 'בטיסה חינם לאומן!',
    en: 'Free Flight to Uman!',
    fr: 'Vol Gratuit vers Uman!',
    es: '\u00a1Vuelo Gratis a Uman!',
    ru: 'Бесплатный Перелет в Умань!',
  },
  raffleDescription: {
    he: 'בואו להצטרף להגרלה הבלעדית שלנו ותוכלו לזכות בטיסה מרגשת ובלתי נשכחת לאומן, המקום הקדוש של רבי נחמן מברסלב. כל מה שעליכם לעשות הוא לרכוש באתר בסכום של 35 שקלים ומעלה, והכניסה להגרלה מובטחת!',
    en: "Come join our exclusive raffle and you could win an exciting and unforgettable trip to Uman, the holy place of Rabbi Nachman of Breslov. All you need to do is purchase on the site for 35 shekels or more, and entry to the raffle is guaranteed!",
    fr: "Venez rejoindre notre tirage exclusif et vous pourriez gagner un voyage passionnant et inoubliable \u00e0 Uman, le lieu saint de Rabbi Nachman de Breslov. Tout ce que vous devez faire est d'acheter sur le site pour 35 shekels ou plus, et l'entr\u00e9e au tirage est garantie!",
    es: 'Ven a unirte a nuestro sorteo exclusivo y podr\u00edas ganar un viaje emocionante e inolvidable a Uman, el lugar sagrado del Rabino Nachman de Breslov. Todo lo que necesitas hacer es comprar en el sitio por 35 shekels o m\u00e1s, \u00a1y la entrada al sorteo est\u00e1 garantizada!',
    ru: 'Присоединяйтесь к нашему эксклюзивному розыгрышу и вы можете выиграть захватывающую и незабываемую поездку в Умань, святое место Рабби Нахмана из Бреслов. Все, что вам нужно сделать, это купить на сайте на сумму 35 шекелей или больше, и вход в розыгрыш гарантирован!',
  },
  whyParticipate: {
    he: 'למה להשתתף?',
    en: 'Why participate?',
    fr: 'Pourquoi participer?',
    es: '\u00bfPor qu\u00e9 participar?',
    ru: 'Почему участвовать?',
  },
  lifeExperience: {
    he: 'חווית חיים מיוחדת',
    en: 'Special Life Experience',
    fr: 'Exp\u00e9rience de Vie Sp\u00e9ciale',
    es: 'Experiencia de Vida Especial',
    ru: 'Особый Жизненный Опыт',
  },
  lifeExperienceDesc: {
    he: 'טיסה ישירה לאומן הכוללת ביקור במקום הקדוש של רבי נחמן מברסלב.',
    en: 'Direct flight to Uman including visit to the holy place of Rabbi Nachman of Breslov.',
    fr: 'Vol direct vers Uman incluant une visite du lieu saint de Rabbi Nachman de Breslov.',
    es: 'Vuelo directo a Uman incluyendo visita al lugar sagrado del Rabino Nachman de Breslov.',
    ru: 'Прямой рейс в Умань с посещением святого места Рабби Нахмана из Бреслов.',
  },
  specialBooks: {
    he: 'ספרי רבנו מיוחדים ומרשימים',
    en: 'Special and Impressive Rabbenu Books',
    fr: 'Livres Sp\u00e9ciaux et Impressionnants de Rabbenu',
    es: 'Libros Especiales e Impresionantes de Rabbenu',
    ru: 'Особые и Впечатляющие Книги Раббену',
  },
  specialBooksDesc: {
    he: 'אפשרות לזכות ספרי רבינו מעור אומנותי במיוחד',
    en: 'Opportunity to win specially crafted artistic leather Rabbenu books',
    fr: 'Opportunit\u00e9 de gagner des livres de Rabbenu en cuir artistique sp\u00e9cialement con\u00e7us',
    es: 'Oportunidad de ganar libros de Rabbenu de cuero art\u00edstico especialmente elaborados',
    ru: 'Возможность выиграть специально изготовленные книги Раббену из художественной кожи',
  },
  simpleEasy: {
    he: 'פשוט וקל',
    en: 'Simple and Easy',
    fr: 'Simple et Facile',
    es: 'Simple y F\u00e1cil',
    ru: 'Просто и Легко',
  },
  simpleEasyDesc: {
    he: 'רכישה פשוטה בסכום סמלי של 35 שקלים ומעלה באתר.',
    en: 'Simple purchase for a symbolic amount of 35 shekels and up on the site.',
    fr: 'Achat simple pour un montant symbolique de 35 shekels et plus sur le site.',
    es: 'Compra simple por una cantidad simb\u00f3lica de 35 shekels y m\u00e1s en el sitio.',
    ru: 'Простая покупка на символическую сумму 35 шекелей и выше на сайте.',
  },
  oneTimeOpportunity: {
    he: 'הזדמנות חד פעמית',
    en: 'One-time Opportunity',
    fr: 'Opportunit\u00e9 Unique',
    es: 'Oportunidad \u00danica',
    ru: 'Единственная Возможность',
  },
  oneTimeOpportunityDesc: {
    he: 'פרס מדהים שמגיע ישר לידיכם.',
    en: 'Amazing prize that comes straight to your hands.',
    fr: 'Prix incroyable qui arrive directement entre vos mains.',
    es: 'Premio incre\u00edble que llega directamente a sus manos.',
    ru: 'Удивительный приз, который приходит прямо к вам в руки.',
  },

  // Leading books
  leadingBooks: {
    he: 'ספרי רבנו המובילים',
    en: 'Leading Books of Our Master',
    fr: 'Livres Principaux de Notre Ma\u00eetre',
    es: 'Libros Principales de Nuestro Maestro',
    ru: 'Ведущие Книги Нашего Учителя',
  },

  // Quote
  quoteTitle: {
    he: 'דף אחד מספרי רבנו',
    en: "One Page from Our Master's Books",
    fr: 'Une Page des Livres de Notre Ma\u00eetre',
    es: 'Una P\u00e1gina de los Libros de Nuestro Maestro',
    ru: 'Одна Страница из Книг Нашего Учителя',
  },
  quoteBody: {
    he: 'יהיה תיקון על הכל!',
    en: 'There will be rectification for everything!',
    fr: 'Il y aura une rectification pour tout!',
    es: '\u00a1Habr\u00e1 rectificaci\u00f3n para todo!',
    ru: 'Будет исправление для всего!',
  },
  quoteAuthor: {
    he: 'רבי נתן מברסלב',
    en: 'Rabbi Nathan of Breslov',
    fr: 'Rabbi Nathan de Breslov',
    es: 'Rabino Nathan de Breslov',
    ru: 'Рабби Натан из Бреслов',
  },

  // Services
  fastDelivery: {
    he: 'משלוח מהיר עד הבית חינם',
    en: 'Fast Free Home Delivery',
    fr: 'Livraison Rapide Gratuite \u00e0 Domicile',
    es: 'Entrega R\u00e1pida Gratuita a Domicilio',
    ru: 'Быстрая Бесплатная Доставка на Дом',
  },
  fastDeliveryDesc: {
    he: 'ברכישה מעל 299 \u20AA מהחנות',
    en: 'On purchases over 299 \u20AA from the store',
    fr: 'Sur les achats de plus de 299 \u20AA du magasin',
    es: 'En compras mayores a 299 \u20AA de la tienda',
    ru: 'При покупках свыше 299 \u20AA из магазина',
  },
  securePurchase: {
    he: 'רכישה מאובטחת',
    en: 'Secure Purchase',
    fr: 'Achat S\u00e9curis\u00e9',
    es: 'Compra Segura',
    ru: 'Безопасная Покупка',
  },
  securePurchaseDesc: {
    he: 'באמצעות תעודת SSL ובתקנים המחמירים ביותר',
    en: 'Using SSL certificate and the most stringent standards',
    fr: 'En utilisant un certificat SSL et les normes les plus strictes',
    es: 'Utilizando certificado SSL y los est\u00e1ndares m\u00e1s estrictos',
    ru: 'Использование SSL-сертификата и самых строгих стандартов',
  },
  largestStore: {
    he: 'חנות הספרים הגדולה ביותר לספרי רבנו אונליין',
    en: "Largest Online Bookstore for Our Master's Books",
    fr: 'Plus Grande Librairie en Ligne pour les Livres de Notre Ma\u00eetre',
    es: 'Librer\u00eda en L\u00ednea M\u00e1s Grande para los Libros de Nuestro Maestro',
    ru: 'Крупнейший Интернет-Книжный Магазин Книг Нашего Учителя',
  },
  largestStoreDesc: {
    he: 'משלוחים לכל הארץ',
    en: 'Shipping throughout the country',
    fr: 'Exp\u00e9dition dans tout le pays',
    es: 'Env\u00edo por todo el pa\u00eds',
    ru: 'Доставка по всей стране',
  },
  customerService: {
    he: 'שירות לקוחות מעולה וזמין תמיד לשירותכם',
    en: 'Excellent Customer Service Always Available',
    fr: 'Excellent Service Client Toujours Disponible',
    es: 'Excelente Servicio al Cliente Siempre Disponible',
    ru: 'Отличное Обслуживание Клиентов Всегда Доступно',
  },
  customerServiceDesc: {
    he: 'עד 12 תשלומים ללא ריבית',
    en: 'Up to 12 payments without interest',
    fr: "Jusqu'\u00e0 12 paiements sans int\u00e9r\u00eat",
    es: 'Hasta 12 pagos sin inter\u00e9s',
    ru: 'До 12 платежей без процентов',
  },

  // Categories
  storeCategories: {
    he: 'הקטגוריות בחנות',
    en: 'Store Categories',
    fr: 'Cat\u00e9gories du Magasin',
    es: 'Categor\u00edas de la Tienda',
    ru: 'Категории Магазина',
  },
  allHolyCompositions: {
    he: 'כל חיבורי רבנו הקדוש',
    en: 'All Holy Compositions of Our Master',
    fr: 'Toutes les Compositions Saintes de Notre Ma\u00eetre',
    es: 'Todas las Composiciones Sagradas de Nuestro Maestro',
    ru: 'Все Святые Сочинения Нашего Учителя',
  },
  allRabbiIsraelBooks: {
    he: 'כל ספרי רבי ישראל',
    en: 'All Books of Rabbi Israel',
    fr: 'Tous les Livres de Rabbi Israel',
    es: 'Todos los Libros del Rabino Israel',
    ru: 'Все Книги Рабби Израэля',
  },
  clickHere: {
    he: 'לחצו כאן',
    en: 'Click Here',
    fr: 'Cliquez Ici',
    es: 'Haga Clic Aqu\u00ed',
    ru: 'Нажмите Здесь',
  },
  moreCategories: {
    he: 'לקטגוריות נוספות לחצו כאן',
    en: 'For additional categories click here',
    fr: 'Pour des cat\u00e9gories suppl\u00e9mentaires cliquez ici',
    es: 'Para categor\u00edas adicionales haga clic aqu\u00ed',
    ru: 'Для дополнительных категорий нажмите здесь',
  },

  // Newsletter / WhatsApp
  joinMailingList: {
    he: 'הצטרפו עכשיו לרשימת תפוצה',
    en: 'Join Our Mailing List Now',
    fr: 'Rejoignez Notre Liste de Diffusion Maintenant',
    es: '\u00danete a Nuestra Lista de Correo Ahora',
    ru: 'Присоединяйтесь к Нашему Списку Рассылки Сейчас',
  },
  get10Discount: {
    he: 'וקבלו 10% הנחנה ברכישה ראשונה באתר',
    en: 'And get 10% discount on your first purchase on the site',
    fr: 'Et obtenez 10% de r\u00e9duction sur votre premier achat sur le site',
    es: 'Y obt\u00e9n 10% de descuento en tu primera compra en el sitio',
    ru: 'И получите скидку 10% на первую покупку на сайте',
  },
  emailPlaceholder: {
    he: 'הכניסו כתובת אימייל',
    en: 'Enter email address',
    fr: "Entrez l'adresse e-mail",
    es: 'Ingrese direcci\u00f3n de correo',
    ru: 'Введите адрес электронной почты',
  },
  joinNow: {
    he: 'הצטרפו עכשיו',
    en: 'Join Now',
    fr: 'Rejoignez Maintenant',
    es: '\u00danete Ahora',
    ru: 'Присоединяйтесь Сейчас',
  },
  joinWhatsApp: {
    he: 'הצטרפו לקבוצות הוואטסאפ שלנו',
    en: 'Join Our WhatsApp Groups',
    fr: 'Rejoignez Nos Groupes WhatsApp',
    es: '\u00danete a Nuestros Grupos de WhatsApp',
    ru: 'Присоединяйтесь к Нашим Группам WhatsApp',
  },
  whatsAppDesc: {
    he: 'קבלו עדכונים יומיים, חוויות מרגשות וחיזוק רוחני',
    en: 'Receive daily updates, exciting experiences and spiritual strengthening',
    fr: 'Recevez des mises \u00e0 jour quotidiennes, des exp\u00e9riences passionnantes et un renforcement spirituel',
    es: 'Recibe actualizaciones diarias, experiencias emocionantes y fortalecimiento espiritual',
    ru: 'Получайте ежедневные обновления, захватывающие впечатления и духовное укрепление',
  },

  // Join section
  joinSpread: {
    he: 'הצטרפו עכשיו לפרסום והפצת ספרי רבי נחמן בעולם',
    en: "Join Now to Promote and Spread Rabbi Nachman's Books Worldwide",
    fr: 'Rejoignez Maintenant pour Promouvoir et Diffuser les Livres de Rabbi Nachman dans le Monde',
    es: '\u00danete Ahora para Promover y Difundir los Libros del Rabino Nachman en el Mundo',
    ru: 'Присоединяйтесь Сейчас к Продвижению и Распространению Книг Рабби Нахмана по Всему Миру',
  },
  joinSpreadSubtitle: {
    he: 'ההזדמנות שלכם לעזור ולתת יד לפרסום שם הצדיק בעולם',
    en: 'Your opportunity to help and lend a hand in spreading the name of the Tzaddik in the world',
    fr: "Votre opportunit\u00e9 d'aider et de donner un coup de main \u00e0 la diffusion du nom du Tzaddik dans le monde",
    es: 'Tu oportunidad de ayudar y dar una mano en difundir el nombre del Tzaddik en el mundo',
    ru: 'Ваша возможность помочь и приложить руку к распространению имени Цадика в мире',
  },
  joinUs: {
    he: 'הצטרפו אלינו',
    en: 'Join Us',
    fr: 'Rejoignez-nous',
    es: '\u00danete a Nosotros',
    ru: 'Присоединяйтесь к Нам',
  },
  contactDonation: {
    he: 'צרו קשר לתרומה',
    en: 'Contact for Donation',
    fr: 'Contactez pour Don',
    es: 'Contacto para Donaci\u00f3n',
    ru: 'Связаться для Пожертвования',
  },

  // Footer
  footerRights: {
    he: 'כל הזכיות שמורות 2025 \u00a9 קרן רבי ישראל דב אודסר זצ"ל',
    en: 'All rights reserved 2025 \u00a9 Rabbi Israel Dov Odesser Foundation',
    fr: 'Tous droits r\u00e9serv\u00e9s 2025 \u00a9 Fondation Rabbi Israel Dov Odesser',
    es: 'Todos los derechos reservados 2025 \u00a9 Fundaci\u00f3n Rabino Israel Dov Odesser',
    ru: 'Все права защищены 2025 \u00a9 Фонд Рабби Израэля Дова Одессера',
  },
  footerBuiltBy: {
    he: 'האתר נבנה ע"י מדיה מאסטר',
    en: 'Website built by Media Master',
    fr: 'Site web construit par Media Master',
    es: 'Sitio web construido por Media Master',
    ru: 'Сайт создан Media Master',
  },
};

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const leadingBooksData = [
  {
    titleHe: 'ליקוטי מוהרן',
    titleEn: 'Likutei Moharan',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/6.d110a0.webp',
  },
  {
    titleHe: 'ליקוטי תפילות',
    titleEn: 'Likutei Tefilot',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/3.d110a0.webp',
  },
  {
    titleHe: 'חומש ליקוטי הלכות',
    titleEn: 'Chumash Likutei Halachos',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/5.d110a0.webp',
  },
  {
    titleHe: 'ליקוטי הלכות',
    titleEn: 'Likutei Halachos',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/2.d110a0.webp',
  },
  {
    titleHe: 'סיפורי מעשיות',
    titleEn: 'Tales of Ancient Times',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-3.d110a0.webp',
  },
  {
    titleHe: 'כל בו לישועות',
    titleEn: 'Complete Guide to Salvation',
    image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/1.d110a0.webp',
  },
];

const whatsAppGroups = [
  { flag: '📱', lang: 'עברית', phone: '972587308000' },
  { flag: '🌍', lang: 'English', phone: '972587308001' },
  { flag: '🇷🇺', lang: 'Русский', phone: '972587308002' },
  { flag: '🇪🇸', lang: 'Español', phone: '972587308003' },
  { flag: '🇫🇷', lang: 'Fran\u00e7ais', phone: '972587308004' },
];

const serviceItems: { icon: string; titleKey: string; descKey: string }[] = [
  { icon: '🚚', titleKey: 'fastDelivery', descKey: 'fastDeliveryDesc' },
  { icon: '🔒', titleKey: 'securePurchase', descKey: 'securePurchaseDesc' },
  { icon: '📚', titleKey: 'largestStore', descKey: 'largestStoreDesc' },
  { icon: '🎧', titleKey: 'customerService', descKey: 'customerServiceDesc' },
];

const raffleReasons: { icon: string; titleKey: string; descKey: string }[] = [
  { icon: '✈️', titleKey: 'lifeExperience', descKey: 'lifeExperienceDesc' },
  { icon: '📚', titleKey: 'specialBooks', descKey: 'specialBooksDesc' },
  { icon: '💝', titleKey: 'simpleEasy', descKey: 'simpleEasyDesc' },
  { icon: '⭐', titleKey: 'oneTimeOpportunity', descKey: 'oneTimeOpportunityDesc' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Home() {
  const { currentLanguage, setLanguage } = useLanguage();

  const isHe = currentLanguage === 'he';
  const fontClass = isHe ? 'font-[var(--font-hebrew)]' : 'font-[var(--font-serif)]';

  /** Translate helper -- picks the right language string for a given key */
  function t(key: string): string {
    const entry = homeTranslations[key];
    if (!entry) return key;
    return entry[currentLanguage as Lang] ?? entry.he;
  }

  // Step texts stored as array for easy mapping
  const stepKeys = ['step1', 'step2', 'step3', 'step4'];

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ direction: isHe ? 'rtl' : 'ltr' }}
    >
      {/* ================================================================= */}
      {/* TOP BAR                                                           */}
      {/* ================================================================= */}
      <section
        className="hidden md:block bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white"
        data-mobile-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-8 py-2">
          <ul className="flex gap-4 list-none m-0 p-0">
            <li className="flex items-center gap-2 text-sm">
              <span>🚚</span>
              <span>{t('freeShippingBanner')}</span>
            </li>
          </ul>
        </div>
      </section>

      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      {/* ================================================================= */}
      {/* HERO / ONLINE BOOKS SECTION -- Animated mesh gradient background  */}
      {/* ================================================================= */}
      <section className="hero-mesh grain-overlay relative min-h-[85vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 w-full">
          <div className="text-center space-y-8">
            <div className="chip chip-orange mx-auto animate-fade-in-up">
              {t('heroSubtitle')}
            </div>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance animate-fade-in-up ${fontClass}`}
              style={{ animationDelay: '0.15s' }}
            >
              {t('heroTitle')}
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto text-pretty animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t('raffleDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <a href="/store" className="no-underline group">
                <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border-0" data-testid="button-online-store">
                  <span className="relative z-10">{t('enterStore')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </a>
              <a href="/join" className="no-underline">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="button-online-activities">
                  {t('discoverActivities')}
                </button>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-12 md:mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative max-w-3xl w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <img
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2024/05/Copy-of-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-2.webp"
                alt="ספרי רבנו אונליין"
                className="relative w-full rounded-2xl shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ================================================================= */}
      {/* UMAN RAFFLE SECTION                                               */}
      {/* ================================================================= */}
      <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left / content */}
            <div className="scroll-reveal space-y-6 bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl p-8 md:p-10 rounded-2xl">
              <h2
                className={`font-bold mb-4 text-amber-200 ${fontClass}`}
                style={{ fontSize: 'var(--heading-3)' }}
              >
                {t('raffleTitle')}
              </h2>

              <h3
                className={`font-light mb-6 text-amber-100/80 ${fontClass}`}
                style={{ fontSize: 'var(--heading-4)' }}
              >
                {t('raffleSubtitle')}
              </h3>

              <p className="text-large leading-relaxed mb-8 text-white/90 whitespace-pre-line">
                {t('raffleBody')}
              </p>

              {/* How to participate */}
              <div className="mb-8">
                <h4
                  className={`font-bold mb-4 text-amber-200 ${fontClass}`}
                  style={{ fontSize: 'var(--heading-4)' }}
                >
                  {t('howToParticipate')}
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {stepKeys.map((key, i) => (
                    <div
                      key={i}
                      className="card-premium !bg-white/15 dark:!bg-white/10 !border-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-200 text-blue-800 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-900/30">
                        {i + 1}
                      </div>
                      <p className="text-sm leading-snug text-white/90">{t(key)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/raffle" className="block no-underline">
                <button className="w-full py-4 px-8 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 border-[3px] border-amber-200 shadow-lg shadow-blue-900/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {t('joinRaffle')}
                </button>
              </a>
            </div>

            {/* Right / image */}
            <div className="text-center scroll-reveal-left">
              <img
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%94%D7%92%D7%A8%D7%9C%D7%AA-%D7%98%D7%99%D7%A1%D7%94-%D7%9C%D7%A8%D7%91%D7%A0%D7%95-%D7%94%D7%A7%D7%93%D7%95%D7%A9-%D7%A7%D7%A8%D7%9F-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C.webp"
                alt="הגרלת טיסה לאומן"
                className="max-w-full h-auto rounded-2xl shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* DETAILED RAFFLE SECTION                                           */}
      {/* ================================================================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              {t('specialRaffle')}
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-teal-600 dark:text-teal-400 mb-6">
              {t('freeFlight')}
            </h3>
            <p className="text-lg leading-relaxed text-teal-700 dark:text-teal-300/80 max-w-3xl mx-auto mb-8">
              {t('raffleDescription')}
            </p>

            <h4 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-8">
              {t('whyParticipate')}
            </h4>

            {/* Reason cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
              {raffleReasons.map((item, i) => (
                <div
                  key={i}
                  className="scroll-reveal group card-premium card-hover dark:!bg-slate-800/80 p-6 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h5 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
                    {t(item.titleKey)}
                  </h5>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
            </div>

            <a href="/raffle" className="no-underline">
              <button
                className="btn-breslov-primary py-5 px-10 text-xl"
                data-testid="button-detailed-raffle"
              >
                {t('joinRaffle')}
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ================================================================= */}
      {/* LEADING BOOKS SECTION                                             */}
      {/* ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-amber-50/30 to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14 scroll-reveal">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 bg-clip-text text-transparent ${fontClass}`}
            >
              {t('leadingBooks')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {leadingBooksData.map((book, i) => (
              <a key={i} href="/store" className="scroll-reveal no-underline text-inherit group block">
                <div className="bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-700/50 hover:border-orange-300 dark:hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={book.image}
                      alt={book.titleHe}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 group-hover:text-orange-500 transition-colors duration-300">
                      {isHe ? book.titleHe : book.titleEn}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* RABBI NATHAN QUOTE SECTION                                        */}
      {/* ================================================================= */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 dark:from-slate-900 dark:via-gray-800 dark:to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.2),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center scroll-reveal space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-200">{t('quoteTitle')}</h2>
          <blockquote className="text-3xl md:text-4xl font-light text-amber-100 italic leading-relaxed">
            &ldquo;{t('quoteBody')}&rdquo;
          </blockquote>
          <cite className="block text-lg text-amber-200/70 not-italic">&mdash; {t('quoteAuthor')}</cite>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SERVICES SECTION                                                  */}
      {/* ================================================================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {serviceItems.map((svc, i) => (
              <div
                key={i}
                className="scroll-reveal group text-center bg-white dark:bg-gray-800/60 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{svc.icon}</div>
                <h3 className="text-base font-bold text-blue-800 dark:text-blue-300 mb-2">
                  {t(svc.titleKey)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t(svc.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ================================================================= */}
      {/* CATEGORIES SECTION                                                */}
      {/* ================================================================= */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-2">
              {t('storeCategories')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Category 1 */}
            <div className="card-premium !bg-white/10 dark:!bg-white/5 !border-white/20 backdrop-blur-sm p-8 rounded-2xl text-center">
              <h3 className="text-xl md:text-2xl font-bold text-amber-200 mb-4">
                {t('allHolyCompositions')}
              </h3>
              <a href="/store" className="no-underline">
                <button className="btn-breslov-primary">{t('clickHere')}</button>
              </a>
            </div>

            {/* Category 2 */}
            <div className="card-premium !bg-white/10 dark:!bg-white/5 !border-white/20 backdrop-blur-sm p-8 rounded-2xl text-center">
              <h3 className="text-xl md:text-2xl font-bold text-amber-200 mb-4">
                {t('allRabbiIsraelBooks')}
              </h3>
              <a href="/store" className="no-underline">
                <button className="btn-breslov-primary">{t('clickHere')}</button>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="/store" className="no-underline">
              <button className="px-8 py-4 rounded-xl font-bold text-lg text-amber-200 bg-white/10 border-2 border-amber-200 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                {t('moreCategories')}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* NEWSLETTER / WHATSAPP SECTION                                     */}
      {/* ================================================================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
            {t('joinMailingList')}
          </h2>
          <p className="text-lg text-teal-600 dark:text-teal-400 mb-8">{t('get10Discount')}</p>

          {/* Email form */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="form-input min-w-[280px] max-w-sm"
              style={{ textAlign: isHe ? 'right' : 'left' }}
            />
            <button className="btn-breslov-primary whitespace-nowrap">{t('joinNow')}</button>
          </div>

          {/* WhatsApp groups */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              {t('joinWhatsApp')}
            </h3>
            <p className="text-lg text-teal-600 dark:text-teal-400 mb-6">{t('whatsAppDesc')}</p>

            <div className="flex justify-center gap-3 flex-wrap">
              {whatsAppGroups.map((item, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${item.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                    {item.flag} {item.lang}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* JOIN / CTA SECTION                                                */}
      {/* ================================================================= */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-4">
            {t('joinSpread')}
          </h2>
          <h3 className="text-xl md:text-2xl font-light text-amber-100/80 mb-10">
            {t('joinSpreadSubtitle')}
          </h3>

          <div className="flex gap-6 justify-center flex-wrap">
            <a href="/join" className="no-underline">
              <button className="py-4 px-8 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 border-[3px] border-amber-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {t('joinUs')}
              </button>
            </a>
            <a href="/contact" className="no-underline">
              <button className="py-4 px-8 rounded-xl font-bold text-lg text-amber-200 bg-white/10 border-[3px] border-amber-200 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                {t('contactDonation')}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FOOTER                                                            */}
      {/* ================================================================= */}
      <footer className="bg-gray-900 dark:bg-black text-center py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="text-gray-400 dark:text-gray-500 text-sm">{t('footerRights')}</p>
          <p className="text-gray-500 dark:text-gray-600 text-xs">{t('footerBuiltBy')}</p>
        </div>
      </footer>
    </div>
  );
}
