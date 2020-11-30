import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { editProductAction } from '../actions/productsActions';

const EditProduct = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState(-1);

  const product = useSelector(state => state.products.productToEdit);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setId(product.id);
  }, [product]);



  if (!product) {
    return history.push('/');
  }

  const submitProductHandler = async e => {
    e.preventDefault();
    const editProduct = (id, newData) => dispatch(editProductAction(id, newData));
    editProduct(id, {name, price});
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">

            <h2>Edit Product</h2>

            <form onSubmit={submitProductHandler}>

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
                  onChange={e => setPrice(e.target.value)}
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary front-weight-bold text-uppercase d-block w-100"
              >
                Update Product
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default EditProduct;