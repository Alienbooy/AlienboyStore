import { useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
import PRODUCTS from '../data/products'

export default function ProductoDetalle() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = PRODUCTS.find(p => p.id === slug)

  const [selectedQty, setSelectedQty] = useState(product ? Object.keys(product.prices)[0] : null)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <Navigate to="/catalogo" replace />
  }

  const qtys = Object.keys(product.prices)
  const currentPrice = product.prices[selectedQty]
  const originalPrice = product.originalPrices[selectedQty]
  const fullStars = Math.floor(product.rating)
  const hasHalf = product.rating % 1 !== 0

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen" style={{ paddingTop: '72px' }}>
        {/* Tech Grid Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0, 230, 57, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 57, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '48px 20px',
          position: 'relative',
        }}>
          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
          }} className="product-grid">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                background: 'var(--surface-container)',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <img
                  alt={`${product.name} ${product.images ? (product.imageLabels?.[selectedImage] || `Vista ${selectedImage + 1}`) : 'Main View'}`}
                  src={product.images ? product.images[selectedImage] : product.img}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Badges */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  display: 'flex', flexDirection: 'column', gap: '8px',
                }}>
                  {product.badges.map((badge, i) => (
                    <span key={badge} style={{
                      background: i === 0 ? 'var(--primary-container)' : 'rgba(19,19,19,0.6)',
                      backdropFilter: i === 0 ? 'none' : 'blur(12px)',
                      color: i === 0 ? 'var(--on-primary-container)' : 'var(--primary)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      border: i === 0 ? 'none' : '1px solid rgba(0,255,65,0.2)',
                    }}>{badge}</span>
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="thumb-gallery">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      className={selectedImage === i ? 'active' : ''}
                      onClick={() => setSelectedImage(i)}
                    >
                      <img src={img} alt={product.imageLabels?.[i] || `Vista ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              {/* Color Label */}
              {product.images && product.imageLabels && (
                <p style={{
                  marginTop: '8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--on-surface-variant)',
                }}>
                  Color: <span style={{ color: 'var(--primary)' }}>{product.imageLabels[selectedImage]}</span>
                </p>
              )}
            </div>

            {/* Product Details */}
            <div className="product-details" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Breadcrumb */}
              <div>
                <nav style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
                  color: 'var(--on-surface-variant)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}>
                  <Link to="/catalogo" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                  >Shop</Link>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
                  <Link to="/catalogo" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                  >{product.category}</Link>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
                  <span style={{ color: 'var(--primary)' }}>{product.brand}</span>
                </nav>

                {/* Title */}
                <h1 className="font-sora" style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: 'var(--on-surface)',
                }}>{product.name} - {product.brand}</h1>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-fixed-dim)' }}>
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    {hasHalf && (
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
                    color: 'var(--on-surface-variant)',
                  }}>({product.reviews} REVIEWS)</span>
                </div>
              </div>

              {/* Product Card */}
              <div style={{
                padding: '24px',
                background: 'var(--surface-container)',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', flexDirection: 'column', gap: '24px',
              }}>
                {/* Pricing */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                  <span className="font-sora" style={{
                    fontSize: '32px', fontWeight: 600, lineHeight: 1.3,
                    color: 'var(--primary-container)',
                  }}>Bs {currentPrice.toFixed(2)}</span>
                  <span style={{
                    color: 'var(--on-surface-variant)',
                    textDecoration: 'line-through',
                    fontSize: '16px',
                  }}>Bs {originalPrice.toFixed(2)}</span>
                </div>

                {/* Quantity Selector */}
                {qtys.length > 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <label style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
                    color: 'var(--on-surface-variant)',
                    textTransform: 'uppercase',
                  }}>Quantity Options</label>

                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${qtys.length}, 1fr)`, gap: '16px' }}>
                    {qtys.map(qty => (
                      <button
                        key={qty}
                        onClick={() => setSelectedQty(qty)}
                        style={{
                          padding: '12px',
                          borderRadius: '4px',
                          border: `1px solid ${selectedQty === qty ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                          background: selectedQty === qty ? 'rgba(0,255,65,0.1)' : 'var(--surface)',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                          if (selectedQty !== qty) {
                            e.currentTarget.style.borderColor = 'rgba(0,255,65,0.5)'
                          }
                        }}
                        onMouseLeave={e => {
                          if (selectedQty !== qty) {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        <span className="font-sora" style={{
                          fontSize: qtys.length > 2 ? '24px' : '32px', fontWeight: 600, lineHeight: 1.3,
                          color: 'var(--on-surface)',
                        }}>{qty}</span>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: qtys.length > 2 ? '10px' : '12px', letterSpacing: '0.1em', fontWeight: 500,
                          color: selectedQty === qty ? 'var(--primary-container)' : 'var(--on-surface-variant)',
                        }}>{product.quantityLabels[qty]}</span>
                      </button>
                    ))}
                  </div>
                </div>
                )}

                {/* Specs Bento */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {product.specs.map(spec => (
                    <div key={spec.label} style={{
                      padding: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '2px',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{
                        display: 'block',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500,
                        color: 'var(--on-surface-variant)',
                        textTransform: 'uppercase',
                      }}>{spec.label}</span>
                      <span style={{
                        fontFamily: 'Geist, sans-serif',
                        fontSize: '16px',
                        color: 'var(--on-surface)',
                      }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '16px' }}>
                  <button
                    className="neon-glow-primary"
                    style={{
                      width: '100%',
                      background: 'var(--primary-container)',
                      color: 'var(--on-primary-container)',
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '18px', fontWeight: 700,
                      padding: '16px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,65,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,65,0.2)'}
                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    onClick={(e) => {
                      addToCart(
                        product, 
                        1, 
                        qtys.length > 1 ? selectedQty : null,
                        product.imageLabels ? product.imageLabels[selectedImage] : null,
                        product.images ? product.images[selectedImage] : null
                      )
                      // Visual feedback
                      const btn = e.currentTarget
                      const oldText = btn.innerText
                      btn.innerText = '¡Añadido!'
                      setTimeout(() => { btn.innerText = oldText }, 1000)
                    }}
                  >
                    Añadir al Carrito
                  </button>
                  <button
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid var(--primary)',
                      color: 'var(--primary)',
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '18px', fontWeight: 700,
                      padding: '16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,65,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    onClick={() => {
                      addToCart(
                        product, 
                        1, 
                        qtys.length > 1 ? selectedQty : null,
                        product.imageLabels ? product.imageLabels[selectedImage] : null,
                        product.images ? product.images[selectedImage] : null
                      )
                      navigate('/carrito')
                    }}
                  >
                    Comprar Ahora
                  </button>
                </div>

                {/* Shipping Info */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 0 0',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  color: 'var(--on-surface-variant)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>local_shipping</span>
                  <div>
                    <p style={{ fontSize: '16px', color: 'var(--on-surface)', margin: 0 }}>Delivery a Domicilio/Departamentos con recargo.</p>
                    <p style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
                      textTransform: 'uppercase', margin: 0,
                    }}>24-48h Aproximadamente dependiendo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section style={{
            marginTop: '96px',
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '24px',
          }} className="features-grid">
            {product.features.map(feat => (
              <div
                key={feat.title}
                style={{
                  padding: '32px',
                  background: 'var(--surface-container)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,65,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <span className="material-symbols-outlined" style={{
                  color: 'var(--primary)',
                  fontSize: '36px',
                  marginBottom: '16px',
                  display: 'block',
                }}>{feat.icon}</span>
                <h3 className="font-sora" style={{
                  fontSize: '24px', fontWeight: 600, lineHeight: 1.3,
                  color: 'var(--on-surface)',
                  marginBottom: '8px',
                }}>{feat.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', margin: 0 }}>{feat.description}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--surface-container-lowest)',
        width: '100%',
        padding: '48px 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          padding: '0 20px',
          maxWidth: '1440px',
          margin: '0 auto',
        }} className="footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="font-sora" style={{
              fontSize: '32px', fontWeight: 600, lineHeight: 1.3,
              color: 'var(--primary)',
            }}>ALIENBOY</span>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
              color: 'var(--on-surface-variant)',
              textTransform: 'uppercase',
            }}>© 2024 ALIENBOY STORE. ENGINEERED FOR PERFORMANCE.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 className="font-sora" style={{
              fontSize: '18px', fontWeight: 600,
              color: 'var(--on-surface)',
              margin: 0,
            }}>Explore</h4>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
              textTransform: 'uppercase',
            }}>
              {['Skates', 'Switches', 'Mice'].map(item => (
                <li key={item}>
                  <a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 className="font-sora" style={{
              fontSize: '18px', fontWeight: 600,
              color: 'var(--on-surface)',
              margin: 0,
            }}>Support</h4>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px', letterSpacing: '0.1em', fontWeight: 500,
              textTransform: 'uppercase',
            }}>
              {['Shipping Info', 'Terms of Service', 'WhatsApp Group'].map(item => (
                <li key={item}>
                  <a href="#" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 className="font-sora" style={{
              fontSize: '18px', fontWeight: 600,
              color: 'var(--on-surface)',
              margin: 0,
            }}>Connect</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['share', 'alternate_email', 'location_on'].map(icon => (
                <button key={icon} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--on-surface-variant)',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr !important;
            padding: 0 64px !important;
          }
        }
        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: 7fr 5fr !important;
          }
        }
      `}</style>
    </>
  )
}
