import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
// import HilloulaCountdown from '../components/HilloulaCountdown';
// import ShareWidget from '../components/ShareWidget';

export default function Home() {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div className="rtl home page-template-default page page-id-13 wp-custom-logo theme-hello-elementor woocommerce-js elementor-default elementor-kit-5 elementor-page elementor-page-13" style={{direction: currentLanguage === 'he' ? 'rtl' : 'ltr'}}>
      {/* TOP BAR */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ba655d5 elementor-section-full_width elementor-hidden-tablet elementor-hidden-mobile elementor-section-height-default" style={{background: 'hsl(210, 85%, 45%)', color: 'white', padding: '8px 0'}} data-mobile-hidden="true">
        <div className="elementor-container elementor-column-gap-default" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="elementor-column elementor-col-33 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-icon-list--layout-inline elementor-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items" style={{display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0}}>
                    <li className="elementor-icon-list-item elementor-inline-item" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span className="elementor-icon-list-icon">
                        🚚
                      </span>
                      <span className="elementor-icon-list-text">
                        {currentLanguage === 'he' ? 'משלוחים חינם החל מ- 399 ש"ח' :
                         currentLanguage === 'en' ? 'Free shipping from 399 ₪' :
                         currentLanguage === 'fr' ? 'Livraison gratuite à partir de 399 ₪' :
                         currentLanguage === 'es' ? 'Envío gratis desde 399 ₪' :
                         currentLanguage === 'ru' ? 'Бесплатная доставка от 399 ₪' : 'משלוחים חינם החל מ- 399 ש"ח'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      {/* HILLOULA COUNTDOWN BANNER */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem'}}>
        {/* <HilloulaCountdown /> */}
      </div>


      {/* ONLINE BOOKS SECTION */}
      <section className="hero-gradient animate-fade-in-up" style={{background: 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(180, 30%, 98%) 30%, hsl(210, 70%, 98%) 100%)', padding: '6rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="card-premium animate-scale-in" style={{textAlign: 'center', padding: '3rem', margin: '2rem 0'}}>
            <h2 className="text-breslov-gradient" style={{
              fontSize: 'var(--heading-2)', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              fontFamily: currentLanguage === 'he' ? 'var(--font-hebrew)' : 'var(--font-serif)'
            }}>
              {currentLanguage === 'he' ? 'ספרי רבנו נחמן מברסלב זצ״ל' :
               currentLanguage === 'en' ? 'Books of Our Master Rabbi Nachman of Breslov' :
               currentLanguage === 'fr' ? 'Livres de Notre Maître Rabbi Nachman de Breslov' :
               currentLanguage === 'es' ? 'Libros de Nuestro Maestro Rabino Nachman de Breslov' :
               currentLanguage === 'ru' ? 'Книги Нашег���� Учителя Рабби Нахмана из Бреслов' : 'ספרי רבנו נחמן מברסלב זצ״ל'}
            </h2>
            <h3 style={{fontSize: 'var(--heading-4)', fontWeight: '300', color: 'hsl(210, 12%, 55%)', marginBottom: '2rem'}}>
              {currentLanguage === 'he' ? 'עכשיו אונליין' :
               currentLanguage === 'en' ? 'Now Online' :
               currentLanguage === 'fr' ? 'Maintenant en Ligne' :
               currentLanguage === 'es' ? 'Ahora en Línea' :
               currentLanguage === 'ru' ? 'Теперь Онлайн' : 'עכשיו אונליין'}
            </h3>
            <div style={{marginBottom: '3rem'}}>
              <img 
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2024/05/Copy-of-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-2.webp" 
                alt="ספרי רבנו אונליין" 
                style={{maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)'}}
              />
            </div>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/store" style={{textDecoration: 'none'}}>
                <button className="btn-breslov-primary" data-testid="button-online-store">
                  {currentLanguage === 'he' ? 'כניסה לחנות' :
                   currentLanguage === 'en' ? 'Enter Store' :
                   currentLanguage === 'fr' ? 'Entrer dans la Boutique' :
                   currentLanguage === 'es' ? 'Entrar a la Tienda' :
                   currentLanguage === 'ru' ? 'Войти в Магазин' : 'כניסה לחנות'}
                </button>
              </a>
              <a href="/join" style={{textDecoration: 'none'}}>
                <button className="btn-breslov-secondary" data-testid="button-online-activities">
                  {currentLanguage === 'he' ? 'באו לגלות על הפעילות שלנו' :
                   currentLanguage === 'en' ? 'Discover Our Activities' :
                   currentLanguage === 'fr' ? 'Découvrez nos Activités' :
                   currentLanguage === 'es' ? 'Descubra Nuestras Actividades' :
                   currentLanguage === 'ru' ? 'Узнайте о Наших Мероприятиях' : 'באו לגלות על הפעילות שלנו'}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UMAN RAFFLE SECTION */}
      <section className="animate-fade-in-up" style={{background: 'linear-gradient(135deg, hsl(210, 85%, 45%) 0%, hsl(210, 90%, 35%) 100%)', color: 'white', padding: '6rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center'}}>
            <div className="card-premium animate-slide-in-left" style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '15px', backdropFilter: 'blur(10px)'}}>
              <h2 style={{fontSize: 'var(--heading-3)', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 100%, 85%)', fontFamily: currentLanguage === 'he' ? 'var(--font-hebrew)' : 'var(--font-latin)'}}>
                {currentLanguage === 'he' ? 'הגרלה כרטיס לאומן מתנה' :
                 currentLanguage === 'en' ? 'Uman Flight Ticket Raffle Gift' :
                 currentLanguage === 'fr' ? 'Tirage au Sort Billet d\'Avion Uman Cadeau' :
                 currentLanguage === 'es' ? 'Sorteo Boleto de Vuelo a Uman Regalo' :
                 currentLanguage === 'ru' ? 'Розыгрыш Билета на Самолет в Умань в Подарок' : 'הגרלה כרטיס לאומן מתנה'}
              </h2>
              <h3 style={{fontSize: 'var(--heading-4)', fontWeight: '300', marginBottom: '2rem', color: 'hsl(45, 100%, 80%)', fontFamily: currentLanguage === 'he' ? 'var(--font-hebrew)' : 'var(--font-serif)'}}>
                {currentLanguage === 'he' ? 'קח ספר... והטיסה לאומן עלינו!' :
                 currentLanguage === 'en' ? 'Take a book... and the flight to Uman is on us!' :
                 currentLanguage === 'fr' ? 'Prenez un livre... et le vol vers Uman est pour nous!' :
                 currentLanguage === 'es' ? '¡Toma un libro... y el vuelo a Uman corre por nuestra cuenta!' :
                 currentLanguage === 'ru' ? 'Возьмите книгу... а перелет в Умань за наш счет!' : 'קח ספר... והטיסה לאומן עלינו!'}
              </h3>
              <p className="text-large" style={{lineHeight: '1.6', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)'}}>
                {currentLanguage === 'he' ? 'מזוודה יש? ספר לדרך יש? תכינו את הלב!\n\nקרן רבי ישראל מזמינה אתכם להכנס להגרלת ההגרלות, כרטיס טיסה לציונו הקדוש של רבי נחמן באומן, עיר הגעגועים\n\nחוויה רוחנית בלתי נשכחת של תעצומות וכח!' :
                 currentLanguage === 'en' ? 'Got a suitcase? Got a book for the road? Prepare your heart!\n\nRabbi Israel Foundation invites you to enter the raffle of raffles, a flight ticket to the holy tomb of Rabbi Nachman in Uman, the city of longing\n\nAn unforgettable spiritual experience of strength and power!' :
                 currentLanguage === 'fr' ? 'Vous avez une valise? Un livre pour la route? Préparez votre cœur!\n\nLa Fondation Rabbi Israel vous invite à participer au tirage des tirages, un billet d\'avion vers la tombe sainte de Rabbi Nachman à Uman, la ville de l\'aspiration\n\nUne expérience spirituelle inoubliable de force et de puissance!' :
                 currentLanguage === 'es' ? '¿Tienes maleta? ¿Libro para el camino? ¡Prepara tu corazón!\n\nLa Fundación Rabino Israel te invita a participar en el sorteo de sorteos, un boleto de avión a la tumba sagrada del Rabino Nachman en Uman, la ciudad de la añoranza\n\n¡Una experiencia espiritual inolvidable de fortaleza y poder!' :
                 currentLanguage === 'ru' ? 'Есть чемодан? Есть книга в дорогу? Подготовьте свое сердце!\n\nФонд Рабби Израэля приглашает вас принять участие в розыгрыше розыгрышей, билет на самолет к святой могиле Рабби Нахман�� в Умани, городе тоски\n\nНезабываемый духовный опыт силы и мощи!' : 'מזוודה יש? ספר לדרך יש? תכינו את הלב!\n\nקרן רבי ישראל מזמינה אתכם להכנס להגרלת ההגרלות, כרטיס טיסה לציונו הקדוש של רבי נחמן באומן, עיר הגעגועים\n\nחוויה רוחנית בלתי נשכחת של תעצומות וכח!'}
              </p>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{fontSize: 'var(--heading-4)', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 100%, 85%)', fontFamily: currentLanguage === 'he' ? 'var(--font-hebrew)' : 'var(--font-latin)'}}>
                  {currentLanguage === 'he' ? 'איך משתתפים?' :
                   currentLanguage === 'en' ? 'How to participate?' :
                   currentLanguage === 'fr' ? 'Comment participer?' :
                   currentLanguage === 'es' ? '¿Cómo participar?' :
                   currentLanguage === 'ru' ? 'Как участвовать?' : 'איך משתתפים?'}
                </h4>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="card-premium" style={{background: 'rgba(255, 255, 255, 0.15)', padding: '1.5rem', borderRadius: '10px', textAlign: 'center', backdropFilter: 'blur(5px)'}}>
                      <div style={{
                        width: '50px', 
                        height: '50px', 
                        background: 'hsl(45, 100%, 85%)', 
                        color: 'hsl(210, 85%, 45%)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold', 
                        margin: '0 auto 1rem',
                        boxShadow: '0 4px 15px hsl(210, 85%, 45%, 0.2)'
                      }}>
                        {step}
                      </div>
                      <p style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
                        {currentLanguage === 'he' ? 
                          (step === 1 ? 'מבצעים רכישה באתר.' :
                           step === 2 ? 'שולחים את פרטים עם מספר ההזמנה' :
                           step === 3 ? 'ונכנסים להגרלה הגדולה.' :
                           'מחכים לזכייה הגדולה, ול��וויות הרוחניות באומן!') :
                         currentLanguage === 'en' ? 
                          (step === 1 ? 'Make a purchase on the site.' :
                           step === 2 ? 'Send details with order number' :
                           step === 3 ? 'Enter the big raffle.' :
                           'Wait for the big win and spiritual experiences in Uman!') :
                         currentLanguage === 'fr' ? 
                          (step === 1 ? 'Effectuer un achat sur le site.' :
                           step === 2 ? 'Envoyer les détails avec le numéro de commande' :
                           step === 3 ? 'Entrer dans le grand tirage.' :
                           'Attendre la grande victoire et les expériences spirituelles à Uman!') :
                         currentLanguage === 'es' ? 
                          (step === 1 ? 'Realizar una compra en el sitio.' :
                           step === 2 ? 'Enviar detalles con número de pedido' :
                           step === 3 ? 'Entrar en el gran sorteo.' :
                           '¡Esperar la gran victoria y las experiencias espirituales en Uman!') :
                         currentLanguage === 'ru' ? 
                          (step === 1 ? 'Сделать покупку на сайте.' :
                           step === 2 ? 'Отправить детали с номером заказа' :
                           step === 3 ? 'Войти в большой розыгрыш.' :
                           'Ждать большой победы и духовных переживаний в Умани!') :
                          (step === 1 ? 'מבצעים רכישה באתר.' :
                           step === 2 ? 'שולחים את פרטים עם מספר ההזמנה' :
                           step === 3 ? 'ונכנסים להגרלה הגדולה.' :
                           'מחכים לזכייה הגדולה, ולחוויות הרוחניות באומן!')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href="/raffle" style={{textDecoration: 'none'}}>
                <button style={{
                  background: 'linear-gradient(135deg, hsl(210, 85%, 45%), hsl(210, 90%, 35%))', 
                  color: 'white', 
                  border: '3px solid hsl(45, 100%, 85%)', 
                  padding: '1.2rem 2.5rem', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  boxShadow: '0 6px 20px hsl(210, 85%, 45%, 0.4)', 
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}>
                  {currentLanguage === 'he' ? 'לחצו כאן להצטרף להגרלה' :
                   currentLanguage === 'en' ? 'Click here to join the raffle' :
                   currentLanguage === 'fr' ? 'Cliquez ici pour rejoindre le tirage' :
                   currentLanguage === 'es' ? 'Haga clic aquí para unirse al sorteo' :
                   currentLanguage === 'ru' ? 'Нажмите здесь, чтобы присоединиться к розыгрышу' : 'לחצו כאן להצטרף להגרלה'}
                </button>
              </a>
            </div>
            
            <div style={{textAlign: 'center'}}>
              <img 
                src="https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%94%D7%92%D7%A8%D7%9C%D7%AA-%D7%98%D7%99%D7%A1%D7%94-%D7%9C%D7%A8%D7%91%D7%A0%D7%95-%D7%94%D7%A7%D7%93%D7%95%D7%A9-%D7%A7%D7%A8%D7%9F-%D7%A8%D7%91%D7%99-%D7%99%D7%A9%D7%A8%D7%90%D7%9C.webp" 
                alt="הגרלת טיסה לאומן" 
                style={{maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED RAFFLE SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(180, 30%, 98%) 0%, hsl(210, 30%, 98%) 100%)', padding: '6rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
              {currentLanguage === 'he' ? 'הגרלה מיוחדת – הזדמנות לזכות' :
               currentLanguage === 'en' ? 'Special Raffle – Opportunity to Win' :
               currentLanguage === 'fr' ? 'Tirage Spécial – Opportunité de Gagner' :
               currentLanguage === 'es' ? 'Sorteo Especial – Oportunidad de Ganar' :
               currentLanguage === 'ru' ? 'Специальный Розыгрыш – Возможность Выиграть' : 'הגרלה מיוחדת – הזדמנות לזכות'}
            </h2>
            <h3 style={{fontSize: '1.8rem', fontWeight: '300', color: 'hsl(180, 65%, 45%)', marginBottom: '2rem'}}>
              {currentLanguage === 'he' ? 'בטיסה חינם לאומן!' :
               currentLanguage === 'en' ? 'Free Flight to Uman!' :
               currentLanguage === 'fr' ? 'Vol Gratuit vers Uman!' :
               currentLanguage === 'es' ? '¡Vuelo Gratis a Uman!' :
               currentLanguage === 'ru' ? 'Бесплатный Перелет в Умань!' : 'בטיסה חינם לאומן!'}
            </h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: 'hsl(180, 65%, 45%)', maxWidth: '800px', margin: '0 auto 2rem'}}>
              {currentLanguage === 'he' ? 'בואו להצטרף להגרלה הבלעדית שלנו ותוכלו לזכות בטיסה מרגשת ובלתי נשכחת לאומן, המקום הקדוש של רבי נחמן מברסלב. כל מה שעליכם לעשות הוא לרכוש באתר בסכום של 35 שקלים ומעלה, והכניסה להגרלה מובטחת!' :
               currentLanguage === 'en' ? 'Come join our exclusive raffle and you could win an exciting and unforgettable trip to Uman, the holy place of Rabbi Nachman of Breslov. All you need to do is purchase on the site for 35 shekels or more, and entry to the raffle is guaranteed!' :
               currentLanguage === 'fr' ? 'Venez rejoindre notre tirage exclusif et vous pourriez gagner un voyage passionnant et inoubliable à Uman, le lieu saint de Rabbi Nachman de Breslov. Tout ce que vous devez faire est d\'acheter sur le site pour 35 shekels ou plus, et l\'entrée au tirage est garantie!' :
               currentLanguage === 'es' ? 'Ven a unirte a nuestro sorteo exclusivo y podrías ganar un viaje emocionante e inolvidable a Uman, el lugar sagrado del Rabino Nachman de Breslov. Todo lo que necesitas hacer es comprar en el sitio por 35 shekels o más, ¡y la entrada al sorteo está garantizada!' :
               currentLanguage === 'ru' ? 'Присоединяйтесь к нашему эксклюзивному розыгрышу и вы можете выиграть захватывающую и незабываемую поездку в Умань, святое место Рабби Нахмана из Бреслов. Все, что вам нужно сделать, это купить на сайте на сумму 35 шекелей или больше, и вход в розыгрыш гарантирован!' : 'בואו להצטרף להגרלה הבלעדית שלנו ותוכלו לזכות בטיסה מרגשת ובלתי נשכחת לאומן, המקום הקדוש של רבי נחמן מברסלב. כל מה שעליכם לעשות הוא לרכוש באתר בסכום של 35 שקלים ומעלה, והכניסה להגרלה מובטחת!'}
            </p>
            
            <h4 style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1.5rem'}}>
              {currentLanguage === 'he' ? 'למה להשתתף?' :
               currentLanguage === 'en' ? 'Why participate?' :
               currentLanguage === 'fr' ? 'Pourquoi participer?' :
               currentLanguage === 'es' ? '¿Por qué participar?' :
               currentLanguage === 'ru' ? 'Почему участвовать?' : 'למה להשתתף?'}
            </h4>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>✈️</div>
                <h5 style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                  {currentLanguage === 'he' ? 'חווית חיים מיוחדת' :
                   currentLanguage === 'en' ? 'Special Life Experience' :
                   currentLanguage === 'fr' ? 'Expérience de Vie Spéciale' :
                   currentLanguage === 'es' ? 'Experiencia de Vida Especial' :
                   currentLanguage === 'ru' ? 'Особый Жизненный Опыт' : 'חווית חיים מיוחדת'}
                </h5>
                <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                  {currentLanguage === 'he' ? 'טיסה ישירה לאומן הכוללת ביקור במקום הקדוש של רבי נחמן מברסלב.' :
                   currentLanguage === 'en' ? 'Direct flight to Uman including visit to the holy place of Rabbi Nachman of Breslov.' :
                   currentLanguage === 'fr' ? 'Vol direct vers Uman incluant une visite du lieu saint de Rabbi Nachman de Breslov.' :
                   currentLanguage === 'es' ? 'Vuelo directo a Uman incluyendo visita al lugar sagrado del Rabino Nachman de Breslov.' :
                   currentLanguage === 'ru' ? 'Прямой рейс в Умань с посещением святого места Рабби Нахмана из Бреслов.' : 'טיסה ישירה לאומן הכוללת ביקור במקום הקדוש של רבי נחמן מברסלב.'}
                </p>
              </div>
              
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📚</div>
                <h5 style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                  {currentLanguage === 'he' ? 'ספרי רבנו מיוחדים ומרשימים' :
                   currentLanguage === 'en' ? 'Special and Impressive Rabbenu Books' :
                   currentLanguage === 'fr' ? 'Livres Spéciaux et Impressionnants de Rabbenu' :
                   currentLanguage === 'es' ? 'Libros Especiales e Impresionantes de Rabbenu' :
                   currentLanguage === 'ru' ? 'Особые и Впечатляющие Книги Раббену' : 'ספרי רבנו מיוחדים ומרשימים'}
                </h5>
                <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                  {currentLanguage === 'he' ? 'אפשרות לזכות ספרי רבינו מעור אומנותי במיוחד' :
                   currentLanguage === 'en' ? 'Opportunity to win specially crafted artistic leather Rabbenu books' :
                   currentLanguage === 'fr' ? 'Opportunité de gagner des livres de Rabbenu en cuir artistique spécialement conçus' :
                   currentLanguage === 'es' ? 'Oportunidad de ganar libros de Rabbenu de cuero artístico especialmente elaborados' :
                   currentLanguage === 'ru' ? 'Возможность выиграть специально изготовленные книги Раббену из художественной кожи' : 'אפשרות לזכות ספרי רבינ�� מעו�� אומנותי במיוחד'}
                </p>
              </div>
              
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💝</div>
                <h5 style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                  {currentLanguage === 'he' ? 'פשוט וקל' :
                   currentLanguage === 'en' ? 'Simple and Easy' :
                   currentLanguage === 'fr' ? 'Simple et Facile' :
                   currentLanguage === 'es' ? 'Simple y Fácil' :
                   currentLanguage === 'ru' ? 'Просто и Легко' : 'פשוט וקל'}
                </h5>
                <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                  {currentLanguage === 'he' ? 'רכישה פשוטה בסכום סמלי של 35 שקלים ומעלה באתר.' :
                   currentLanguage === 'en' ? 'Simple purchase for a symbolic amount of 35 shekels and up on the site.' :
                   currentLanguage === 'fr' ? 'Achat simple pour un montant symbolique de 35 shekels et plus sur le site.' :
                   currentLanguage === 'es' ? 'Compra simple por una cantidad simbólica de 35 shekels y más en el sitio.' :
                   currentLanguage === 'ru' ? 'Простая покупка на символическую сумму 35 шекелей и выше на сайте.' : 'רכישה פשוטה בסכום סמלי של 35 שקלים ומעלה באתר.'}
                </p>
              </div>
              
              <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>⭐</div>
                <h5 style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                  {currentLanguage === 'he' ? 'הזדמנות חד פעמית' :
                   currentLanguage === 'en' ? 'One-time Opportunity' :
                   currentLanguage === 'fr' ? 'Opportunité Unique' :
                   currentLanguage === 'es' ? 'Oportunidad Única' :
                   currentLanguage === 'ru' ? 'Единственная Возможность' : 'הזדמנות חד פעמית'}
                </h5>
                <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                  {currentLanguage === 'he' ? 'פרס מדהים שמגיע ישר לידיכם.' :
                   currentLanguage === 'en' ? 'Amazing prize that comes straight to your hands.' :
                   currentLanguage === 'fr' ? 'Prix incroyable qui arrive directement entre vos mains.' :
                   currentLanguage === 'es' ? 'Premio increíble que llega directamente a sus manos.' :
                   currentLanguage === 'ru' ? 'Удивительный приз, который приходит прямо к вам в руки.' : 'פרס מדהים שמגיע ישר לידיכם.'}
                </p>
              </div>
            </div>
            
            <a href="/raffle" style={{textDecoration: 'none'}}>
              <button className="btn-breslov-primary" data-testid="button-detailed-raffle" style={{
                padding: '1.5rem 3rem', 
                fontSize: '1.3rem'
              }}>
                {currentLanguage === 'he' ? 'לחצו כאן להצטרף להגרלה' :
                 currentLanguage === 'en' ? 'Click here to join the raffle' :
                 currentLanguage === 'fr' ? 'Cliquez ici pour rejoindre le tirage' :
                 currentLanguage === 'es' ? 'Haga clic aquí para unirse al sorteo' :
                 currentLanguage === 'ru' ? 'Нажмите здесь, чтобы присоединиться к розыгрышу' : 'לחצו כאן להצטרף להגרלה'}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* LEADING BOOKS SECTION */}
      <section className="hero-gradient animate-fade-in-up" style={{background: 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(45, 30%, 98%) 30%, hsl(210, 70%, 98%) 100%)', padding: '6rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="card-premium animate-scale-in" style={{textAlign: 'center', marginBottom: '4rem', padding: '2rem', borderRadius: '15px'}}>
            <h2 className="text-breslov-gradient" style={{
              fontSize: 'var(--heading-2)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              fontFamily: currentLanguage === 'he' ? 'var(--font-hebrew)' : 'var(--font-serif)'
            }}>
              {currentLanguage === 'he' ? 'ספרי רבנו המובילים' :
               currentLanguage === 'en' ? 'Leading Books of Our Master' :
               currentLanguage === 'fr' ? 'Livres Principaux de Notre Maître' :
               currentLanguage === 'es' ? 'Libros Principales de Nuestro Maestro' :
               currentLanguage === 'ru' ? 'Ведущие Книги Нашего Учителя' : 'ספרי רבנו המובילים'}
            </h2>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Leading Books Grid */}
            {[
              {
                title: 'ליקוטי מוהרן',
                titleEn: 'Likutei Moharan',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/6.d110a0.webp'
              },
              {
                title: 'ליקוטי תפילות',
                titleEn: 'Likutei Tefilot',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/3.d110a0.webp'
              },
              {
                title: 'חומש ליקוטי הלכות',
                titleEn: 'Chumash Likutei Halachos',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/5.d110a0.webp'
              },
              {
                title: 'ליקוטי הלכות',
                titleEn: 'Likutei Halachos',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/2.d110a0.webp'
              },
              {
                title: 'סיפורי מעשיות',
                titleEn: 'Tales of Ancient Times',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2025/02/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA-%D7%9E%D7%95%D7%A6%D7%A8-3.d110a0.webp'
              },
              {
                title: 'כל בו לישועות',
                titleEn: 'Complete Guide to Salvation',
                image: 'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/1.d110a0.webp'
              }
            ].map((book, index) => (
              <a key={index} href="/store" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="card-premium card-hover" style={{
                  borderRadius: '15px', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{height: '250px', overflow: 'hidden'}}>
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                  </div>
                  <div style={{padding: '1.5rem', textAlign: 'center'}}>
                    <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '0.5rem'}}>
                      {currentLanguage === 'he' ? book.title : book.titleEn}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RABBI NATHAN QUOTE SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(210, 85%, 45%) 0%, hsl(210, 90%, 35%) 100%)', color: 'white', padding: '4rem 0'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 90%, 85%)'}}>
            {currentLanguage === 'he' ? 'דף אחד מספרי רבנו' :
             currentLanguage === 'en' ? 'One Page from Our Master\'s Books' :
             currentLanguage === 'fr' ? 'Une Page des Livres de Notre Maître' :
             currentLanguage === 'es' ? 'Una Página de los Libros de Nuestro Maestro' :
             currentLanguage === 'ru' ? 'Одна Страница из Книг Нашего Учителя' : 'דף אחד מספרי רבנו'}
          </h2>
          <h3 style={{fontSize: '1.8rem', fontWeight: '300', marginBottom: '1rem', color: 'hsl(45, 90%, 75%)'}}>
            {currentLanguage === 'he' ? 'יהיה תיקון על הכל!' :
             currentLanguage === 'en' ? 'There will be rectification for everything!' :
             currentLanguage === 'fr' ? 'Il y aura une rectification pour tout!' :
             currentLanguage === 'es' ? '¡Habrá rectificación para todo!' :
             currentLanguage === 'ru' ? 'Будет исправление для всего!' : 'יהיה תיקון על הכל!'}
          </h3>
          <p style={{fontSize: '1.1rem', fontStyle: 'italic', color: 'hsl(45, 85%, 90%)'}}>
            {currentLanguage === 'he' ? 'רבי נתן מברסלב' :
             currentLanguage === 'en' ? 'Rabbi Nathan of Breslov' :
             currentLanguage === 'fr' ? 'Rabbi Nathan de Breslov' :
             currentLanguage === 'es' ? 'Rabino Nathan de Breslov' :
             currentLanguage === 'ru' ? 'Рабби Натан из Бреслов' : 'רבי נתן מברסלב'}
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(180, 30%, 98%) 0%, hsl(210, 30%, 98%) 100%)', padding: '5rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚚</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                {currentLanguage === 'he' ? 'משלוח מהיר עד הבית חינם' :
                 currentLanguage === 'en' ? 'Fast Free Home Delivery' :
                 currentLanguage === 'fr' ? 'Livraison Rapide Gratuite à Domicile' :
                 currentLanguage === 'es' ? 'Entrega Rápida Gratuita a Domicilio' :
                 currentLanguage === 'ru' ? 'Быстрая Бесплатная Доставка на Дом' : 'משלוח מהיר עד הבית חינם'}
              </h3>
              <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                {currentLanguage === 'he' ? 'ברכישה מעל 299 ₪ מהחנות' :
                 currentLanguage === 'en' ? 'On purchases over 299 ₪ from the store' :
                 currentLanguage === 'fr' ? 'Sur les achats de plus de 299 ₪ du magasin' :
                 currentLanguage === 'es' ? 'En compras mayores a 299 ₪ de la tienda' :
                 currentLanguage === 'ru' ? 'При покупках свыше 299 ₪ из магазина' : 'ברכישה מעל 299 ₪ מהחנות'}
              </p>
            </div>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                {currentLanguage === 'he' ? 'רכישה מאובטחת' :
                 currentLanguage === 'en' ? 'Secure Purchase' :
                 currentLanguage === 'fr' ? 'Achat Sécurisé' :
                 currentLanguage === 'es' ? 'Compra Segura' :
                 currentLanguage === 'ru' ? 'Безопасная Покупка' : 'רכישה מאובטחת'}
              </h3>
              <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                {currentLanguage === 'he' ? 'באמצעות תעודת SSL ובתקנים המחמירים ביותר' :
                 currentLanguage === 'en' ? 'Using SSL certificate and the most stringent standards' :
                 currentLanguage === 'fr' ? 'En utilisant un certificat SSL et les normes les plus strictes' :
                 currentLanguage === 'es' ? 'Utilizando certificado SSL y los estándares más estrictos' :
                 currentLanguage === 'ru' ? 'Использование SSL-сертификата и самых строгих стандартов' : 'באמצעות תעודת SSL ובתקנים המחמירים ביותר'}
              </p>
            </div>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📚</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                {currentLanguage === 'he' ? 'חנות הספרים הגדולה ביותר לספרי רבנו אונליין' :
                 currentLanguage === 'en' ? 'Largest Online Bookstore for Our Master\'s Books' :
                 currentLanguage === 'fr' ? 'Plus Grande Librairie en Ligne pour les Livres de Notre Maître' :
                 currentLanguage === 'es' ? 'Librería en Línea Más Grande para los Libros de Nuestro Maestro' :
                 currentLanguage === 'ru' ? 'Крупнейший Интернет-Книжный Магазин Книг Нашего Учителя' : 'חנות הספרים הגדולה ביותר לספרי רבנו אונליין'}
              </h3>
              <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                {currentLanguage === 'he' ? 'משלוחים לכל הארץ' :
                 currentLanguage === 'en' ? 'Shipping throughout the country' :
                 currentLanguage === 'fr' ? 'Expédition dans tout le pays' :
                 currentLanguage === 'es' ? 'Envío por todo el país' :
                 currentLanguage === 'ru' ? 'Доставка по всей стране' : 'משלוחים לכל הארץ'}
              </p>
            </div>
            
            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎧</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
                {currentLanguage === 'he' ? 'שירות לקוחות מעולה וזמין תמיד לשירותכם' :
                 currentLanguage === 'en' ? 'Excellent Customer Service Always Available' :
                 currentLanguage === 'fr' ? 'Excellent Service Client Toujours Disponible' :
                 currentLanguage === 'es' ? 'Excelente Servicio al Cliente Siempre Disponible' :
                 currentLanguage === 'ru' ? 'Отличное Обслуживание Клиентов Всегда Доступно' : 'שירות לקוחות מעולה וזמין תמיד לשירותכם'}
              </h3>
              <p style={{color: 'hsl(210, 12%, 35%)', fontSize: '0.9rem', fontWeight: '500'}}>
                {currentLanguage === 'he' ? 'עד 12 תשלומים ללא ריבית' :
                 currentLanguage === 'en' ? 'Up to 12 payments without interest' :
                 currentLanguage === 'fr' ? 'Jusqu\'à 12 paiements sans intérêt' :
                 currentLanguage === 'es' ? 'Hasta 12 pagos sin interés' :
                 currentLanguage === 'ru' ? 'До 12 платежей без процентов' : 'עד 12 תשלומים ללא ריבית'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(210, 85%, 45%) 0%, hsl(210, 90%, 35%) 100%)', color: 'white', padding: '5rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 90%, 85%)'}}>
              {currentLanguage === 'he' ? 'הקטגוריות בחנות' :
               currentLanguage === 'en' ? 'Store Categories' :
               currentLanguage === 'fr' ? 'Catégories du Magasin' :
               currentLanguage === 'es' ? 'Categorías de la Tienda' :
               currentLanguage === 'ru' ? 'Категории Магазина' : 'הקטגוריות בחנות'}
            </h2>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'rgba(255, 228, 181, 0.1)', padding: '2rem', borderRadius: '10px', textAlign: 'center'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 90%, 85%)'}}>
                {currentLanguage === 'he' ? 'כל חיבורי רבנו הקדוש' :
                 currentLanguage === 'en' ? 'All Holy Compositions of Our Master' :
                 currentLanguage === 'fr' ? 'Toutes les Compositions Saintes de Notre Maître' :
                 currentLanguage === 'es' ? 'Todas las Composiciones Sagradas de Nuestro Maestro' :
                 currentLanguage === 'ru' ? 'Все Святые Сочинения Нашего Учителя' : 'כל חיבורי רבנו הקדוש'}
              </h3>
              <a href="/store" style={{textDecoration: 'none'}}>
                <button style={{
                  background: 'linear-gradient(135deg, hsl(210, 85%, 45%), hsl(210, 90%, 35%))', 
                  color: 'white', 
                  border: 'none', 
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold'
                }}>
                  {currentLanguage === 'he' ? 'לחצו כאן' :
                   currentLanguage === 'en' ? 'Click Here' :
                   currentLanguage === 'fr' ? 'Cliquez Ici' :
                   currentLanguage === 'es' ? 'Haga Clic Aquí' :
                   currentLanguage === 'ru' ? 'Нажмите Здесь' : 'לחצו כאן'}
                </button>
              </a>
            </div>
            
            <div style={{background: 'rgba(255, 228, 181, 0.1)', padding: '2rem', borderRadius: '10px', textAlign: 'center'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 90%, 85%)'}}>
                {currentLanguage === 'he' ? 'כל ספרי רבי ישראל' :
                 currentLanguage === 'en' ? 'All Books of Rabbi Israel' :
                 currentLanguage === 'fr' ? 'Tous les Livres de Rabbi Israel' :
                 currentLanguage === 'es' ? 'Todos los Libros del Rabino Israel' :
                 currentLanguage === 'ru' ? 'Все Книги Рабби Израэля' : 'כל ספרי רבי ישראל'}
              </h3>
              <a href="/store" style={{textDecoration: 'none'}}>
                <button style={{
                  background: 'linear-gradient(135deg, hsl(210, 85%, 45%), hsl(210, 90%, 35%))', 
                  color: 'white', 
                  border: 'none', 
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold'
                }}>
                  {currentLanguage === 'he' ? 'לחצו כאן' :
                   currentLanguage === 'en' ? 'Click Here' :
                   currentLanguage === 'fr' ? 'Cliquez Ici' :
                   currentLanguage === 'es' ? 'Haga Clic Aquí' :
                   currentLanguage === 'ru' ? 'Нажмите Здесь' : 'לחצו כאן'}
                </button>
              </a>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="/store" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'rgba(255, 228, 181, 0.2)', 
                color: 'hsl(45, 90%, 85%)', 
                border: '2px solid hsl(45, 90%, 85%)', 
                padding: '1rem 2rem', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontSize: '1.1rem', 
                fontWeight: 'bold'
              }}>
                {currentLanguage === 'he' ? 'לקטגוריות נוספות לחצו כאן' :
                 currentLanguage === 'en' ? 'For additional categories click here' :
                 currentLanguage === 'fr' ? 'Pour des catégories supplémentaires cliquez ici' :
                 currentLanguage === 'es' ? 'Para categorías adicionales haga clic aquí' :
                 currentLanguage === 'ru' ? 'Для дополнительных категорий нажмите здесь' : 'לקטגוריות נוספות לחצו כאן'}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(180, 30%, 98%) 0%, hsl(210, 30%, 98%) 100%)', padding: '5rem 0'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1rem'}}>
            {currentLanguage === 'he' ? 'הצטרפו עכשיו לרשימת תפוצה' :
             currentLanguage === 'en' ? 'Join Our Mailing List Now' :
             currentLanguage === 'fr' ? 'Rejoignez Notre Liste de Diffusion Maintenant' :
             currentLanguage === 'es' ? 'Únete a Nuestra Lista de Correo Ahora' :
             currentLanguage === 'ru' ? 'Присоединяйтесь к Нашему Списку Рассылки Сейчас' : 'הצטרפו עכשיו לרשימת תפוצה'}
          </h2>
          <p style={{fontSize: '1.2rem', color: 'hsl(180, 65%, 45%)', marginBottom: '2rem'}}>
            {currentLanguage === 'he' ? 'וקבלו 10% הנחנה ברכישה ראשונה באתר' :
             currentLanguage === 'en' ? 'And get 10% discount on your first purchase on the site' :
             currentLanguage === 'fr' ? 'Et obtenez 10% de réduction sur votre premier achat sur le site' :
             currentLanguage === 'es' ? 'Y obtén 10% de descuento en tu primera compra en el sitio' :
             currentLanguage === 'ru' ? 'И получите скидку 10% на первую покупку на сайте' : 'וקבלו 10% הנחנה ברכישה ראשונה באתר'}
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
            <input 
              type="email" 
              placeholder={currentLanguage === 'he' ? 'הכניסו כתובת אימייל' : 'Enter email address'}
              style={{
                padding: '1rem 1.5rem', 
                borderRadius: '8px', 
                border: '2px solid hsl(210, 85%, 45%)', 
                fontSize: '1rem', 
                minWidth: '300px',
                textAlign: currentLanguage === 'he' ? 'right' : 'left'
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, hsl(210, 85%, 45%), hsl(210, 90%, 35%))', 
              color: 'white', 
              border: 'none', 
              padding: '1rem 2rem', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontSize: '1rem', 
              fontWeight: 'bold'
            }}>
              {currentLanguage === 'he' ? 'הצטרפו עכשיו' :
               currentLanguage === 'en' ? 'Join Now' :
               currentLanguage === 'fr' ? 'Rejoignez Maintenant' :
               currentLanguage === 'es' ? 'Únete Ahora' :
               currentLanguage === 'ru' ? 'Присоединяйтесь Сейчас' : 'הצטרפו עכשיו'}
            </button>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3 style={{fontSize: '1.8rem', fontWeight: 'bold', color: 'hsl(210, 85%, 45%)', marginBottom: '1.5rem'}}>
              {currentLanguage === 'he' ? 'הצטרפו לקבוצות הוואטסאפ שלנו' :
               currentLanguage === 'en' ? 'Join Our WhatsApp Groups' :
               currentLanguage === 'fr' ? 'Rejoignez Nos Groupes WhatsApp' :
               currentLanguage === 'es' ? 'Únete a Nuestros Grupos de WhatsApp' :
               currentLanguage === 'ru' ? 'Присоединяйтесь к Нашим Группам WhatsApp' : 'הצטרפו לקבוצות הוואטסאפ שלנו'}
            </h3>
            <p style={{fontSize: '1.1rem', color: 'hsl(180, 65%, 45%)', marginBottom: '2rem'}}>
              {currentLanguage === 'he' ? 'קבלו עדכונים יומיים, חוויות מרגשות וחיזוק רוחני' :
               currentLanguage === 'en' ? 'Receive daily updates, exciting experiences and spiritual strengthening' :
               currentLanguage === 'fr' ? 'Recevez des mises à jour quotidiennes, des expériences passionnantes et un renforcement spirituel' :
               currentLanguage === 'es' ? 'Recibe actualizaciones diarias, experiencias emocionantes y fortalecimiento espiritual' :
               currentLanguage === 'ru' ? 'Получайте ежедневные обновления, захватывающие впечатлени�� и духовное укрепление' : 'קבלו עדכונים יומיים, חוויות מרגשות וחיזוק רוחני'}
            </p>
            
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              {[
                {flag: '📱', lang: 'עברית', phone: '972587308000'},
                {flag: '🌍', lang: 'English', phone: '972587308001'},
                {flag: '🇷🇺', lang: 'Русский', phone: '972587308002'},
                {flag: '🇪🇸', lang: 'Español', phone: '972587308003'},
                {flag: '🇫🇷', lang: 'Français', phone: '972587308004'}
              ].map((item, index) => (
                <a key={index} href={`https://wa.me/${item.phone}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  <button style={{
                    background: 'hsl(150, 60%, 45%)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '0.8rem 1.5rem', 
                    borderRadius: '8px', 
                    cursor: 'pointer', 
                    fontSize: '1rem', 
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {item.flag} {item.lang}
                  </button>
                </a>
              ))}
            </div>
          </div>
          
          {/* WHATSAPP SHARE WIDGET */}
          <div style={{marginTop: '3rem'}}>
            {/* <ShareWidget /> */}
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section style={{background: 'linear-gradient(135deg, hsl(210, 85%, 45%) 0%, hsl(210, 90%, 35%) 100%)', color: 'white', padding: '5rem 0'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'hsl(45, 90%, 85%)'}}>
            {currentLanguage === 'he' ? 'הצטרפו עכשיו לפרסום והפצת ספרי רבי נחמן בעולם' :
             currentLanguage === 'en' ? 'Join Now to Promote and Spread Rabbi Nachman\'s Books Worldwide' :
             currentLanguage === 'fr' ? 'Rejoignez Maintenant pour Promouvoir et Diffuser les Livres de Rabbi Nachman dans le Monde' :
             currentLanguage === 'es' ? 'Únete Ahora para Promover y Difundir los Libros del Rabino Nachman en el Mundo' :
             currentLanguage === 'ru' ? 'Присоединяйтесь Сейчас к Продвижению и Распространению Книг Рабби Нахмана по Всему Миру' : 'הצטרפו עכשיו לפרסום והפצת ספרי רבי נחמן בעולם'}
          </h2>
          <h3 style={{fontSize: '1.8rem', fontWeight: '300', marginBottom: '2rem', color: 'hsl(45, 90%, 75%)'}}>
            {currentLanguage === 'he' ? 'ההזדמנות שלכם לעזור ולתת יד לפרסום שם הצדיק בעולם' :
             currentLanguage === 'en' ? 'Your opportunity to help and lend a hand in spreading the name of the Tzaddik in the world' :
             currentLanguage === 'fr' ? 'Votre opportunité d\'aider et de donner un coup de main à la diffusion du nom du Tzaddik dans le monde' :
             currentLanguage === 'es' ? 'Tu oportunidad de ayudar y dar una mano en difundir el nombre del Tzaddik en el mundo' :
             currentLanguage === 'ru' ? 'Ваша возможность помочь и приложить руку к распространению имени Цадика в мире' : 'ההזדמנות שלכם לעזור ולתת יד לפרסום שם הצדיק בעולם'}
          </h3>
          
          <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/join" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'linear-gradient(135deg, hsl(210, 85%, 45%), hsl(210, 90%, 35%))', 
                color: 'white', 
                border: '3px solid hsl(45, 90%, 85%)', 
                padding: '1.2rem 2.5rem', 
                borderRadius: '12px', 
                cursor: 'pointer', 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                boxShadow: '0 6px 20px rgba(220, 53, 69, 0.4)', 
                transition: 'all 0.3s ease'
              }}>
                {currentLanguage === 'he' ? 'הצטרפו אלינו' :
                 currentLanguage === 'en' ? 'Join Us' :
                 currentLanguage === 'fr' ? 'Rejoignez-nous' :
                 currentLanguage === 'es' ? 'Únete a Nosotros' :
                 currentLanguage === 'ru' ? 'Присоединяйтесь к Нам' : 'הצטרפו אלינו'}
              </button>
            </a>
            <a href="/contact" style={{textDecoration: 'none'}}>
              <button style={{
                background: 'rgba(255, 228, 181, 0.15)', 
                color: 'hsl(45, 90%, 85%)', 
                border: '3px solid hsl(45, 90%, 85%)', 
                padding: '1.2rem 2.5rem', 
                borderRadius: '12px', 
                cursor: 'pointer', 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                transition: 'all 0.3s ease'
              }}>
                {currentLanguage === 'he' ? 'צרו קשר לתרומה' :
                 currentLanguage === 'en' ? 'Contact for Donation' :
                 currentLanguage === 'fr' ? 'Contactez pour Don' :
                 currentLanguage === 'es' ? 'Contacto para Donación' :
                 currentLanguage === 'ru' ? 'Связаться для Пожертвования' : 'צרו קשר לתרומה'}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer bg-[hsl(210,85%,25%)] dark:bg-gray-900 text-white" style={{padding: '3rem 0 2rem'}}>
        <div className="elementor-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', paddingTop: '2rem'}}>
            <div className="text-gray-400 dark:text-gray-500" style={{fontSize: '0.9rem'}}>
              <p style={{marginBottom: '0.5rem'}}>
                {currentLanguage === 'he' ? 'כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל' :
                 currentLanguage === 'en' ? 'All rights reserved 2025 © Rabbi Israel Dov Odesser Foundation' :
                 currentLanguage === 'fr' ? 'Tous droits réservés 2025 © Fondation Rabbi Israel Dov Odesser' :
                 currentLanguage === 'es' ? 'Todos los derechos reservados 2025 © Fundación Rabino Israel Dov Odesser' :
                 currentLanguage === 'ru' ? 'Все права защищены 2025 © Фонд Рабби Израэля Дова Одессера' : 'כל הזכיות שמורות 2025 © קרן רבי ישראל דב אודסר זצ"ל'}
              </p>
              <p>
                {currentLanguage === 'he' ? 'האתר נבנה ע"י מדיה מאסטר' :
                 currentLanguage === 'en' ? 'Website built by Media Master' :
                 currentLanguage === 'fr' ? 'Site web construit par Media Master' :
                 currentLanguage === 'es' ? 'Sitio web construido por Media Master' :
                 currentLanguage === 'ru' ? 'Сайт создан Media Master' : 'האתר נבנה ע"י מדיה מאסטר'}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
