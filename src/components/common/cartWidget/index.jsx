// import { useContext } from "react"
import { useContext } from "react"
import Carrito from "../../../Carrito.svg"
import { CartCounterContext } from "../../../context/cartCounter"
import { Link } from "react-router-dom"
import './index.css'

function CartWidget() {

    const { cartCount } = useContext(CartCounterContext)

    return (
        
        <div>
            <div className="carritoCounter">
                <Link to="/cart">
                    <img src={Carrito} id="CarritoImagen" alt="Carrito" />
                </Link>
                <div>{cartCount}</div>
            </div>
        </div>
    )
}

export {CartWidget}