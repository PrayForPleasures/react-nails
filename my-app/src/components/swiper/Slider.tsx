import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImagesSlider from './ProductImagesSlider';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';


import {productImages} from './images'

export default function Swip() {

    return (
        <div className='slider'>
            <div className="container">
                <ProductImagesSlider images={productImages}/>
            </div>
        </div>
);
};