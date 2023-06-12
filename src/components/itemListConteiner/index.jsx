import { useEffect, useState } from "react"
import { getItems } from "../Data"
import './index.css'
import { Link, useLocation } from "react-router-dom"

const ItemListConteiner = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const currentLocation = useLocation()

    useEffect(() => {
        const fetchData = () => {
            getItems()
                .then((fetchedProducts) => {
                    setProducts(fetchedProducts);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching products:", error);
                });
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    let filteredProducts = products;

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
                            <img src={ product.pictureUrl } alt="" />
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