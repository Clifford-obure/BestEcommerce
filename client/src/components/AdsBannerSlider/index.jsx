/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation, FreeMode } from "swiper/modules";
import BannerBox from "../BannerBox";
import { MyContext } from "../../App";

const AdsBannerSlider = (props) => {
  const context = useContext(MyContext);

  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={context?.windowWidth < 992 ? false : true}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        className="smlBtn"
      >
        {props?.data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <BannerBox img={item?.images[0]} item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
