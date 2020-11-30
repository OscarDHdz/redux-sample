import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deleteProductAction, setProductToEditAction, fetchProductsAction } from '../actions/productsActions';

const Products = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    const loadProducts = () => dispatch(fetchProductsAction());
    loadProducts();
  }, []);

  const deleteProductHandler = (product) => {
    const deleteProduct = (product) => dispatch(deleteProductAction(product));
    deleteProduct(product);
  }

  const redirectToEditPage = (product) => {
    const setProductToEdit = (product) => dispatch(setProductToEditAction(product));
    setProductToEdit(product);
    history.push(`/products/edit/${product.id}`);
  }

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
                <td>
                  <button onClick={() => redirectToEditPage(product)} className="btn btn-primary mr-2">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger" onClick={() => deleteProductHandler(product)}>
                    Delete
                  </button>

                </td>
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