import { serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react"
import { defaultValue } from './defaultValue'
import { createOrder } from "../../services/firebase/createOrder";
import { CartCounterContext } from "../../context/cartCounter";
import './index.css';

const Form = () => {
    const [fields, setFields] = useState(defaultValue);
    const { cart, clearCart } = useContext (CartCounterContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        if (fieldName === "name") {
          setName(fieldValue);
        } else if (fieldName === "email") {
          setEmail(fieldValue);
        } else if (fieldName === "phone") {
          setPhone(fieldValue);
        }
    
        validateForm();
      };
    
      const validateForm = () => {
        if (name !== "" && email !== "" && phone !== "") {
          setIsFormValid(true);
        } else {
          setIsFormValid(false);
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const products = cart.map((item) => ({...item}));

        const total = cart.reduce((accumulator, item) => {
            return accumulator + item.quantity * item.price;
          }, 0);

        createOrder( {
            name: name,
            email: email,
            phone: phone,
            Date: serverTimestamp(),
            Total: total,
            products} );
        setFields(defaultValue);
        clearCart();
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Completa los campos para finalizar la compra</h1>
            </div>
            <div className="formInput">
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Telefono:</label>
                    <input 
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className="finalizarCompraButton" type="submit" disabled={!isFormValid} >Finalizar compra</button>
        </form>
    )
};

export { Form };