import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_gAS9-bQD7y0myvOAe9YodV1GwWlYCZZV8qGEsHe8M1a_sFl5YCuT7XkMUqqk7rJL-cyaYuqchJp_i-W-LOdsP7vLWGFsgO5xhkj4W9wMKiNWP1ClAJNFy360SfTlzC6D5MA2DcnYXdvOcwDBp0LgMage0cZLUnDEdRR3ZQqQI3-t-7AjR1EKfuVqvvn0QOXlI2F0tUdLvKU8y5WiqjRDJuK5QRqVTQ0b9KN7dKxHH6PwvXzO8W4G0gc_VHFW9BNwnjJaiAhraqI'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Catalogo', href: '/catalogo' },
  { label: 'A Cerca de Nosotros', href: '#acercade' }
]

export default function Navbar() {
  const location = useLocation()
  const { isLoggedIn, logout } = useAuth()
  
  // Show nav links mainly on the home page or catalog where it makes sense
  // If we are on /login or /registro we might still show them, or hide them.
  // For now, let's keep them visible.
  
  return (
    <header style={{
      background: 'rgba(19,19,19,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      height: '72px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 24px',
        height: '100%',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={LOGO_URL} alt="Alienboy Store" style={{ height: '40px', width: 'auto' }} />
          <span className="font-sora" style={{
            fontWeight: 700, fontSize: '20px',
            color: 'var(--primary)',
            display: 'none',
          }}
            onMouseEnter={e => e.target.style.display = 'block'}
          >Alienboy Store</span>
          <span className="font-sora" style={{ fontWeight: 700, fontSize: '20px', color: 'var(--primary)' }}>
            Alienboy Store
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '15px',
              color: 'var(--on-surface-variant)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
            >{link.label}</a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/carrito" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--on-surface-variant)',
            padding: '8px', borderRadius: '50%',
            transition: 'all 0.2s',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>

          {!isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/login" style={{
                padding: '10px 16px',
                border: '1px solid var(--primary-container)',
                color: 'var(--primary-container)',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                borderRadius: '2px',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,255,65,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Login
              </Link>
              <Link to="/registro" style={{
                padding: '10px 16px',
                background: 'var(--primary-container)',
                color: '#131313',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                borderRadius: '2px',
                transition: 'all 0.3s',
                boxShadow: '0 0 15px rgba(0,255,65,0.2)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--primary-fixed-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--primary-container)'
                }}
              >
                Register
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--on-surface-variant)',
                padding: '8px', borderRadius: '50%',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
              >
                <span className="material-symbols-outlined">person</span>
              </button>
              <button 
                onClick={logout}
                style={{
                  background: 'none', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
                  color: 'var(--on-surface-variant)',
                  padding: '8px', borderRadius: '50%',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-red)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                title="Logout"
              >
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
