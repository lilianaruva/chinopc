import './App.css'
import chinobase from './assets/base/chinobase.png'
import chavabase from './assets/base/chavabase.png'
import dambase from './assets/base/dambase.png'
import heroImage1 from './assets/base/Pi7_cropper.png'
import commentIcon from './assets/base/comment.png'
import boxIcon from './assets/base/box.png'
import setupIcon from './assets/base/setup.png'
import diskIcon from './assets/base/disk.png'
import { AnimatedBackground } from './components/AnimatedBackground'


function App() {
  return (
    <div className="landing">
      {/* Animated Neon Background */}
      <AnimatedBackground />

      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">CHINOPC</a>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#opiniones">Opiniones</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <a href="#contacto" className="btn btn-primary btn-sm">Cotiza tu PC</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Potencia tu mundo con <span className="highlight">la PC ideal</span>
            </h1>
            <p className="hero-subtitle">
              Armados personalizados para gaming, streaming y trabajo
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-outline">Agenda asesoria</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage1} alt="CHINOPC Gaming Setup" />
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="section galeria">
        <div className="container">
          <h2 className="section-title">Galeria de Builds</h2>
          <p className="section-subtitle">Conoce algunos de nuestros armados mas recientes</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">
                  <span className="icon-pc">🖥️</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Build Gaming Pro</h3>
                <p>RTX 4070 | Ryzen 7 | 32GB RAM</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">
                  <span className="icon-pc">💻</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Build Streaming</h3>
                <p>RTX 4060 | Intel i5 | 16GB RAM</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">
                  <span className="icon-pc">⚡</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Build Workstation</h3>
                <p>RTX 4080 | Ryzen 9 | 64GB RAM</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">
                  <span className="icon-pc">🎮</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Build Entry Gaming</h3>
                <p>RTX 4060 | Ryzen 5 | 16GB RAM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="section como-funciona">
        <div className="container">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">Tu PC ideal en 4 simples pasos</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <img src={commentIcon} alt="comment" />
              </div>
              <h3>Contactanos</h3>
              <p>Escribenos por WhatsApp o agenda una asesoria para conocer tus necesidades</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <img src={setupIcon} alt="setupIcon" />
              </div>
              <h3>Cotizacion</h3>
              <p>Te enviamos opciones de builds personalizadas segun tu presupuesto y uso</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <img src={diskIcon} alt="diskIcon" />
              </div>
              <h3>Armado</h3>
              <p>Ensamblamos tu PC con componentes de calidad y pruebas rigurosas</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">
                <img src={boxIcon} alt="boxIcon" />
              </div>
              <h3>Entrega</h3>
              <p>Recibe tu equipo listo para usar con garantia y soporte tecnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones Section */}
      <section id="opiniones" className="section opiniones">
        <div className="container">
          <h2 className="section-title">Opiniones de Clientes</h2>
          <p className="section-subtitle">Lo que dicen quienes ya confiaron en nosotros</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Excelente servicio, me armaron la PC perfecta para streaming. El Chino me asesoro
                super bien y el precio fue muy competitivo."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={chinobase} alt="chino" />
                </div>
                <div className="author-info">
                  <strong>Juan Martinez</strong>
                  <span>Streamer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Mi primera PC gamer y quede encantada. Me explicaron todo con paciencia y
                el equipo funciona increible para los juegos que queria."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={chavabase} alt="chavabase" />
                </div>
                <div className="author-info">
                  <strong>Ana Rodriguez</strong>
                  <span>Gamer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Necesitaba una workstation para edicion de video y me armaron algo brutal.
                El soporte post-venta tambien ha sido excelente."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={dambase} alt="chavabase" />
                </div>
                <div className="author-info">
                  <strong>Carlos Lopez</strong>
                  <span>Editor de Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section contacto">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">Estamos listos para ayudarte a armar tu PC ideal</p>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+52 55 1234 5678</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>contacto@chinopc.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Ubicacion</h3>
                  <p>Ciudad de Mexico, CDMX</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h3>Horario</h3>
                  <p>Lun - Sab: 10:00 - 19:00</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input type="tel" id="phone" placeholder="+52 55 1234 5678" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows={4} placeholder="Cuentanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">CHINOPC</a>
            <p>Armados personalizados para gaming, streaming y trabajo</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#opiniones">Opiniones</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Siguenos</h4>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2025 CHINOPC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
