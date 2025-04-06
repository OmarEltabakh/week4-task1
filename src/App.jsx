import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Home from './Pages/Home/Home';
import Layout from "./Components/Layout/Layout";
import WishList from "./Pages/WishList/WishList";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Profile from "./Pages/Profile/Profile";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


export default function App() {



  let routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "signUp", element: <SignUp /> },
        { path: "signIn", element: <ProtectedRoute><SignIn /> </ProtectedRoute> },
        { path: "wishList", element: <WishList /> },
        { path: "cart", element: <Cart /> },
        { path: "checkOut", element: <CheckOut /> },
        { path: "profile", element: <Profile /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "productDetails/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ]
    },
  ])

  return <>
  
    <ToastContainer />
    <RouterProvider router={routers}></RouterProvider>

  </>
}
