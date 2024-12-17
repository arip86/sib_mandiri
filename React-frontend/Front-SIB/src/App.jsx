
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Produks from './pages/Produks';
import Contacts from './pages/Contacts';
import Layout from './layout/Index';

function App() {
  return (
  <div>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<Abouts/>}></Route>
      <Route path='/Produk' element={<Produks/>}></Route>
      <Route path='/Contact' element={<Contacts/>}></Route>
    </Routes>
    </Layout>
    {/* kumpulan component */}
    {/* <Header/>  */}
    {/* <Home /> */}
    {/* <About />
    <Services/>
    <Produk /> */}
    {/* <FormProduk />
    <NonLift />
    <Lift input={input} onInputChange={handleInputChange}/> */}
    {/* <Contact /> */}
    {/* <div className='text-center mt-4'>
      <button className='btn btn-primary'>Learn More</button>
      <button className='btn btn-secondary ml-2'>Get Started</button>
    </div>
    <Footer/> */}
  </div>
  )
}
export default App
// digunakan untuk dikirim ke file lain sebagai component
