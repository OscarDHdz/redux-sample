import React from 'react';

const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">

            <h2>Add New Product</h2>

            <form>

              <div className="form-group">

                <label>Product Name</label>
                <input
                  type="test"
                  className="form-control"
                  placeholder="Product Name"
                />

              </div>

              <div className="form-group">

                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="$00.00"
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

export default EditProduct;