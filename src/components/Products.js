import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProductsAction } from '../actions/productsActions';

const Products = () => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    const loadProducts = () => dispatch(fetchProductsAction());
    loadProducts();
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>

      <table className="table table-striped">

        <thead className="bt-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td></td>
              </tr>
            ))
          }
        </tbody>

      </table>

      {
        error ?
        <p className="alert alert-danger">
          Error...
        </p>
        : null
      }
      {
        loading ?
        <p className="alert alert-primary">
          Loading...
        </p>
        : null
      }
    </Fragment>
  )
}

export default Products;