import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const qtys = Object.keys(product.prices)
  const [selectedQty, setSelectedQty] = useState(qtys[0])

  return (
    <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`${product.glowClass}`} style={{
        background: 'var(--surface-container-low)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        position: 'relative',
        cursor: 'pointer',
        height: '100%',
      }}>
        {/* Badge */}
        <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 10 }}>
          <span className="font-mono" style={{
            fontSize: '10px', textTransform: 'uppercase',
            background: 'var(--background)',
            border: `1px solid ${product.tagColor}`,
            color: product.tagColor,
            padding: '3px 8px', borderRadius: '2px',
            letterSpacing: '0.05em',
          }}>{product.tag}</span>
        </div>

        {/* Image */}
        <div style={{
          height: '240px', background: 'var(--background)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px', overflow: 'hidden', position: 'relative',
        }}>
          <img src={product.img} alt={product.name} style={{
            width: '100%', height: '100%', objectFit: 'contain',
            transition: 'transform 0.5s',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
          }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Info */}
        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="font-sora" style={{
            fontSize: '18px', fontWeight: 700,
            color: 'var(--on-surface)', marginBottom: '6px',
          }}>{product.name}</h3>
          <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', marginBottom: '16px', lineHeight: 1.5 }}>
            {product.desc}
          </p>

          {/* Qty Toggle */}
          <div className="qty-toggle" style={{ marginBottom: '16px' }}
            onClick={e => e.preventDefault()}
          >
            {qtys.map(qty => (
              <label key={qty} style={{
                cursor: 'pointer', padding: '4px 12px', borderRadius: '9999px',
                fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: selectedQty === qty ? '#131313' : 'var(--on-surface-variant)',
                background: selectedQty === qty ? 'var(--primary-container)' : 'transparent',
                boxShadow: selectedQty === qty ? '0 0 10px rgba(0,255,65,0.3)' : 'none',
                transition: 'all 0.3s',
              }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedQty(qty) }}>{qty}</label>
            ))}
          </div>

          {/* Price & Cart */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <span className="font-sora" style={{
              fontSize: '18px', fontWeight: 700,
              color: product.priceColor,
            }}>Bs {product.prices[selectedQty].toFixed(2)}</span>
            <button style={{
              background: `${product.tagColor}18`,
              border: `1px solid ${product.tagColor}`,
              color: product.tagColor,
              padding: '8px', borderRadius: '4px',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              transition: 'all 0.3s',
            }}
              onClick={e => { e.preventDefault(); e.stopPropagation() }}
              onMouseEnter={e => {
                e.currentTarget.style.background = product.tagColor
                e.currentTarget.style.color = '#131313'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${product.tagColor}18`
                e.currentTarget.style.color = product.tagColor
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
