import { useEffect, useState } from "react"
import { getItems } from "../Data"
import './index.css'
import { Link } from "react-router-dom"

const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        getItems().then((products) => {
            setProducts(products)
        })

    }, [])

    return (
        <>
            {products.map((product) => (
                <div className="box" key={product.id}>
                    <div className="imgen">
                        <img src="https://sodimac.scene7.com/is/image/SodimacUruguay/1009249" alt="" />
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
        </>
    )

}

export { ItemList };