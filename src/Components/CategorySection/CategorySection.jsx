import styles from "./CategorySection.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../assets/Icons/blackArrowRight.svg";
import arrowLeft from "../../assets/Icons/arrowLeft.svg";
import { useState } from "react";
import { products } from "./CategoryData";


export default function CategorySection() {

  // state management==========================================================>
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);



  return <>

    <section className={`${styles.categorySection}  `}>

      {/* categoryContainer====================================================> */}
      <div className={`${styles.categoryContainer} specialContainer   `}>


        {/* categoryHeading */}
        <div className={`${styles.categoryHeading}`}>

          <div className={`${styles.redRectangle}`} />
          <p>Categories</p>

        </div>

        {/* categoryNavigationContainer */}
        <div className={`${styles.categoryNavigationContainer}   `}>

          <h6 className={styles.headerTitle}>Browse By Category</h6>



          <div className={`${styles.swiperButtonPrev} ${isBeginning ? styles.disabled : ""}`}>
            <img src={arrowLeft} alt="Previous" />
          </div>

          <div className={`${styles.swiperButtonNext} ${isEnd ? styles.disabled : ""}`}>
            <img src={arrowRight} alt="Next" />
          </div>


        </div>





        {/* categoryProducts ===============================================>*/}
        <div className={`${styles.categoryProducts}  `}>

          {/* productCard */}
          <Swiper
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}

            slidesPerView={6}
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },

              370: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              550: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 15
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1350: {
                slidesPerView: 6,
                spaceBetween: 30
              }
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            modules={[Navigation]}
            className="mySwiper  "
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} >

                <div className={`mx-auto ${styles.productCard} ${product.title === "Camera" ? styles.activeProductCard : ""}`}

                >

                  <img src={product.image} alt={product.title} className={styles.productImage} />

                  <h5 className={`${styles.productTitle}`} >{product.title}</h5>



                </div>


              </SwiperSlide>

            ))}



          </Swiper>



        </div>

      </div>

    </section >





  </>
}
