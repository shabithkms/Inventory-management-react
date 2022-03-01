import React, { useEffect, useState } from 'react';
import './ListProduct.css';

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [noProducts, setNoProducts] = useState(false);

  let available_stocks = [];
  if (products?.length > 0) {
    available_stocks = products.filter((product) => {
      return product.quantity > 0;
    });
  }
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, []);

  return (
    <div className='container '>
      <div>
        {noProducts ? (
          <div>
            <h2>No products</h2>
          </div>
        ) : (
          <>
            <h1 className='text-center mt-3'>All available stocks</h1>
            <table className='list-table table table-hover table-bordered table-striped '>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product code</th>
                  <th>Product Name</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {available_stocks.map((product, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{product.pCode}</td>
                      <td>{product.pName}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default ListProduct;
