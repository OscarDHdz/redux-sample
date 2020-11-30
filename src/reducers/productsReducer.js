import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR,
  PRODUCTS_FETCH, PRODUCTS_FETCH_SUCCESS, PRODUCTS_FETCH_ERROR,
  PRODUCTS_DELETE, PRODUCTS_DELETE_SUCCESS, PRODUCTS_DELETE_ERROR
} from '../types';


// each reducer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deletedProduct: null
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: [...state.products, action.payload]
      }
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PRODUCTS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          products: action.payload
        }
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PRODUCTS_DELETE:
      return {
        ...state,
        loading: true,
        deletedProduct: null
      }
    case PRODUCTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        deletedProduct: action.payload,
        products: state.products.filter(product => product.id !== action.payload.id)
      }
    case PRODUCTS_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default productsReducer;
