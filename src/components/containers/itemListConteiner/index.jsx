import { useEffect, useState } from "react"
import './index.css'
import { Link, useLocation } from "react-router-dom"
import { getProducts } from "../../../services/firebase/productos"
import CostumizedSpinner from "../../common/spinner";

const ItemListConteiner = ({id, title, description, price, stock}) => {

    const [products, setProducts] = useState([])
    const currentLocation = useLocation()
    const [isLoading, setIsLoading] = useState(true);

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
                            Quedan {product.stock} unidades
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