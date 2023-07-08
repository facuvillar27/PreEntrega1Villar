import { useContext, useEffect, useState } from "react"
import './index.css'
import { Link, useLocation } from "react-router-dom"
import { getProducts } from "../../../services/firebase/productos"
import CostumizedSpinner from "../../common/spinner";
import { CartCounterContext } from "../../../context/cartCounter";

const ItemListConteiner = ({id, title, description, price, stock, upgradeStock}) => {

    const [products, setProducts] = useState([])
    const currentLocation = useLocation()
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const { cart } = useContext(CartCounterContext);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return (
            <div className="spinnerMain">
                <CostumizedSpinner/>
            </div>
        )
    }  

    let filteredProducts = products

    if (currentLocation.pathname === "/herramientas") {
        filteredProducts = products.filter((product) => product.category === "Herramientas");
    }
    else if (currentLocation.pathname === "/pinturas") {
        filteredProducts = products.filter((product) => product.category === "Pinturas");
    }
    else if (currentLocation.pathname === "/materiales") {
        filteredProducts = products.filter((product) => product.category === "Materiales");
    }

    const getProductStock = (product) => {
        const cartProduct = cart.find(p => p.id === product.id);
        if (cartProduct) {
          return cartProduct.upgradeStock;
        } else {
          return product.stock;
        }
      };


    return (
        <>
            <div className="mainFiltered">
                {filteredProducts.map((product) => (
                    <div className="box" key={product.id}>
                        <div className="imgen">
                            <img src={ product.url } alt="" />
                        </div>
                        <h2 className="productTitle">
                            {product.title}
                        </h2>
                        <h3>
                            $ {product.price}
                        </h3>
                        <p>
                            Quedan {getProductStock(product)} unidades
                        </p>
                        <Link to={`/item/${product.id}`}>
                            <button className="info">
                                Ver detalle
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export { ItemListConteiner };