import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux Actions
import { createNewProductAction } from '../actions/productsActions';

import useField from '../customHooks/useField';


const NewProduct = ({history}) => {
  // Hooks
  const [nameProps] = useField('');
  const [priceProps] = useField('');

  // Redux
  const dispatch = useDispatch();
  const addNewProduct = product => dispatch(createNewProductAction(product));

  // Access state
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const submitNewProductHandler = async e => {
    e.preventDefault();

    // Validate Formm
    if (nameProps.value.trim() === '' || priceProps.value === '') {
      return;
    }

    // Check any other errors

    // Create new product
    await addNewProduct({
      name: nameProps.value, price: +priceProps.value
    });

    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">

            <h2>Add New Product</h2>

            <form
              onSubmit={submitNewProductHandler}
            >

              <div className="form-group">

                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  {...nameProps}
                />

              </div>

              <div className="form-group">

                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="$00.00"
                  {...priceProps}
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary front-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>

            </form>

            {
              loading ? 
              <p>
                Loading...
              </p>
              : null
            }
            {
              error ? 
              <p className="alert alert-danger p2 mt-2">
                Error!
              </p>
              : null
            }

          </div>

        </div>

      </div>
    </div>
  )
}

export default NewProduct;
