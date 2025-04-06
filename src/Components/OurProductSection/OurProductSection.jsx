import styles from "./OurProductSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../assets/Icons/blackArrowRight.svg";
import arrowLeft from "../../assets/Icons/arrowLeft.svg";
import { useEffect, useState } from "react";
import loveIcon from "../../assets/Icons/loveIcon.svg";
import showIcon from "../../assets/Icons/watchedIcon.svg";
import { newProducts } from "./Products";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function OurProductSection() {



  // handle state management=================================================>
  const [selectedColour, setSelectedColour] = useState(null);
  const [products, setProducts] = useState([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);


  // handleColourChange
  const handleColourChange = (colour) => {
    setSelectedColour(colour === selectedColour ? null : colour);
  };


  // fetchProducts=======================================================>
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: 1, // for user (john@gmail.com)
          date: new Date().toISOString(),
          products: [{ productId: product.id, quantity: 1 }]
        })
      });

      await response.json();

      if (response.ok) {
        toast.success("Added to cart successfully");
      } else {
        throw new Error("Failed to add to cart");
      }


    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  }


  // Add to Wishlist handler using localStorage
  const handleAddToWishlist = (e, product) => {
    e.preventDefault(); // Prevent Link redirection
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = storedWishlist.some(item => item.id === product.id);

    if (exists) {
      toast.info("Product already in wishlist");
      return;
    }

    const updatedWishlist = [...storedWishlist, product];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success("Added to wishlist");
  };

  return (
    <section className={`${styles.ourProductSection} `}>
      <div className={`${styles.ourProductContainer} specialContainer`}>


        {/* Section Heading */}
        <div className={styles.sectionHeading}>
          <div className={styles.redRectangle} />
          <p>Our Products</p>
        </div>

        {/* Products Header */}
        <div className={styles.productsHeaderContainer}>
          <h2 className={styles.exploreTitle}>Explore Our Products</h2>

          <div className={`${styles.swiperButtonPrev} ${isBeginning ? styles.disabled : ""}`}>
            <img src={arrowLeft} alt="Previous" />
          </div>
          <div className={`${styles.swiperButtonNext} ${isEnd ? styles.disabled : ""}`}>
            <img src={arrowRight} alt="Next" />
          </div>
        </div>

        {/* Products Swiper */}
        <div className={styles.productsSwiperContainer}>
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
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              1000: { slidesPerView: 3, spaceBetween: 20 },
              1350: { slidesPerView: 4, spaceBetween: 30 },
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/productDetails/${product.id}`} >
                  <div className={`${styles.productCard}`}>

                    <img src={product.image} alt={product.title} className={styles.productImage} />

                    <div className={`${styles.cardIcons}`}>

                      <div className={styles.loveIconWrapper}
                        onClick={(e) => handleAddToWishlist(e, product)} >

                        <img src={loveIcon} alt="Wishlist" />
                      </div>

                      <div className={`${styles.showIconWrapper}`}>
                        <img src={showIcon} alt="View" />
                      </div>

                    </div>

                    <button
                      className={styles.addButton}
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                    >
                      Add To Cart
                    </button>

                  </div>

                  <h4 className={styles.productTitle}>
                    {product.title.split(' ').slice(0, 3).join(' ')}
                  </h4>


                  {/* priceAndRatingWrapper */}
                  <div className={`${styles.priceAndRatingWrapper} `}>

                    <div className={`${styles.priceContainer}`}>
                      <span className={styles.price}>{product.price}</span>
                    </div>

                    <div className={styles.rating}>
                      {"⭐".repeat(Math.round(product.rating.rate))}
                      <span>({product.rating.count})</span>
                    </div>

                  </div>

                </Link>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>



        {/* Products Swiper */}
        <div className={`${styles.newProductsContainer} `}>
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
              0: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              1000: { slidesPerView: 3, spaceBetween: 20 },
              1350: { slidesPerView: 4, spaceBetween: 30 },
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* newProducts */}
            {newProducts.map((product) => (
              <SwiperSlide key={product.id}>


                {/* productCard */}
                <div className={`${styles.productCard} `}>
                  <img src={product.image} alt={product.title} className={styles.productImage} />

                  {/* newProduct */}
                  {product.new &&
                    <div className={`${styles.newProduct}`}>
                      <span>NEW</span>
                    </div>

                  }

                  {/* cardIcons */}
                  <div className={styles.cardIcons}>
                    <div className={styles.loveIconWrapper}>
                      <img src={loveIcon} alt="Wishlist" />
                    </div>
                    <div className={styles.showIconWrapper}>
                      <img src={showIcon} alt="View" />
                    </div>
                  </div>
                </div>

                {/* productInfo */}
                <div className={styles.productInfo}>
                  <h4 className={styles.productTitle}>{product.title}</h4>

                  {/* priceAndRatingWrapper */}
                  <div className={`${styles.priceAndRatingWrapper} `}>

                    <div className={`${styles.priceContainer}`}>
                      <span className={styles.price}>{product.price}</span>
                    </div>

                    <div className={styles.rating}>
                      {"⭐".repeat(Math.round(product.rating))}
                      <span>({product.reviews})</span>
                    </div>
                  </div>

                  <div className={`${styles.colours} `}>

                    <label className={`${styles.checkboxLabel} ${styles.grey} ${selectedColour === 'grey' ? styles.checked : ''}`}>
                      <input
                        type="checkbox"
                        name="colour"
                        className={styles.checkboxInput}
                        checked={selectedColour === 'grey'}
                        onChange={() => handleColourChange('grey')}
                      />
                    </label>

                    <label className={`${styles.checkboxLabel} ${styles.red} ${selectedColour === 'red' ? styles.checked : ''}`}>
                      <input
                        type="checkbox"
                        name="colour"
                        className={styles.checkboxInput}
                        checked={selectedColour === 'red'}
                        onChange={() => handleColourChange('red')}
                      />
                    </label>
                  </div>

                </div>



              </SwiperSlide>
            ))}
          </Swiper>
        </div>




        {/* viewProductBtnContainer */}
        <div className={`${styles.viewProductBtnContainer}`}>
          <button className={styles.viewProductBtn}>View All Products</button>
        </div>

      </div>
    </section>
  );
}
