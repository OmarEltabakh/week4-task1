import HeroSlider from "../HeroSlider/HeroSlider";
import styles from "./HeroSection.module.css";

export default function HeroSection() {

  // categories=======================================================>



  return <>


    {/* HeroSection=======================================================> */}
    <section className={`${styles.HeroSection}`}>

      {/* heroSectionContainer============================================> */}
      <div className={`${styles.heroSectionContainer} specialContainer  `}>

        {/* sideBarMenu=======================================================> */}
        <div className={`${styles.sideBarMenu}`}>

          <ul className={`${styles.categorySidebar} `}>
            <li>
              <a href="#" className={styles.categoryLink}>
                Woman’s Fashion <i className={`${styles.womenFashionArrow} fas fa-angle-right`}></i>
              </a>
            </li>
            <li>
              <a href="#" className={styles.categoryLink}>
                Men’s Fashion <i className={`${styles.menFashionArrow} fas fa-angle-right`}></i>
              </a>
            </li>
            <li><a href="#" className={styles.categoryLink}>Electronics</a></li>
            <li><a href="#" className={styles.categoryLink}>Home & Lifestyle</a></li>
            <li><a href="#" className={styles.categoryLink}>Medicine</a></li>
            <li><a href="#" className={styles.categoryLink}>Sports & Outdoor</a></li>
            <li><a href="#" className={styles.categoryLink}>Baby’s & Toys</a></li>
            <li><a href="#" className={styles.categoryLink}>Groceries & Pets</a></li>
            <li><a href="#" className={styles.categoryLink}>Health & Beauty</a></li>
          </ul>


        </div>

        {/* mainBanner=======================================================> */}
        <div className={`${styles.mainBanner} `}>

          <HeroSlider />
        </div>






      </div>


    </section>





  </>
}
