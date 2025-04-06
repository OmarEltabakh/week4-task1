import styles from "./HeroSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliderImage from "../../assets/heroImage.png";
import apple from "../../assets/Icons/apple.svg";
import arrowRight from "../../assets/Icons/arrowRight.svg";

export default function HeroSlider() {

  const slides = [
    {
      id: 1,
      image: sliderImage,
      title: "iPhone 14 Series",
      discountHighlight: "Up to 10%",
      discountText: "off Voucher",
      link: "#",
    },
    {
      id: 2,
      image: sliderImage,
      title: "iPhone 14 Series",
      discountHighlight: "Up to 10%", 
      discountText: "off Voucher", 
      link: "#",
    },

  ];

  return (
    <div className={`${styles.HeroSlider} `}>
      <Swiper
        className=" w-100 h-100"
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={false}
        // autoplay={{ delay: 4000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            {/* bannerSlide==============================================> */}
            <div className={`${styles.bannerSlide}  `}>


              {/* bannerContent */}
              <div className={`${styles.bannerContent}     `}>

                <div className={`${styles.bannerContentContainer} `}>
                  {/* titleWrapper */}
                  <div className={`${styles.titleWrapper}  `}>
                    <img src={apple} alt="" />
                    <h4 className="">{slide.title}</h4>
                  </div>

                  <h2 className={styles.discountTitle}>
                    <span className={styles.discountHighlight}>{slide.discountHighlight}</span> <br />
                    <span className={styles.discountText}>{slide.discountText}</span>
                  </h2>


                  {/* shopNowWrapper */}
                  <div className={`${styles.shopNowWrapper}   `}>

                    <a href={slide.link} className={`${styles.shopNow} `}>
                      show now
                    </a>

                    <img src={arrowRight} alt="" />
                  </div>
                </div>

              </div>



              {/* bannerImageContainer */}
              <div className={`${styles.bannerImageContainer}   `}>

                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`${styles.bannerImage}`}
                />
              </div>



            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
