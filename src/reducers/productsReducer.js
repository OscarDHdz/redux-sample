import {
  ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR
} from '../types';


// each reducer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false
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
    default:
      return state;
  }
}

export default productsReducer;
