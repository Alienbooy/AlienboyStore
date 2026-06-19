import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import PRODUCTS from '../data/products'

const CATEGORIES = ['Skates', 'Switches Magnéticos', 'Switches de Mouse', 'Mouse', 'Accesorios']

function ComingSoonCard({ icon, label }) {
  return (
    <div style={{
      background: 'var(--surface-container-lowest)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      position: 'relative',
    }}>
      <span className="material-symbols-outlined" style={{
        fontSize: '40px', color: 'rgba(185,204,178,0.3)', marginBottom: '14px',
      }}>{icon}</span>
      <h3 className="font-sora" style={{
        fontSize: '16px', fontWeight: 700,
        color: 'rgba(185,204,178,0.4)', marginBottom: '12px',
      }}>{label}</h3>
      <span className="font-mono" style={{
        fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em',
        color: 'rgba(0,255,65,0.5)',
        border: '1px solid rgba(0,255,65,0.2)',
        padding: '4px 12px', borderRadius: '2px',
        background: 'rgba(19,19,19,0.5)',
      }}>Coming Soon</span>
    </div>
  )
}

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState('Skates')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '72px' }}>
        {/* Hero Header */}
        <section style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: '64px 64px 48px',
        }}>
          <h1 className="font-sora" style={{
            fontSize: 'clamp(32px, 5vw, 72px)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.04em',
            color: 'var(--on-surface)',
            marginBottom: '16px',
          }}>
            CATÁLOGO <span style={{ color: 'var(--primary-container)' }}>PRO</span>
          </h1>
          <p style={{
            fontSize: '18px', color: 'var(--on-surface-variant)',
            maxWidth: '600px', lineHeight: 1.6,
          }}>
            Equipamiento de alto rendimiento diseñado para la máxima precisión y velocidad. Encuentra tu ventaja competitiva.
          </p>
        </section>

        {/* Category Filters */}
        <section style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: '0 64px 48px',
          overflowX: 'auto',
        }}>
          <div style={{ display: 'flex', gap: '12px', minWidth: 'max-content' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >{cat}</button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: '0 64px 80px',
        }}>
          {activeCategory === 'Skates' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
            }}>
              {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
              <ComingSoonCard icon="memory" label="Switches Magnéticos" />
              <ComingSoonCard icon="mouse" label="Gaming Mice" />
            </div>
          ) : (
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              minHeight: '400px', gap: '16px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'rgba(185,204,178,0.2)' }}>inventory_2</span>
              <h3 className="font-sora" style={{ fontSize: '20px', color: 'rgba(185,204,178,0.3)' }}>{activeCategory}</h3>
              <span className="font-mono" style={{
                fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'rgba(0,255,65,0.5)',
                border: '1px solid rgba(0,255,65,0.2)',
                padding: '6px 16px', borderRadius: '2px',
              }}>Coming Soon</span>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--surface-container-lowest)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '64px',
      }}>
        <div style={{
          maxWidth: '1440px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          <div style={{ gridColumn: 'span 2' }}>
            <span className="font-sora" style={{
              fontSize: '24px', fontWeight: 900,
              color: 'var(--on-surface)', display: 'block', marginBottom: '12px',
            }}>Alienboy Store</span>
            <p style={{ color: 'var(--on-surface-variant)', maxWidth: '340px', lineHeight: 1.6, marginBottom: '20px', fontSize: '14px' }}>
              High-Octane Cyber-Performance. Equipamiento premium para dominar la partida.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(185,204,178,0.35)' }}>© 2024 Alienboy Store. Todos los derechos reservados.</p>
          </div>
          <div>
            <h4 className="font-sora" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '16px' }}>Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Support', 'Shipping', 'Warranty', 'Contact'].map(l => (
                <li key={l}><a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
                >{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sora" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '16px' }}>Social</h4>
            <a href="#" style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'var(--surface)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--on-surface-variant)', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--on-surface-variant)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>share</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
