import React, { useEffect, useState } from "react";
import axios from 'axios';

type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string; 
};

const emptyProducts: Product[] = [];


 function Products() {

  const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProducts);




  useEffect(() => {
    axios.get<Product[]>("http://localhost:7250/catalog", 
      {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => setProducts(response.data))
    .catch((error) => console.error(error));
  }, []);


    return (
    <div className ="content">
        <ul className="products">
        {products.map((product) => (
    <li className="product" key={product.name}>
      <img
        className="product-image"
        src={product.imageUrl}
        alt="product"
      />
      <div className="product-name">
        <a href="product.html">{product.name}</a>
      </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-rating">
        {product.rating} Stars ({product.numberOfReviews} Reviews)
      </div>
    </li>
  ))}
  
      </ul>
  </div>
    );
  }
export default Products;
