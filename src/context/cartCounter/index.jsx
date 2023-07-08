import { createContext, useEffect, useState } from "react";

const CartCounterContext = createContext()

const CartCounterProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        console.log(cart);
      }, [cart]);
    
    const addProductToCart = (product, quantity) => {
        const subtotal = product.price * quantity;
        setCartCount(prevCount => prevCount + quantity);
        
        const existingProductIndex = cart.findIndex(p => p.id === product.id);
        if (existingProductIndex !== -1) {
            setCart(prevCart => {
            const updatedCart = [...prevCart];
            const existingProduct = updatedCart[existingProductIndex];
            const newStock = existingProduct.upgradeStock - quantity
            updatedCart[existingProductIndex] = {
                ...existingProduct,
                quantity: existingProduct.quantity + quantity,
                subtotal: existingProduct.subtotal + subtotal,
                upgradeStock: newStock
              };
            return updatedCart;
            });
        } else {
            const updatedProduct = {
                ...product,
                quantity,
                subtotal,
                upgradeStock: product.stock - quantity
            };
            setCart(prevCart => [...prevCart, updatedProduct]);
        };
    }

    const removeProductFromCart = (item) => {
        const { id, quantity } = item;
        const updatedCart = cart.filter((p) => p.id !== id);
        setCart(updatedCart);
        setCartCount(prevCount => prevCount - quantity);
    };

    const clearCart = () => {
        setCart([]);
        setCartCount(0);
    }

    return (
        <CartCounterContext.Provider value={{ cart, cartCount, addProductToCart, removeProductFromCart, clearCart }}>
            {children}
        </CartCounterContext.Provider>
    )
}

export { CartCounterContext, CartCounterProvider }