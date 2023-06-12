import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Ingredients from './scenes/ingredients/index.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './scenes/cart/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  // {
  //   path: "/forum",
  //   element: <Forum />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
