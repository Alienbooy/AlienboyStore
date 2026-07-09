import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import PRODUCTS from '../data/products'

const BENEFITS = [
  { title: 'Precisión', icon: 'my_location', desc: 'Movimientos consistentes y control fino.' },
  { title: 'Control', icon: 'tune', desc: 'Frenado preciso cuando lo necesitas.' },
  { title: 'Menor Fricción', icon: 'air', desc: 'Deslizamiento limpio y suave.' },
  { title: 'Menor Ruido', icon: 'volume_off', desc: 'Experiencia silenciosa en tu mousepad.' },
  { title: 'Durabilidad', icon: 'shield', desc: 'Materiales pensados para sesiones largas.' },
  { title: 'Ideal FPS', icon: 'sports_esports', desc: 'Optimizado para juegos competitivos.' },
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--on-surface)' }}>
      <Navbar />

      <main style={{ paddingTop: '72px' }}>
        {/* Hero Section */}
        <section id="hero" style={{
          position: 'relative',
          minHeight: 'calc(100vh - 72px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 64px',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% -10%, rgba(0,255,65,0.15), transparent 40%), radial-gradient(circle at 70% 100%, rgba(176,38,255,0.08), transparent 50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: '1440px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                border: '1px solid rgba(0,255,65,0.3)',
                borderRadius: '9999px',
                background: 'rgba(0,255,65,0.08)',
                marginBottom: '24px',
              }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px', fontWeight: 700 }}>speed</span>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--primary-container)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Gaming Gear Premium</span>
              </div>

              <h1 className="font-sora" style={{
                fontSize: '72px',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: '24px',
              }}>
                Mejora tu juego.
                <br />
                <span style={{ color: 'var(--on-surface)' }}>Siente la diferencia.</span>
              </h1>

              <p style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'var(--on-surface-variant)',
                marginBottom: '32px',
                maxWidth: '600px',
              }}>
                Skates, mouses, switches y accesorios de alto rendimiento. Todo lo que necesitás para dominar cada partida.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/catalogo" style={{
                  padding: '16px 28px',
                  background: 'var(--primary-container)',
                  color: '#131313',
                  textDecoration: 'none',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  borderRadius: '2px',
                  boxShadow: '0 0 20px rgba(0,255,65,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,65,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,65,0.2)'
                  }}
                >
                  Comprar ahora
                </Link>
                <a href="/catalogo" style={{
                  padding: '16px 28px',
                  background: 'transparent',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  border: '1px solid var(--primary)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0,255,65,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Ver catálogo
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '20%', background: 'radial-gradient(circle, rgba(0,255,65,0.1), transparent)', blur: '100px', borderRadius: '50%' }} />
              <div style={{
                position: 'relative',
                aspectRatio: '1',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                background: 'rgba(32,31,31,0.5)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                overflow: 'hidden',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  width: '100%',
                }}>
                  {[PRODUCTS[0], PRODUCTS[5], PRODUCTS[7], PRODUCTS[10]].filter(Boolean).map(p => (
                    <div key={p.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--surface-container-low)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '12px',
                      height: '120px',
                    }}>
                      <img src={p.img} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" style={{
          padding: '80px 64px',
          background: 'var(--surface-container-lowest)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ marginBottom: '60px' }}>
              <h2 className="font-sora" style={{
                fontSize: '56px',
                fontWeight: 700,
                color: 'var(--primary)',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}>
                Ventaja Táctica
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'var(--on-surface-variant)',
                maxWidth: '800px',
                lineHeight: 1.6,
              }}>
                Tecnología de vanguardia para tu aim.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}>
              {BENEFITS.map(benefit => (
                <article key={benefit.title} style={{
                  background: 'rgba(32,31,31,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                  borderTop: `2px solid ${[benefit.title === 'Precisión' ? 'var(--primary-container)' : benefit.title === 'Control' ? 'var(--secondary)' : benefit.title === 'Menor Fricción' ? '#b026ff' : benefit.title === 'Menor Ruido' ? '#00ff41' : benefit.title === 'Durabilidad' ? '#ffaa00' : 'var(--primary-container)'][0] || 'var(--primary-container)'}`,
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--surface-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '24' }}>{benefit.icon}</span>
                  </div>
                  <h3 className="font-sora" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog" style={{
          padding: '80px 64px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}>
          <div style={{ marginBottom: '60px' }}>
            <h2 className="font-sora" style={{
              fontSize: '56px',
              fontWeight: 700,
              color: 'var(--primary)',
              marginBottom: '12px',
            }}>
              El Arsenal
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--on-surface-variant)',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}>
              Productos destacados de cada categoría. Explorá todo el catálogo para ver más.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}>
            {PRODUCTS.filter(p => ['jade-air', 'obsidian', 'atk-zero', 'logitech-superstrike', 'wlmouse-beast-x-pro', 'omron-d2f', 'gravastar-purple', 'wukong-magnetic', 'gaming-grip-tape'].includes(p.id)).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/catalogo" style={{
              padding: '16px 36px',
              background: 'transparent',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              border: '1px solid var(--primary)',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,65,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Ver catálogo completo
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* WhatsApp Button */}
        <a href="https://chat.whatsapp.com/JoibR2S4elSC8TNo05Lkap" style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 100,
          background: '#25D366',
          color: '#000',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(37,211,102,0.4)',
          transition: 'all 0.3s',
          border: 'none',
          cursor: 'pointer',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
          aria-label="Contact on WhatsApp"
        >
          <svg style={{ width: '32px', height: '32px', fill: 'currentColor' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
        </a>

        {/* Footer */}
        <footer style={{
          background: 'var(--surface-container-lowest)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '60px 64px 32px',
          marginTop: '80px',
        }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto 40px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              marginBottom: '40px',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span className="font-sora" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary)' }}>ALIENBOY</span>
                </div>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', lineHeight: 1.6, marginBottom: '12px' }}>
                  Tu Aim, Tu Control, Tu Advantage. Accesorios premium para gamers competitivos.
                </p>
                <p style={{ color: 'rgba(185,204,178,0.35)', fontSize: '12px' }}>© 2024 Alienboy Store. Todos los derechos reservados.</p>
              </div>

              <div>
                <h4 className="font-sora" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Políticas</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                  <li><a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}>Términos y Condiciones</a></li>
                  <li><a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}>Política de Privacidad</a></li>
                  <li><a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}>Devoluciones</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-sora" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Contacto</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                  <li><a href="https://chat.whatsapp.com/JoibR2S4elSC8TNo05Lkap" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>forum</span>
                    WhatsApp Group
                  </a></li>
                  <li><a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>store</span>
                    FB Marketplace
                  </a></li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', textAlign: 'center', color: 'rgba(185,204,178,0.4)', fontSize: '12px' }}>
            © 2024 Alienboy Store. Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  )
}