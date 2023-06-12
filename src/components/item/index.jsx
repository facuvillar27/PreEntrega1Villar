import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getItemById } from "../Data";
import './index.css'
import ItemCount from "../ItemCount";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getItemById(id);
      setProduct(product);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="itemDetail">
        <div className="box-item" key={product.id}>
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
          <p>
            {product.description}
          </p>
          <div className="button-container">
            <ItemCount stock={product.stock} initial={1}/>
          </div>
        </div>
      </div>
    </>
  )
}

export { Item }