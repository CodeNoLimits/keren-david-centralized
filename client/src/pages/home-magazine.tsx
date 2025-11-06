import { Header } from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomeMagazine() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <div
      className="magazine-home"
      style={{
        direction: currentLanguage === 'he' ? 'rtl' : 'ltr',
        fontFamily: currentLanguage === 'he' ? "'Heebo', sans-serif" : "'Inter', sans-serif"
      }}
    >
      {/* Header */}
      <Header currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

      {/* HERO SECTION - Magazine Style */}
      <motion.section
        className="hero-magazine"
        initial="initial"
        animate="animate"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '700px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      >
        {/* Background Image with Parallax */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1609902726358-08e7b6647f2b?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.15,
          }}
        />

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(26,26,46,0.75) 50%, rgba(22,33,62,0.8) 100%)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}>
          <motion.div
            style={{ textAlign: 'center', maxWidth: '900px' }}
            {...fadeInUp}
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.1rem',
                letterSpacing: '0.3em',
                color: '#d4af37',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              {currentLanguage === 'he' ? 'קרן רבי ישראל דב אודסר זצ״ל' : 'RABBI ISRAEL DOV ODESSER FOUNDATION'}
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '2rem',
                lineHeight: 1.1,
                fontFamily: currentLanguage === 'he' ? "'Frank Ruhl Libre', serif" : "'Playfair Display', serif",
              }}
            >
              {currentLanguage === 'he' ? (
                <>
                  ספרי רבנו<br />נחמן מברסלב
                </>
              ) : (
                <>
                  Books of Rabbi<br />Nachman of Breslov
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '1.4rem',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '3rem',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {currentLanguage === 'he'
                ? 'חווית קריאה דיגיטלית מרהיבה בספרי הקודש והחיזוק הרוחני'
                : 'An extraordinary digital reading experience of holy books and spiritual strengthening'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href="/store" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f8e5a0 100%)',
                  color: '#0a0a0a',
                  padding: '1.2rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)',
                  letterSpacing: '0.05em',
                }} className="hover-lift">
                  {currentLanguage === 'he' ? 'גלו את החנות' : 'DISCOVER THE STORE'}
                </button>
              </a>
              <a href="/lottery" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'transparent',
                  color: '#ffffff',
                  padding: '1.2rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  border: '2px solid #d4af37',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  letterSpacing: '0.05em',
                }} className="hover-gold">
                  {currentLanguage === 'he' ? 'להגרלת אומן' : 'UMAN RAFFLE'}
                </button>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                marginTop: '4rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                {currentLanguage === 'he' ? 'גלול למטה' : 'Scroll Down'}
              </div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  width: '2px',
                  height: '40px',
                  background: 'linear-gradient(to bottom, rgba(212,175,55,0.8), transparent)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURED RABBIS SECTION - Magazine Grid */}
      <section style={{
        background: '#ffffff',
        padding: '8rem 0',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '5rem',
            }}
          >
            <div style={{
              fontSize: '0.9rem',
              letterSpacing: '0.3em',
              color: '#d4af37',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontWeight: 600,
            }}>
              {currentLanguage === 'he' ? 'מורשת רוחנית' : 'SPIRITUAL HERITAGE'}
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#0a0a0a',
              marginBottom: '1.5rem',
              fontFamily: currentLanguage === 'he' ? "'Frank Ruhl Libre', serif" : "'Playfair Display', serif",
            }}>
              {currentLanguage === 'he' ? 'גדולי ישראל' : 'Great Rabbis of Israel'}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              {currentLanguage === 'he'
                ? 'מסורת עשירה של תורה וחסידות המאירה את דרכנו עד היום'
                : 'A rich tradition of Torah and Chassidut illuminating our path to this day'}
            </p>
          </motion.div>

          {/* Magazine Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                title: 'רבי נחמן מברסלב',
                titleEn: 'Rabbi Nachman of Breslov',
                subtitle: 'זצוקללה"ה זיע"א',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
                description: 'מייסד חסידות ברסלב, מחבר ליקוטי מוהר"ן וסיפורי מעשיות'
              },
              {
                title: 'רבי ישראל דב אודסר',
                titleEn: 'Rabbi Israel Dov Odesser',
                subtitle: 'זצוקללה"ה זיע"א',
                image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80',
                description: 'מגלה הפתק המפורסם "נ נח נחמ נחמן מאומן"'
              },
              {
                title: 'רבי נתן מברסלב',
                titleEn: 'Rabbi Nathan of Breslov',
                subtitle: 'זצוקללה"ה זיע"א',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
                description: 'תלמידו הנאמן של רבי נחמן, מחבר ליקוטי הלכות'
              },
            ].map((rabbi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
              >
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: '400px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${rabbi.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                  }} className="hover-zoom" />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#d4af37',
                      letterSpacing: '0.2em',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                    }}>
                      {rabbi.subtitle}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    marginBottom: '1rem',
                    fontFamily: currentLanguage === 'he' ? "'Frank Ruhl Libre', serif" : "'Playfair Display', serif",
                  }}>
                    {currentLanguage === 'he' ? rabbi.title : rabbi.titleEn}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.8,
                  }}>
                    {rabbi.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS SHOWCASE - Split Layout */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        padding: '8rem 0',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                fontSize: '0.9rem',
                letterSpacing: '0.3em',
                color: '#d4af37',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                {currentLanguage === 'he' ? 'אוסף דיגיטלי' : 'DIGITAL COLLECTION'}
              </div>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#0a0a0a',
                marginBottom: '2rem',
                lineHeight: 1.2,
                fontFamily: currentLanguage === 'he' ? "'Frank Ruhl Libre', serif" : "'Playfair Display', serif",
              }}>
                {currentLanguage === 'he' ? 'ספרי קודש מופלאים' : 'Magnificent Holy Books'}
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                {currentLanguage === 'he'
                  ? 'גלו את האוסף המלא של ספרי רבנו נחמן מברסלב זצ״ל - ליקוטי מוהר"ן, ליקוטי תפילות, סיפורי מעשיות ועוד. כל ספר בעריכה מדויקת ועיצוב מרהיב.'
                  : 'Discover the complete collection of Rabbi Nachman\'s books - Likutei Moharan, Likutei Tefilot, Tales of Ancient Times and more. Each book with precise editing and stunning design.'}
              </p>
              <a href="/store" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f8e5a0 100%)',
                  color: '#0a0a0a',
                  padding: '1.2rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
                  letterSpacing: '0.05em',
                }} className="hover-lift">
                  {currentLanguage === 'he' ? 'גלו את הספרים' : 'EXPLORE BOOKS'}
                </button>
              </a>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
              }}
            >
              {[
                'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/6.d110a0.webp',
                'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/3.d110a0.webp',
                'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/5.d110a0.webp',
                'https://www.haesh-sheli.co.il/wp-content/uploads/2023/07/2.d110a0.webp',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <img
                    src={img}
                    alt={`Book ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* UMAN RAFFLE - Full Width Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '8rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.3,
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              fontSize: '0.9rem',
              letterSpacing: '0.3em',
              color: '#d4af37',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}>
              {currentLanguage === 'he' ? 'הזדמנות מיוחדת' : 'SPECIAL OPPORTUNITY'}
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '2rem',
              lineHeight: 1.2,
              fontFamily: currentLanguage === 'he' ? "'Frank Ruhl Libre', serif" : "'Playfair Display', serif",
            }}>
              {currentLanguage === 'he' ? 'זכו בטיסה חינם לאומן' : 'Win a Free Flight to Uman'}
            </h2>
            <p style={{
              fontSize: '1.4rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '3rem',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}>
              {currentLanguage === 'he'
                ? 'בכל רכישה בסכום של 35 ₪ ומעלה - נכנסים אוטומטית להגרלה הגדולה על טיסה לציון רבנו הקדוש באומן'
                : 'With every purchase of 35 ₪ or more - automatic entry to the grand raffle for a flight to our holy Rebbe\'s tomb in Uman'}
            </p>
            <a href="/lottery" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f8e5a0 100%)',
                color: '#0a0a0a',
                padding: '1.5rem 4rem',
                fontSize: '1.2rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 15px 50px rgba(212, 175, 55, 0.5)',
                letterSpacing: '0.05em',
              }} className="hover-lift">
                {currentLanguage === 'he' ? 'להצטרפות להגרלה' : 'JOIN THE RAFFLE'}
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0a0a0a',
        color: '#ffffff',
        padding: '4rem 0 2rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}>
            {/* About */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#d4af37',
              }}>
                {currentLanguage === 'he' ? 'קרן רבי ישראל' : 'Rabbi Israel Foundation'}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                {currentLanguage === 'he'
                  ? 'מפיצים את אור התורה והחסידות של רבנו נחמן מברסלב זצ״ל בכל העולם'
                  : 'Spreading the light of Torah and Chassidut of Rabbi Nachman worldwide'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#d4af37',
              }}>
                {currentLanguage === 'he' ? 'קישורים מהירים' : 'Quick Links'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: currentLanguage === 'he' ? 'חנות' : 'Store', link: '/store' },
                  { label: currentLanguage === 'he' ? 'אודות' : 'About', link: '/about' },
                  { label: currentLanguage === 'he' ? 'צור קשר' : 'Contact', link: '/contact' },
                  { label: currentLanguage === 'he' ? 'הגרלה' : 'Raffle', link: '/lottery' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#d4af37',
              }}>
                {currentLanguage === 'he' ? 'צור קשר' : 'Contact'}
              </h4>
              <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
                <div>📧 info@keren-rabbi-israel.com</div>
                <div>📱 +972-58-730-8000</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
          }}>
            <p>
              {currentLanguage === 'he'
                ? '© 2025 קרן רבי ישראל דב אודסר זצ״ל - כל הזכויות שמורות'
                : '© 2025 Rabbi Israel Dov Odesser Foundation - All Rights Reserved'}
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.6);
        }

        .hover-gold:hover {
          background: linear-gradient(135deg, #d4af37 0%, #f8e5a0 100%);
          color: #0a0a0a;
          border-color: transparent;
        }

        .hover-zoom:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-magazine {
            height: auto !important;
            min-height: 600px !important;
            padding: 6rem 0 !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
