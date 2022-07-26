import React from 'react';
import { createContext } from "./createContext";

const cart = {
  productsIds: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const productIds = [...state.productsIds, parseInt(action.payload, 10)]
      return { ...state, productsIds: productIds };

    case "removeFromCart":
      const updatedProductIds = state.productsIds.filter(
          (item) => item !== parseInt(action.payload, 10)
        )
      return {
        ...state,
        productsIds: updatedProductIds,
      };

    default:
      return { ...state };
  }
};

const addToCart = (dispatch) => (productId) => dispatch({ type: "addToCart", payload: productId });
const removeFromCart = (dispatch) => (productId) =>
  dispatch({ type: "removeFromCart", payload: productId });

export const { Context, Provider } = createContext(
  reducer,
  { addToCart, removeFromCart },
  cart
);

export function withCart(Component) {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} cartContext={context} />}
      </Context.Consumer>
    );
  };
}
