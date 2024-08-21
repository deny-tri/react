// src/pages/HomePage.tsx
import React from 'react';
import '../utilities/style.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Kategori from '../components/kategori';
import Notice from '../components/notice';
import InformationCompany from '../components/home/informationCompany';



const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Kategori></Kategori>
      <Notice></Notice>
     <InformationCompany></InformationCompany>
      <Footer></Footer>
    </>
  );
};

export default Home;