import React, { useState, useEffect } from "react";
import { withCart } from '../../context/cartContext';
import { PageContainer } from './style';

const Cart = (props) => {
    const { cartContext } = props;
    const {state} = cartContext;

    const [products, setProducts] = useState([]);

  useEffect(async () => {
    const productsInCart = state.productsIds || [];
    const productsResponse = await Promise.all(
      productsInCart.map((productId) =>
        fetch(`https://fakestoreapi.com/products/${productId}`)
      )
    );
    const products = await Promise.all(
      productsResponse.map((res) => res.json())
    );

    setProducts(products);
  }, []);


    return <PageContainer>Cart Page</PageContainer>;
};

export default withCart(Cart);
