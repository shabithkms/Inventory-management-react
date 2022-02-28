import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './AddProduct.css';

function AddProductForm() {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [formValues, setFormValues] = useState([
    {
      pCode: '',
      pName: '',
      quantity: 0,
    },
  ]);
  const getAddForm = () => {
    let joined = formValues.concat(proObj);
    setFormValues(joined);
    console.log(formValues);
  };
  let proObj = {
    pCode: '',
    pName: '',
    quantity: 0,
  };

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index][e.target.name] = e.target.value;
    setFormValues(values);
  };

  // Function for add product
  const addProduct = (e) => {
    try {
      e.preventDefault();
      console.log(products, 'pro');
      if (products?.length > 0) {
        let joined = products.concat(formValues);
        localStorage.setItem('products', JSON.stringify(joined));
        setFormValues([proObj]);
        toast.success('Product added');
      } else {
        localStorage.setItem('products', JSON.stringify(formValues));
        setFormValues([proObj]);
        toast.success('Product added');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, [formValues]);
  return (
    <div className='container main-div'>
      <div className='shadow form-container '>
        <h1 className='text-center'>Add product</h1>
        <div className='add-form'>
          <button onClick={getAddForm} className='btn mt-2 btn-danger'>
            Add field
          </button>

          <form onSubmit={addProduct}>
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
                          type='text'
                          name='pName'
                          placeholder='product name'
                          className='form-control'
                          value={value.pName}
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
            <button className='btn btn-primary add-product-btn'>Add product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
