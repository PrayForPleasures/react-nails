import * as React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper';

const ProductImagesSlider = (props:any) =>{
    return<>
        <Swiper 
            spaceBetween={10}
            slidesPerView={4}
            modules={[Thumbs, Autoplay]}
            className='slider__items'
            autoplay={{
                delay: 3000             
            }}
        >
            {props.images.map((item:any,index:number)=>(
                <SwiperSlide key={index}>
                    <div className='slider__items_wrapper'>
                        <img src={item} alt="img" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>    
    </>
}

ProductImagesSlider.protoTypes={
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider