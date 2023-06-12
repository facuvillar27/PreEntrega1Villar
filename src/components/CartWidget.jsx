import Carrito from "../Carrito.svg"

function CartWidget() {
    return (
        
    <div>
        <div className="carritoCounter">
            <img src={Carrito} id="CarritoImagen" alt="Carrito" />
            5
        </div>
    </div>
    )
}

export default CartWidget