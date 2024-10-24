import React from "react";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
//components
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./components/Home";
import Product from "./pages/Product";
import SearchBar from "./components/SearchBar";
import MenCollections from "./components/MenCollections";
import WomenCollections from "./components/WomenCollections";
import KidCollections from "./components/KidCollections";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import NotFound from "./constants/NotFound";
import Loader from "./constants/Loader";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";

import Orders from "./pages/Orders";
import Protected from "./protectedRoutes/ProtectedRoutes";

//React lazy
const Collections = React.lazy(() => import("./components/Collections"));

const App = () => {
  const { pathname } = useLocation();
  const footerHidden = ["/login", "/register", "/admin"].includes(pathname);

  return (
    <div>
      <Navbar />
      <SearchBar />

      <Routes>
        {/* //!This is protected routes only profile page visible when user is auth */}
        <Route element={<Protected />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orders' element={<Orders />} />
        </Route>

        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/men' element={<MenCollections />} />
        <Route path='/women' element={<WomenCollections />} />
        <Route path='/kids' element={<KidCollections />} />
        <Route
          path='/collections'
          element={
            <Suspense fallback={<Loader />}>
              <Collections />
            </Suspense>
          }
        />
        <Route path='/women/collections' element={<Collections />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      {!footerHidden && <Footer />}
    </div>
  );
};

export default App;
