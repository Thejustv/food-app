import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ResMenu from './Components/ResMenu';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import appStore from './appStore';


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path :"/menu/:id",
    element:<><Header/><ResMenu/></>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
