import Header from "./components/Header";
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './pages/homepage/index';
import Listing from './pages/listing/index';
import DetailsPage from './pages/details/index';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NotFound from './pages/notFound';
import ScrollToTop from "./utils/ScrollToTop";
import DetailPage from "./pages/details/index";



const App = () => {
  const [productData, setProductData] = useState([]);

  const getData = async (url) => {
    try {
      await axios.get(url).then(res => setProductData(res.data));
    } catch (error) {
      throw Error
    }
  }

  useEffect(() => {
    getData('http://localhost:3000/productData')
  }, []);



  return (
    <>
      {productData.length !== 0 &&
        <BrowserRouter>
          <Header data={productData} />
          <ScrollToTop />
          <Routes>
            <Route exact={true} path="/" element={<HomePage data={productData} />} />
            <Route exact={true} path="/cat/:id" element={<Listing data={productData}  single={true}/>} />
            <Route exact={true} path="/cat/:id/:id" element={<Listing data={productData} single={false}/>} />
            {/* <Route exact={true} path="/product/:id" element={<DetailsPage data={productData} />} /> */}
            <Route exact={true} path="/product/:id" element={<DetailPage />} />
            {/* <Route exact={true} path="/signIn" element={<SignIn />} /> */}
            {/* <Route exact={true} path="/signUp" element={<SignUp />} /> */}
            {/* <Route exact={true} path="/checkout" element={<Checkout />} /> */}
            <Route exact={true} path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      }
    </>
  )
}

export default App