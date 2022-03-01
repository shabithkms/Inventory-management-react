import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function RemoveProductForm() {
  const [products, setProducts] = useState([]);
  const [formValues, setFormValues] = useState([
    {
      pCode: '',
      quantity: 0,
    },
  ]);

  // A basic object of a product
  let proObj = {
    pCode: '',
    quantity: 0,
  };

  // Function for handle form data
  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index][e.target.name] = e.target.value;
    setFormValues(values);
  };

  // Function for remove product
  const removeProduct = (e) => {
    let codes = [];
    codes.push(formValues[0].pCode);
    try {
      e.preventDefault();
      products.filter((item, index) => {
        if (item.pCode === codes[0]) {
          if (item.quantity <= formValues[0].quantity) {
            products.splice(index, 1);
            setFormValues([proObj]);
            toast.success('Product removed');
          } else {
            item.quantity = item.quantity - formValues[0].quantity;
            toast.success('Stock reduced');
            setFormValues([proObj]);
          }
        }
      });
      localStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Get products from local storage
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, [formValues]);

  return (
    <div className='container main-div'>
      <div className='shadow form-container '>
        <h1 className='text-center'>Remove product</h1>
        <div className='add-form'>
          <form onSubmit={removeProduct}>
            <table>
              <thead></thead>
              <tbody>
                {formValues.map((value, index) => {
                  return (
                    <tr key={index}>
                      <div className='form-row '>
                        <input
                          type='number'
                          placeholder='Product code'
                          name='pCode'
                          className='form-control'
                          value={value.pCode}
                          onChange={(e) => handleChange(e, index)}
                        />
                        <input
                          type='number'
                          name='quantity'
                          placeholder='Quantity'
                          className='form-control'
                          value={value.quantity}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className='btn btn-primary add-product-btn'>Remove product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RemoveProductForm;
