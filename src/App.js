import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import uuid from 'react-uuid';
import Items from './components/items/items';
import { Provider } from 'react-redux';
import { store } from './redux';
import React, { useState, useEffect } from "react";
import { Api } from './services/api';

function App() {

  const [state, setState] = useState({
    orders: [],
    items: []
  });

  useEffect(() => {
    //
    Api.getCatalog(1, 1).then((data) => {
      setState(state => ({
        ...state, items: data.data.els.map((product) => {
          return {
            id: uuid(),
            country: 'Италия',
            price: 3000,
            material: 'кожа',
            img: `http://iblock.1123875-cc97019.tw1.ru` + product.prop.DETAIL_PICTURE,
            name: product.name
          };
        })
      }));
    });
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Menu />
        <Items items={state.items} />
        <Footer />
      </div>
    </Provider>
  );


}

export default App;
