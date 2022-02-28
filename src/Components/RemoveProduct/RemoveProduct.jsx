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

  // Creating form field
  const getAddForm = () => {
    let joined = formValues.concat(proObj);
    setFormValues(joined);
  };

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
    try {
      e.preventDefault();
      console.log(formValues);
      for (let key in formValues) {
        console.log('hi');
        codes.push(formValues[key].pCode);
        console.log(codes);
      }
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
          <button onClick={getAddForm} className='btn mt-2 btn-danger'>
            Add field
          </button>

          <form onSubmit={removeProduct}>
            <table>
              <thead></thead>
              <tbody>
                {formValues.map((value, index) => {
                  return (
                    <tr key={value}>
                      <div className='form-row '>
                        <input
                          type='text'
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
