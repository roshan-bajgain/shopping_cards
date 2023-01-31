import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const product = useSelector((state) => state.allproducts.product);
  const renderlist = product.map((product) =>{
    const {id,title,image,price,category} = product;
    return(
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt="Title" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="price">$ {price}</div>
              <div className="category">{category}</div>
            </div>
          </div>
        </div>
      </div>
    )
  });
  return(
    <>{renderlist}</>
  )
}

export default ProductComponent;