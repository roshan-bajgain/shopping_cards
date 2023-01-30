import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const product = useSelector((state) => state.allproducts.product);
  const{ id,title } = product[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent;