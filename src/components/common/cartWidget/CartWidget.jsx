// import { useContext } from "react"
import { useContext } from "react"
import Carrito from "../../../Carrito.svg"
import { CartCounterContext } from "../../../context/cartCounter"
import { Link } from "react-router-dom"

function CartWidget() {

    const { cartCount } = useContext(CartCounterContext)

    return (
        
        <div>
            <div className="carritoCounter">
                <Link to="/cart">
                    <img src={Carrito} id="CarritoImagen" alt="Carrito" />
                </Link>
                <h2>{cartCount}</h2>
            </div>
        </div>
    )
}

export {CartWidget}