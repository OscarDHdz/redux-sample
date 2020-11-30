import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR
} from '../types';

// Create new products
export const createNewProductAction = (product) => {
  return () => {
    console.log('From action:', product);
  }
}