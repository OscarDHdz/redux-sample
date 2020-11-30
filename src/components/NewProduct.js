import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Redux Actions
import { createNewProductAction } from '../actions/productsActions';


const NewProduct = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');


  const dispatch = useDispatch();
  const addNewProduct = product => dispatch(createNewProductAction(product));

  const submitNewProductHandler = e => {
    e.preventDefault();

    // Validate Formm
    if (name.trim() === '' || price === '') {
      return;
    }

    // Check any other errors

    // Create new product
    addNewProduct({
      name, price
    });
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
                  type="test"
                  className="form-control"
                  placeholder="Product Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

              </div>

              <div className="form-group">

                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="$00.00"
                  value={price}
                  onChange={e => setPrice(+e.target.value)}
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary front-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default NewProduct;
