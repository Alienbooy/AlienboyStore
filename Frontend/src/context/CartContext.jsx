import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('alienboy_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('alienboy_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1, option = null, optionLabel = null, image = null) => {
    setCart(prevCart => {
      // Check if product with same id and option already exists
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.option === option
      )

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const newCart = [...prevCart]
        newCart[existingItemIndex].quantity += quantity
        return newCart
      } else {
        // Determine price based on option or default
        let price = 0
        if (option && product.prices[option]) {
          price = product.prices[option]
        } else if (Object.keys(product.prices).length > 0) {
          price = Object.values(product.prices)[0]
        }

        // Add new item
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: price,
          option: option,
          optionLabel: optionLabel,
          quantity: quantity,
          image: image || product.img,
        }]
      }
    })
  }

  const removeFromCart = (id, option) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.option === option)))
  }

  const updateQuantity = (id, option, newQuantity) => {
    if (newQuantity < 1) return
    
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id && item.option === option) {
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}
