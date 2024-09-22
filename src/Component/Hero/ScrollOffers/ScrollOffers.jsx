import Styles from "./ScrollOffers.module.css";
import bannerOne from "../../../Assets/bannerOne.png";
import bannerTwo from "../../../Assets/bannerTwo.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const ScrollOffers = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.SwiperContainer}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={bannerOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerTwo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ScrollOffers;
