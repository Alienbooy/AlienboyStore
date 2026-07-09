import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'

export default function Carrito() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "59165057596"
    let message = "¡Hola Alienboy Store! Quiero realizar el siguiente pedido:\n\n"
    
    cart.forEach(item => {
      const variant = item.option ? ` (${item.option})` : ''
      const color = item.optionLabel ? ` - ${item.optionLabel}` : ''
      message += `- ${item.quantity}x ${item.name}${variant}${color} - ${item.price * item.quantity} Bs\n`
    })
    
    message += `\n*Total a pagar: ${getCartTotal()} Bs*`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    clearCart() // Optional: clear cart after sending to WhatsApp
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--on-surface)' }}>
      <Navbar />
      
      <main style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 className="font-sora" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--primary)' }}>
              Tu Carrito
            </h1>
            <span style={{ color: 'var(--on-surface-variant)' }}>
              {getCartCount()} {getCartCount() === 1 ? 'artículo' : 'artículos'}
            </span>
          </div>

          {cart.length === 0 ? (
            <div style={{ 
              textAlign: 'center', padding: '80px 0',
              background: 'var(--surface-container)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--on-surface-variant)', marginBottom: '16px' }}>
                production_quantity_limits
              </span>
              <h2 className="font-sora" style={{ fontSize: '24px', marginBottom: '8px' }}>Tu carrito está vacío</h2>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: '24px' }}>
                Explora nuestro catálogo para encontrar el mejor equipamiento.
              </p>
              <Link to="/catalogo" style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--primary-container)',
                color: '#131313',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '4px',
                transition: 'all 0.3s',
              }}>
                Ver Catálogo
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '32px' }}>
              {/* Cart Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cart.map(item => (
                  <div key={`${item.id}-${item.option}`} style={{
                    display: 'flex', gap: '20px',
                    padding: '20px',
                    background: 'var(--surface-container)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {/* Image */}
                    <div style={{
                      width: '100px', height: '100px',
                      background: 'var(--surface)',
                      borderRadius: '8px',
                      padding: '8px',
                      flexShrink: 0,
                    }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 className="font-sora" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                        {item.name}
                      </h3>
                      {item.option && (
                        <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                          Variante: {item.option} {item.optionLabel ? `- ${item.optionLabel}` : ''}
                        </p>
                      )}
                      {!item.option && item.optionLabel && (
                        <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
                          Color: {item.optionLabel}
                        </p>
                      )}
                      
                      <div style={{ 
                        marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: '16px' 
                      }}>
                        {/* Quantity Controls */}
                        <div style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px',
                          background: 'rgba(255,255,255,0.05)',
                          padding: '4px 8px',
                          borderRadius: '8px'
                        }}>
                          <button 
                            onClick={() => updateQuantity(item.id, item.option, item.quantity - 1)}
                            style={{ 
                              background: 'none', border: 'none', color: 'var(--on-surface)',
                              cursor: 'pointer', display: 'flex', alignItems: 'center'
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>remove</span>
                          </button>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', width: '20px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.option, item.quantity + 1)}
                            style={{ 
                              background: 'none', border: 'none', color: 'var(--on-surface)',
                              cursor: 'pointer', display: 'flex', alignItems: 'center'
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                          </button>
                        </div>

                        {/* Price & Delete */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <span className="font-sora" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary-container)' }}>
                            {item.price * item.quantity} Bs
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id, item.option)}
                            style={{ 
                              background: 'none', border: 'none', color: 'var(--neon-red)',
                              cursor: 'pointer', display: 'flex', alignItems: 'center',
                              opacity: 0.7, transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 1}
                            onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                            title="Eliminar del carrito"
                          >
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <div style={{
                  position: 'sticky', top: '100px',
                  background: 'var(--surface-container)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '24px',
                }}>
                  <h3 className="font-sora" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>
                    Resumen del Pedido
                  </h3>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--on-surface-variant)' }}>
                    <span>Subtotal</span>
                    <span>{getCartTotal()} Bs</span>
                  </div>
                  
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '16px 0' }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <span className="font-sora" style={{ fontSize: '18px', fontWeight: 600 }}>Total</span>
                    <span className="font-sora" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary-container)' }}>
                      {getCartTotal()} Bs
                    </span>
                  </div>

                  <button 
                    onClick={handleWhatsAppCheckout}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#25D366',
                      color: '#000',
                      border: 'none',
                      borderRadius: '4px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '14px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s',
                      boxShadow: '0 0 15px rgba(37,211,102,0.2)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(37,211,102,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(37,211,102,0.2)'
                    }}
                  >
                    <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                    Comprar por WhatsApp
                  </button>
                  
                  <p style={{ marginTop: '16px', fontSize: '12px', color: 'var(--on-surface-variant)', textAlign: 'center', lineHeight: 1.5 }}>
                    Al hacer clic, se abrirá WhatsApp con el detalle de tu pedido para coordinar el pago y envío.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
