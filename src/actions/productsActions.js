import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR,
  PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_ERROR,
  PRODUCTS_DELETE, PRODUCTS_DELETE_SUCCESS, PRODUCTS_DELETE_ERROR,
  PRODUCTS_SET_EDIT, PRODUCTS_EDIT, PRODUCTS_EDIT_SUCCESS, PRODUCTS_EDIT_ERROR
} from '../types';
import axiosClient from '../config/axiosClient';

// Products Fetch ---------------------------------------------------
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


// Create new products ---------------------------------------------------
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

// Delete product ----------------------------------------------------------
export const deleteProductAction = product => {

  return async (dispatch) => {
    dispatch(deleteProduct(product))
    try {
      await axiosClient.delete(`/products/${product.id}`);
      dispatch(deleteProductSuccess(product));
    } catch (err) {
      dispatch(deleteProductError(true));
    }
  }

}

const deleteProduct = payload => ({
  type: PRODUCTS_DELETE,
  payload
})
const deleteProductSuccess = payload => ({
  type: PRODUCTS_DELETE_SUCCESS,
  payload
})
const deleteProductError = payload => ({
  type: PRODUCTS_DELETE_ERROR,
  payload
})

// Edit product -----------------------------------------------
export const setProductToEditAction = (productData) => {
  return async dispatch => {
    dispatch(setProductToEdit(productData));
  }
}

export const editProductAction = (id, productData) => {
  return async dispatch => {
    dispatch(editProduct());
    try {
      const response = await axiosClient.put(`/products/${id}`, productData);
      dispatch(editProductSuccess(response.data));
    } catch (err) {
      dispatch(editProductError(true));
    }
  }
}

const setProductToEdit = payload => ({
  type: PRODUCTS_SET_EDIT,
  payload
})
const editProduct = payload => ({
  type: PRODUCTS_EDIT,
  payload
})
const editProductSuccess = payload => ({
  type: PRODUCTS_EDIT_SUCCESS,
  payload
})
const editProductError = payload => ({
  type: PRODUCTS_EDIT_ERROR,
  payload
})
