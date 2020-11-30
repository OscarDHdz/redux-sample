import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR
} from '../types';
import axiosClient from '../config/axiosClient';

// Create new products
export const createNewProductAction = (product) => {
  return async (dispatch) => {

    dispatch(addProduct());

    try {
      await axiosClient.post('/products', product)
      dispatch(addProductSucces(product))
    } catch (err) {
      dispatch(addProductError(true))
    }
    
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
})

const addProductSucces = payload => ({
  type: ADD_PRODUCT_SUCCESS,
  payload
})

const addProductError = payload => ({
  type: ADD_PRODUCT_ERROR,
  payload
})