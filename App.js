import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {rootReducer} from './rootReducer';
// import {ProductComponent} from './components/product.component';
// import {ShoppingCart} from './components/shoppingCart.component'
import {store} from './store/store'
import {Main} from './connect';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <Main />
      </Provider>
  );
}

export default App;
