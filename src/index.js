import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import myCharacterSlice from "./features/MyCharacter";
import {Provider} from "react-redux";
import inventorySlice from "./features/Inventory";
import modalSlice from "./features/Modal";
import weaponSlice from "./features/Weapon";
import monsterSlice from "./features/Monster";
import dropItemsSlice from "./features/DropItems";

const store = configureStore({
    reducer: {
        character: myCharacterSlice,
        inventory: inventorySlice,
        modal: modalSlice,
        weapon: weaponSlice,
        monster: monsterSlice,
        drop: dropItemsSlice
    }
})

ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
