import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR,
  PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_ERROR
} from '../types';
import axiosClient from '../config/axiosClient';

// Products Fetch
export const fetchProductsAction = () => {
  return async (dispatch) => {
    dispatch(fetchProducts());
    try {
      const response = await axiosClient.get('/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (err) {
      dispatch(fetchProductsError(true));
    }
  }
}

const fetchProducts = () => ({
  type: PRODUCTS_FETCH
});
const fetchProductsSuccess = (payload) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  payload
});
const fetchProductsError = (payload) => ({
  type: PRODUCTS_FETCH_ERROR,
  payload
});


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

