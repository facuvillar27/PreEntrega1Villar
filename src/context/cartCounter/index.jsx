import { createContext, useState } from "react";

const CartCounterContext = createContext()

const CartCounterProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addProductToCart = (product, quantity) => {
        const subtotal = product.price*quantity;
        setCartCount(prevCount => prevCount + quantity);

        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
            const updatedCart = cart.map(p => {
                if (p.id === product.id) {
                    return { ...p, quantity: p.quantity + quantity, subtotal: p.subtotal + subtotal };
                } else {
                    return p;
                }
            });
            
            setCart(updatedCart);
            return console.log("El producto ya se agregó al carrito");
        }

        setCart([...cart, { ...product, quantity, subtotal }]);
    };

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