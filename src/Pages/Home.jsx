import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddProductForm from '../Components/AddProduct/AddProduct';
import ListProduct from '../Components/ListProduct/ListProduct';
import NavBar from '../Components/NavBar/NavBar';
import RemoveProduct from '../Components/RemoveProduct/RemoveProduct';

function Home() {
  const [currentTab, setCurrentTab] = useState('');
  //   Get the current tab state from redux store
  const tab = useSelector((state) => state.tab.current);

  useEffect(() => {
    setCurrentTab(tab);
  }, [tab]);

  return (
    <div>
      <NavBar />
      {currentTab === 'addProduct' ? (
        <AddProductForm />
      ) : currentTab === 'removeProduct' ? (
        <RemoveProduct />
      ) : currentTab === 'listProduct' ? (
        <ListProduct />
      ) : (
        ''
      )}
    </div>
  );
}

export default Home;
