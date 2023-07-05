import { useContext, useEffect, useState } from "react"
import { CartCounterContext } from "../../../context/cartCounter"
import { Form } from "../../form";
import { Navigate, useNavigate } from 'react-router-dom'
import './index.css'

const CartListContainer = () => {

    const { cart, removeProductFromCart } = useContext(CartCounterContext);
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const sum = cart.reduce((accumulator, item) => {
            return accumulator + item.quantity * item.price;
        }, 0);

        setTotal(sum);
    }, [cart]);

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, [cart]);

    return (
        <>
            <div className="cartList">
                <h2>Carrito</h2>

                <table className="cartTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Título</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.url} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>${item.quantity * item.price}</td>
                                <td><button onClick={() => removeProductFromCart(item)}>X</button></td>
                            </tr>
                        ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total a pagar </td>
                                <td>{total}</td>
                                <td></td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <Form />
        </>
    );
}

export { CartListContainer }