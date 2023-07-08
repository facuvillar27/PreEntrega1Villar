import { useEffect, useState, useContext } from "react";
import './index.css'
import { ItemCount } from "../../itemCount";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/firebase/producto";
import { CartCounterContext } from "../../../context/cartCounter";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart } = useContext(CartCounterContext);


  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data)
    })
  }, [id])

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  const getProductStock = () => {
    const cartProduct = cart.find(p => p.id === product.id);
    if (cartProduct) {
      return cartProduct.upgradeStock;
    } else {
      return product.stock;
    }
  };

  return (
    <>
      <div className="itemDetail">
        <div className="box-item" key={product.id}>
          <div className="imgen">
            <img src={product.url} alt="" />
          </div>
          <h2 className="productTitle">
            {product.title}
          </h2>
          <h3>
            $ {product.price}
          </h3>
          <p>
            Quedan {getProductStock()} unidades
          </p>
          <p>
            {product.description}
          </p>
          <div className="button-container">
            {product.stock > 0 && (
              <ItemCount
                stock={product.stock}
                initial={1}
                title={product.title}
                price={product.price}
                category={product.category}
                id={product.id}
                url={product.url}
                upgradeStock={getProductStock()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export { Item }