import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import React from 'react';
import 'swiper/css';

function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg">"Intelion has transformed the way I manage my finances!"</p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg">"The features are amazing and easy to use."</p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Testimonials;