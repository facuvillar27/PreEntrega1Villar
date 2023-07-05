import { useContext, useEffect } from "react"
import { CartCounterContext } from "../../../context/cartCounter"

const CartListContainer = () => {
    
    const { cart } = useContext(CartCounterContext);

    useEffect(() => {
        console.log('El carrito ha cambiado:', cart);
      }, [cart]);

    return (
        <div>
            <h2>Carrito de compras:</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                    <p>{item.title}</p>
                    <p>Precio: {item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
  );
}

export { CartListContainer }