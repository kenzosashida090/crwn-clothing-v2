import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {UserPorvider} from './components/context/context.component.jsx'
import {ProductsProvider} from "./components/context/prodocs.component.jsx"
import {DropBoxProvider} from "./components/context/dropdownContext.jsx"
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserPorvider>
    <ProductsProvider>
      <DropBoxProvider>
     <App />
     </DropBoxProvider>
     </ProductsProvider>
  </UserPorvider>
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
