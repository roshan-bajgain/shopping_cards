import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const product = useSelector((state) => state.allproducts.product);
  const renderlist = product.map((product) =>{
    const {id,title,image,price,category} = product;
    return(
      <div className="main_container" key={id}>
            <div className="image">
              <img src={image} alt="Title" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="price">$ {price}</div>
              <div className="category">{category}</div>
             </div>
      </div>
    )
  });
  return(
    <>{renderlist}</>
  )
}

export default ProductComponent;