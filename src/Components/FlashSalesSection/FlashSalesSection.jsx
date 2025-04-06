import styles from "./FlashSalesSection.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../assets/Icons/blackArrowRight.svg";
import arrowLeft from "../../assets/Icons/arrowLeft.svg";
import { useState } from "react";
import loveIcon from "../../assets/Icons/loveIcon.svg"
import showIcon from "../../assets/Icons/watchedIcon.svg";
import { products, timeUnits } from "./ProductData";



export default function FlashSalesSection() {

  // state management==========================================================>
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);



  return <>

    <section className={`${styles.flashSalesSection} `}>

      {/* flashSalesContainer====================================================> */}
      <div className={`${styles.flashSalesContainer} specialContainer   `}>


        {/* todayHeading */}
        <div className={`${styles.todayHeading}`}>

          <div className={`${styles.redRectangle}`} />
          <p>Today’s</p>

        </div>

        {/* flashSaleTimer */}
        <div className={`${styles.flashSaleTimerContainer}   `}>

          <h6>Flash Sales</h6>

          {/* countdownTimer */}
          <div className={`${styles.countdownTimer}  `}>
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className={`${styles.timeUnit}  d-flex justify-content-center align-items-center`}>

                <div className="d-flex flex-column  justify-content-center">
                  <span className={styles.label}>{unit.label}</span>
                  <div className=" d-flex justify-content-center align-items-center">

                    <span className={`${styles.number}  mt-2 `}>{unit.value}</span>

                    {index !== timeUnits.length - 1 && (
                      <span className={`${styles.separator}   `}>:</span>
                    )}
                  </div>
                </div>


              </div>
            ))}
          </div>

          <div className={`${styles.swiperButtonPrev} ${isBeginning ? styles.disabled : ""}`}>
            <img src={arrowLeft} alt="Previous" />
          </div>

          <div className={`${styles.swiperButtonNext} ${isEnd ? styles.disabled : ""}`}>
            <img src={arrowRight} alt="Next" />
          </div>


        </div>





        {/* flashSaleProducts ===============================================>*/}
        <div className={`${styles.flashSaleProducts}`}>

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

            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1350: {
                slidesPerView: 4,
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

                <div className={`${styles.productCard} `}>

                  <img src={product.image} alt={product.title} className={styles.productImage} />

                  {/* discount */}
                  <div className={styles.discount}>
                    <span>{product.discount}</span>
                  </div>

                  {/* cardIcons */}
                  <div className={`${styles.cardIcons}`}>

                    <div className={`${styles.loveIconWrapper}`}>
                      <img src={loveIcon} alt="" />
                    </div>

                    <div className={`${styles.showIconwrapper} `}>
                      <img src={showIcon} alt="" />
                    </div>

                  </div>

                  <button className={`${styles.addButton}`}>Add To Cart</button>

                </div>


                {/* productInfo */}
                <div className={`${styles.productInfo} `}>

                  <h4 className={styles.productTitle}>{product.title}</h4>

                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{product.price}</span>
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                  </div>

                  <div className={styles.rating}>
                    {"⭐".repeat(Math.round(product.rating))}
                    <span>
                      ({product.reviews})
                    </span>
                  </div>

                </div>
              </SwiperSlide>

            ))}



          </Swiper>

          {/* viewProductBtnContainer */}
          <div className={`${styles.viewProductBtnContainer}`}>
            <button className={`${styles.viewProductBtn}`}>View All Products</button>
          </div>

        </div>

      </div>

    </section>





  </>
}
