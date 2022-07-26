import React from 'react';
import { createContext } from "./createContext";

const cart = {
  productsIds: [],
  category: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const productIds = [...state.productsIds, parseInt(action.payload, 10)];
      return { ...state, productsIds: productIds };

    case "removeFromCart":
      const updatedProductIds = state.productsIds.filter(
        (item) => item !== parseInt(action.payload, 10)
      );

    case "updateCategory":
      return {
        ...state,
        category: action.payload,
      };

    default:
      return { ...state };
  }
};

const addToCart = (dispatch) => (productId) => dispatch({ type: "addToCart", payload: productId });
const removeFromCart = (dispatch) => (productId) =>
  dispatch({ type: "removeFromCart", payload: productId });

const updateCategory = (dispatch) => (categoryName) =>
  dispatch({ type: "updateCategory", payload: categoryName });

export const { Context, Provider } = createContext(
  reducer,
  { addToCart, removeFromCart, updateCategory },
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
