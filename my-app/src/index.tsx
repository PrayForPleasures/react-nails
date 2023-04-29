import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Myline } from './components/global/Myline';
import { SectionOne } from './components/section-one/SectionOne';
import { SectionTwo } from './components/section-two/SectionTwo';
import { SectionThree } from './components/section-three/SectionThree';
import  Slider  from './components/swiper/Slider';

import '../src/scss/main.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Myline></Myline>
      <Header></Header>
      <Myline></Myline>
      <Slider></Slider>
      <Myline></Myline>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <Footer></Footer>
  </React.StrictMode>
);