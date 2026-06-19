import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-Ghu9LVnt8KoCwbslaGhOaVgLP2coKsHcYkJSq4_9G1cC7PmFEGzrSbUclLL5IwRcJ9IUEoKbLntgAch7lhbp56mhbZEC4hH-psK4ABEBBLph6fzuiPvFGC6EtpfAsfUd8GUnm7D-acB_O6CzFcTHZAojnIEcvWI7qztytZXjZI0NGKS0F20MDZ6WTixH2sXJU8s5SMa57oNy5gg2VkGhVTysC8dpMPcNxrtmtEUypUdP3JA_zW6N3JRpmgYAJ7zGY6rHgtmu_4'

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
    navigate('/catalogo')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Cyber glow background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at top right, rgba(0,255,65,0.12) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(0,255,65,0.05) 0%, transparent 50%)',
      }} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5, mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='transparent'/%3E%3Crect width='1' height='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
      }} />

      <main style={{ width: '100%', maxWidth: '440px', padding: '24px', position: 'relative', zIndex: 10 }}>
        <div style={{
          background: 'rgba(32,31,31,0.5)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top accent line on hover handled via group - static version */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(0,255,65,0.5), transparent)',
            opacity: 0.6,
          }} />

          {/* Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '88px', height: '88px', borderRadius: '50%',
              overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)',
              background: 'var(--surface-container-lowest)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '8px', marginBottom: '20px',
              boxShadow: '0 0 20px rgba(0,255,65,0.1)',
            }}>
              <img src={LOGO_URL} alt="Alienboy Store Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <h1 className="font-sora" style={{
              fontSize: '28px', fontWeight: 700, color: 'var(--primary-container)',
              textAlign: 'center', marginBottom: '8px',
            }}>Acceso de Piloto</h1>
            <p style={{ color: 'var(--on-surface-variant)', textAlign: 'center', fontSize: '15px', maxWidth: '280px' }}>
              Ingresa para ver tu historial de compras y configurar tu arsenal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="font-mono" htmlFor="email" style={{
                fontSize: '11px', color: 'var(--on-surface-variant)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>mail</span>
                Email
              </label>
              <input
                id="email" type="email" required
                className="stealth-input"
                placeholder="piloto@alienboy.store"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'var(--surface-container-lowest)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '2px', color: 'var(--on-surface)',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
                  transition: 'all 0.3s',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="font-mono" htmlFor="password" style={{
                  fontSize: '11px', color: 'var(--on-surface-variant)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>lock</span>
                  Password
                </label>
                <a href="#" className="font-mono" style={{
                  fontSize: '11px', color: 'var(--primary-fixed-dim)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}>¿Olvidaste tu contraseña?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  id="password" type={showPass ? 'text' : 'password'} required
                  className="stealth-input"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 48px 12px 16px',
                    background: 'var(--surface-container-lowest)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '2px', color: 'var(--on-surface)',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
                    transition: 'all 0.3s',
                  }}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    {showPass ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="font-mono" style={{
              width: '100%', padding: '14px',
              background: 'var(--primary-container)',
              color: 'var(--on-primary)',
              border: 'none', borderRadius: '2px',
              fontSize: '12px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.15em',
              cursor: 'pointer', marginTop: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--primary-fixed-dim)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,65,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--primary-container)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span>Iniciar Sesión</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>login</span>
            </button>
          </form>

          {/* Footer */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <p className="font-mono" style={{ fontSize: '11px', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ¿No tienes una cuenta?{' '}
              <Link to="/registro" style={{
                color: 'var(--primary-container)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,255,65,0.3)',
                paddingBottom: '1px',
                marginLeft: '4px',
                transition: 'color 0.2s',
              }}>Regístrate</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
