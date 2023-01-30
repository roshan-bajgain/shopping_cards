import React, {useEffect} from 'react'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setproduct } from '../redux/actions/productActions';

const ProductListing = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchproducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err",err);
    });
    dispatch(setproduct(response.data));
  }

  useEffect(() => {
    fetchproducts()
  },[]);
  return (
    <div className="ui grid container">
        <ProductComponent />
    </div>
  )
}

export default ProductListing