import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {  BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Catalog from './components/pages/Catalog'
import RoutesMain from './config/RoutesMain';

function App() {
  return (
    <BrowserRouter>
      {/* <Route  render = { () => (
        <>
          <Header />
          <RoutesMain />
          <Footer />
        </>
      )} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<RoutesMain />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
