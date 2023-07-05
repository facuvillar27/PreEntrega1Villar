import { useEffect, useState } from "react";
import './index.css'
import { ItemCount } from "../../itemCount";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/firebase/producto";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  useEffect(() => {
    getProduct(id).then((data) => {
        setProduct(data)
        setProductSelected(data.id);
    })
}, [id])


  if (!product) {
    return <div>Loading...</div>;
  }  


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
            Quedan {product.stock} unidades
          </p>
          <p>
            {product.description}
          </p>
          <div className="button-container">
            <ItemCount 
              stock={product.stock}
              initial={1}
              title={product.title}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { Item }