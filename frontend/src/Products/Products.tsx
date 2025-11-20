import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;

 const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProducts);

  useEffect(() => {
    axios.get<Product[]>("https://localhost;7250/catalog",
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
    }, []);

    const emptyProducts: Product[] = [];

      }




 function Products() {
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
