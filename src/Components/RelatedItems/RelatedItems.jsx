import styles from "./RelatedItems.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import loveIcon from "../../assets/Icons/loveIcon.svg"
import showIcon from "../../assets/Icons/watchedIcon.svg";
import { products } from "../../Components/FlashSalesSection/ProductData";



export default function RelatedItems() {




  return <>

    <section className={`${styles.RelatedItems} `}>

      {/* RelatedItemsContainer====================================================> */}
      <div className={`${styles.RelatedItemsContainer} `}>


        {/* todayHeading */}
        <div className={`${styles.todayHeading}`}>

          <div className={`${styles.redRectangle}`} />
          <p>Related Item</p>

        </div>





        {/* relatedItemProducts ===============================================>*/}
        <div className={`${styles.relatedItemProducts}`}>

          {/* productCard */}
          <Swiper
         
         

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

         
        </div>

      </div>

    </section>





  </>
}
