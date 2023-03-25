import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/home/Home";
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import Error404 from "./components/views/error404/Error404";
import Login from "./components/views/login/Login";
import Register from "./components/views/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./config/axiosInit";
import Products from "./components/Products/Products";
import ProductsTable from "./components/ProductsTable/ProductsTable"


function App() {
  const URL = process.env.REACT_APP_API_HAMBURGUESERIA;
  const [products, setProducts] = useState([]);
  //uso de variable de entorno

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      /* const res = await fetch(URL);
      const productApi = await res.json();
      setProducts(productApi); */

      const res = await axios.get(URL);
      // console.log(res?.data);
      const productApi = res?.data;
      setProducts(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main id="bodyy">
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />



            <Route
              exact
              path="/auth/login/"
              element={<Login />}
            />

            <Route exact path="/auth/register/" element={<Register />} />
            <Route exact path="*" element={<Error404 />} />
            <Route exact path="/Products/Create" element={<Products />} />
            <Route exact path="/Products" element={<ProductsTable
              products={products}
              URL={URL}

            />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
