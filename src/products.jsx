import { useEffect } from "react";
import Product from "../components/products-page-components/products";
import { rentHouses } from "../constants/data";
import { useParams } from "react-router";
const Products = () => {
  const params = useParams();
  const product = rentHouses[params.id - 1];
  useEffect(() => {
    document.title = `House in ${product.name} - GIS LIMITED `;
  }, [params]);
  return (
    <Product
      id={product.id}
      title={product.name}
      descr={product.description}
      moreImages={product.moreImages}
      mainImage={product.mainImage}
      price={product.price}
      details={product.details}
    />
  );
};

export default Products;
