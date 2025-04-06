import styles from "./BestSellingSection.module.css";
import loveIcon from "../../assets/Icons/loveIcon.svg"
import showIcon from "../../assets/Icons/watchedIcon.svg";
import { products } from "../../Components/BestSellingSection/Products";

export default function BestSellingSection() {


  return (
    <>
      {/* BestSellingSection */}
      <section className={`${styles.bestSellingSection}  `}>

        <div className={`${styles.bestSellingContainer} specialContainer`}>


          {/* sectionHeader */}
          <div className={`${styles.sectionHeader}`}>

            {/* sectionBadge */}
            <div className={`${styles.sectionBadge}`}>

              <div className={`${styles.highlightIcon}`} />
              <p className={styles.highlight}>This Month</p>

            </div>

            <div className={`${styles.headerTitleContainer} `}>

              <h2>Best Selling Products</h2>


              <button>View All</button>

            </div>

          </div>

          <div className={`${styles.productsContainer} row w-100  mx-auto  `}>
            {products.map((product) => (

              // productCard
              <div key={product.id} className={`${styles.productCard} col-md-3  col-sm-4 mx-auto col-4   `}>

                {/* productImageContainer */}
                <div className={`${styles.productImageContainer}  `}>
                  <div>
                    <img style={{ height: product.title === "RGB liquid CPU Cooler" ? "95px" : product.title === "Small BookSelf" ? "176px" : "" }}
                      src={product.image} alt={product.title} />
                  </div>


                </div>

                {/* productInfo */}
                <div className={`${styles.productInfo}`}>

                  <h3 className={`${styles.productTitle}`}>{product.title}</h3>

                  {/* productPricing */}
                  <div className={`${styles.productPricing}`}>

                    {/* currentPrice */}
                    <span className={`${styles.currentPrice}`}>
                      {product.currentPrice}
                    </span>

                    {/* originalPrice */}
                    {product.originalPrice && (
                      <span className={`${styles.originalPrice}`}>
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* productRating */}
                  <div className={`${styles.productRating}`}>
                    {product.rating}
                    <span className={`${styles.ratingCount}`}>
                      ({product.ratingCount})
                    </span>
                  </div>

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

              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
