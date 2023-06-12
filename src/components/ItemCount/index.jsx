import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Home } from '../../pages/home';

function ItemCount ({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
    const [newStock, setNewStock] = useState(stock);

    const sumar = () => {
        if (count < newStock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        setNewStock(prevStock => prevStock - count);
        if (onAdd) {
            onAdd(count);
        }
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

export default ItemCount;