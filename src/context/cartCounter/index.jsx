import { createContext, useState } from "react";

const CartCounterContext = createContext()

const CartCounterProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)



    const addProductToCart = (product, quantity) => {
        if(cart.find(p => p.id === product.id)) {
            return console.log("El producto ya se agrego al carrito")
        }
        
        setCart([...cart, product])
        setCartCount(prevCount => prevCount + quantity)
    }

    console.log(cartCount)

    return (
        <CartCounterContext.Provider value={{ cart, cartCount, addProductToCart}}>
            {children}
        </CartCounterContext.Provider>
    )
}

export { CartCounterContext, CartCounterProvider }