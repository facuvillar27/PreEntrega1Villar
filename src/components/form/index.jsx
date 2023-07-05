import { serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react"
import { defaultValue } from './defaultValue'
import { createOrder } from "../../services/firebase/createOrder";
import { CartCounterContext } from "../../context/cartCounter";

const Form = () => {
    const [fields, setFields] = useState(defaultValue);
    const { cart, clearCart } = useContext (CartCounterContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const products = cart.map((item) => ({...item}));

        const total = cart.reduce((accumulator, item) => {
            return accumulator + item.quantity * item.price;
          }, 0);

        createOrder( {
            ...fields,
            Date: serverTimestamp(),
            Total: total,
            products} );
        setFields(defaultValue);
        clearCart();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre</label>
                <input 
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={(e) =>
                        setFields((state) => ({ ...state, name: e.target.value }))
                    }
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={(e) =>
                        setFields((state) => ({ ...state, email: e.target.value }))
                    }
                />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input 
                    type="text"
                    name="phone"
                    value={fields.phone}
                    onChange={(e) =>
                        setFields((state) => ({ ...state, phone: e.target.value }))
                    }
                />
            </div>
            <button type="submit">Finalizar compra</button>
        </form>
    )
};

export { Form };