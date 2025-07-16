import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amina F.",
    text: "Typing System made my students fall in love with typing! I can finally track all their progress.",
  },
  {
    name: "Abdirahman M.",
    text: "As a job seeker, this platform helped me prepare for government typing tests efficiently.",
  },
  {
    name: "Farah .",
    text: "I love the real-time stats and simple UI. My typing speed has improved so much!",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10" data-aos="fade-up">
        What Our Users Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-6 shadow" data-aos="fade-up">
              <p className="text-lg italic text-gray-700">“{t.text}”</p>
              <h4 className="mt-4 font-bold text-blue-600">— {t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsCarousel;
