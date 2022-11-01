import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';


const ProductList = () => {
  return (
    <div><section className="main-container">
    <div className="ProductList">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  </section>
</div>
  )
}

export default ProductList