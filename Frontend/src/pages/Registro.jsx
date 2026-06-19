import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-Ghu9LVnt8KoCwbslaGhOaVgLP2coKsHcYkJSq4_9G1cC7PmFEGzrSbUclLL5IwRcJ9IUEoKbLntgAch7lhbp56mhbZEC4hH-psK4ABEBBLph6fzuiPvFGC6EtpfAsfUd8GUnm7D-acB_O6CzFcTHZAojnIEcvWI7qztytZXjZI0NGKS0F20MDZ6WTixH2sXJU8s5SMa57oNy5gg2VkGhVTysC8dpMPcNxrtmtEUypUdP3JA_zW6N3JRpmgYAJ7zGY6rHgtmu_4'

function InputField({ id, label, icon, type = 'text', placeholder, value, onChange, children }) {
  return (
    <div className="input-glow" style={{ borderRadius: '8px', transition: 'all 0.3s' }}>
      <label className="font-mono" htmlFor={id} style={{
        display: 'block', fontSize: '11px',
        color: 'var(--on-surface-variant)',
        textTransform: 'uppercase', letterSpacing: '0.1em',
        marginBottom: '8px',
      }}>{label}</label>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'var(--surface)',
        border: '1px solid transparent',
        borderRadius: '8px',
        transition: 'border-color 0.2s',
      }}
        onFocusCapture={e => e.currentTarget.style.borderColor = 'var(--primary-container)'}
        onBlurCapture={e => e.currentTarget.style.borderColor = 'transparent'}
      >
        <span className="material-symbols-outlined" style={{
          color: 'var(--on-surface-variant)', paddingLeft: '16px', fontSize: '20px', pointerEvents: 'none',
        }}>{icon}</span>
        <input
          id={id} type={type} required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            flex: 1, background: 'transparent',
            border: 'none', outline: 'none',
            color: 'var(--on-background)',
            fontFamily: 'Geist, sans-serif', fontSize: '15px',
            padding: '12px',
          }}
        />
        {children}
      </div>
    </div>
  )
}

export default function Registro() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/catalogo')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'rgba(0,255,65,0.07)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <main style={{ width: '100%', maxWidth: '480px', padding: '24px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{
          background: 'rgba(32,31,31,0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(to right, transparent, rgba(0,255,65,0.5), transparent)',
            opacity: 0.5,
          }} />

          {/* Logo header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px', textAlign: 'center' }}>
            <div style={{
              width: '80px', height: '80px',
              background: 'var(--surface-container-highest)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 0 20px rgba(0,255,65,0.1)',
            }}>
              <img src={LOGO_URL} alt="Alienboy Store Logo" style={{
                width: '48px', height: '48px', objectFit: 'contain',
                filter: 'grayscale(1) contrast(1.25) brightness(1.5)',
              }} />
            </div>
            <h1 className="font-sora" style={{
              fontSize: '26px', fontWeight: 700,
              color: 'var(--primary-fixed)',
              letterSpacing: '-0.02em', marginBottom: '10px',
            }}>Únete a la Élite</h1>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', maxWidth: '300px', lineHeight: 1.6 }}>
              Crea tu cuenta para gestionar tus pedidos y acceder a beneficios exclusivos.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <InputField
              id="nombre" label="Nombre Completo" icon="person"
              placeholder="Juan Pérez"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
            />
            <InputField
              id="telefono" label="Número de Teléfono" icon="call" type="tel"
              placeholder="+591 7XX XXX XXX"
              value={form.telefono}
              onChange={e => setForm({ ...form, telefono: e.target.value })}
            />
            <InputField
              id="email" label="Correo Electrónico" icon="mail" type="email"
              placeholder="operador@red.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <InputField
              id="password" label="Contraseña" icon="lock" type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            >
              <button type="button" onClick={() => setShowPass(!showPass)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                paddingRight: '14px', color: 'var(--on-surface-variant)',
                display: 'flex', alignItems: 'center', transition: 'color 0.2s',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {showPass ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </InputField>

            {/* CTA */}
            <div style={{ paddingTop: '8px' }}>
              <button type="submit" className="font-mono" style={{
                width: '100%', padding: '14px',
                background: 'var(--primary-container)',
                color: 'var(--on-primary)',
                border: 'none', borderRadius: '8px',
                fontSize: '12px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                cursor: 'pointer',
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
                <span>Crear Cuenta</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Footer */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>
              ¿Ya eres parte de la red?
            </p>
            <Link to="/login" className="font-mono" style={{
              fontSize: '11px', color: 'var(--primary-container)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>Iniciar Sesión</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
