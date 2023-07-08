import React, { useContext, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Home } from '../../pages/home';
import { CartCounterContext } from '../../context/cartCounter';

function ItemCount ({ stock, initial, title, price, category, id, url, upgradeStock}) {
    const { addProductToCart } = useContext(CartCounterContext);
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < upgradeStock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        addProductToCart({title, price, category, id, url, stock, upgradeStock}, count)
        setCount(1);
    };

    return (
        <div className='counter'>
            <div className='counterNumbers'>
                <button onClick={restar}>-</button>
                <span>{ count }</span>
                <button onClick={sumar}>+</button>
            </div>
            <div className='agregarAlCarrito'>
                <button onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
            <button className="volverATienda" onClick={Home}>
                <Link to="/" className='linkVolverATienda'>
                  Volver a la tienda
                </Link>
            </button>
        </div>
    )

}

export {ItemCount};