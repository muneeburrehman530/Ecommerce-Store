import React from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = data.find((prod) => prod.name === category.name);
  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
};

export default ProductDetail;
