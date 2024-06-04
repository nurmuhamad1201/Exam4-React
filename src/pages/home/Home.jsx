import { useTranslation } from "react-i18next";
import bigImg from '../img/Information.png'
import nfoccard from '../img/nfocard.png'
import Icon1 from '../img/Icon1.png'
import Icon2 from '../img/Icon2.png'
import Icon3 from '../img/Icon3.png'
import  { useRef, useState } from 'react';
import ponz from "../img/1517.png"
import kurb from '../img/kurb.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import design from '../img/design.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'animate.css';

import './home.css';


import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import InfoCard, { InfoCard2 } from "../../components/Card";
import TestimonialCard from "../../components/Cards";
import NewsletterForm from "../../components/Comp2";

const testimonials = [
  { name: "Albarr Flores", role: "Graphic Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis metus quis interdum. Lectus eros lectus fermentum lorem aliquam." },
  { name: "Albarr Flores", role: "Graphic Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis metus quis interdum. Lectus eros lectus fermentum lorem aliquam." },
  { name: "Albarr Flores", role: "Graphic Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis metus quis interdum. Lectus eros lectus fermentum lorem aliquam." }
];

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>

<section className="dark:bg-gray-800 py-[100px] px-[100px] gap-[20px] flex lg:flex-wrap lg:text-center dark:text-white p-6">
<h1 className="text-3xl md:text-2xl font-bold mb-4 animate__animated animate__backInRight">
      {t("salom1")}
    </h1>
  <p className="text-lg">{t("salom2")}</p>
</section>

<section className="w-[90%] m-auto ">
  <img className=" m-auto" src={bigImg} alt="" />
</section>

<section  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="swiper-container flex py-[50px] ">
<Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className="flex items-center md:flex-wrap gap-4 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
  <img src={nfoccard}  alt="" className=" w-[50%] md:w-[95%] rounded-full" />
  <div>
    <h1 className="text-2xl font-bold mb-2">{t("salom3")}</h1>
    <p className="text-lg mb-4">{t("salom4")}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">{t("exploreSection")}</button>
    <div className="flex items-center gap-4 mt-4">
      <img src={ponz} alt="" className="w-20 h-20 rounded-full" />
      <div>
        <h1 className="text-xl font-bold mb-2">{t("salom5")}</h1>
        <p className="text-base">{t("salom6")}</p>
      </div>
    </div>
  </div>
</div>

        </SwiperSlide>
     
        <SwiperSlide>
        <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex items-center md:flex-wrap gap-4 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
  <img src={nfoccard}  alt="" className=" w-[50%] md:w-[95%] rounded-full" />
  <div>
    <h1 className="text-2xl font-bold mb-2">{t("salom3")}</h1>
    <p className="text-lg mb-4">{t("salom4")}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">{t("exploreSection")}</button>
    <div className="flex items-center gap-4 mt-4">
      <img src={ponz} alt="" className="w-20 h-20 rounded-full" />
      <div>
        <h1 className="text-xl font-bold mb-2">{t("salom5")}</h1>
        <p className="text-base">{t("salom6")}</p>
      </div>
    </div>
  </div>
</div>

        </SwiperSlide>
     
        <SwiperSlide>
        <div className="flex items-center md:flex-wrap gap-4 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
  <img src={nfoccard}  alt="" className=" w-[50%] md:w-[95%] rounded-full" />
  <div>
    <h1 className="text-2xl font-bold mb-2">{t("salom3")}</h1>
    <p className="text-lg mb-4">{t("salom4")}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full">{t("exploreSection")}</button>
    <div className="flex items-center gap-4 mt-4">
      <img src={ponz} alt="" className="w-20 h-20 rounded-full" />
      <div>
        <h1 className="text-xl font-bold mb-2">{t("salom5")}</h1>
        <p className="text-base">{t("salom6")}</p>
      </div>
    </div>
  </div>
</div>

        </SwiperSlide>
     
        
      </Swiper>
</section>

<section className="flex px-[100px] md:px-0 py-[50px] lg:flex-wrap justify-center items-center"> 
  <div className="w-full  pr-10">
    <h1 className="text-3xl font-bold mb-4">{t("salom7")}</h1>
    <p className="text-lg">{t("salom8")}</p>
  </div>
  <div data-aos="zoom-out" className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
    <div className="flex flex-col items-center">
      <img className="m-auto mb-4" src={Icon1} alt="" />
      <h1 className="text-lg font-semibold mb-2">{t("salom9")}</h1>
      <p className="text-base text-center">{t("salom10")}</p>
    </div>
    <div className="flex flex-col items-center">
      <img className="m-auto mb-4" src={Icon1} alt="" />
      <h1 className="text-lg font-semibold mb-2">{t("salom11")}</h1>
      <p className="text-base text-center">{t("salom10")}</p>
    </div>
    <div data-aos="zoom-out-up" className="flex flex-col items-center">
      <img className="m-auto mb-4" src={Icon1} alt="" />
      <h1 className="text-lg font-semibold mb-2">{t("salom12")}</h1>
      <p className="text-base text-center">{t("salom10")}</p>
    </div>
    <div data-aos="zoom-out-right" className="flex flex-col items-center">
      <img className="m-auto mb-4" src={Icon1} alt="" />
      <h1 className="text-lg font-semibold mb-2">{t("salom13")}</h1>
      <p className="text-base text-center">{t("salom10")}</p>
    </div>
  </div>
</section>


<section data-aos="zoom-out-left" className=" py-[50px] ">
<InfoCard 
      imageSrc={kurb}
      title={t("salom14")}
      description={t("salom15")}
      exploreText={t("exploreSection")}
      authorImageSrc={ponz}
      authorName={t("salom5")}
      authorRole={t("salom6")}
    />
</section>

<InfoCard2
  imageSrc={design}
  title={t("salom3")}
  description={t("salom4")}
  exploreText={t("exploreSection")}
/>


<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="min-h-screen  p-8">
      <h1 className="text-3xl font-semibold text-center mb-12">Customers love the ease and simplicity</h1>
      <div className="flex lg:flex-wrap py-[20px] space-x-4 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <NewsletterForm />
    </div>

    </div>
  )
}

export default Home