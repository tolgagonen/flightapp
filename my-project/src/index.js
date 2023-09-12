import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ContactPage from './pages/ContactPage';
import TicketPage from './pages/TicketPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "iletisim",
    element: <ContactPage/>,
  },
  {
    path: "hakkımızda",
    element: <AboutPage/>,
  },
  {
    path: "bilet",
    element: <TicketPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
