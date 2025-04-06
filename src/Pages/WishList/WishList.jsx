import styles from "./WishList.module.css";
import { recommendations } from "./WishListData";
import cartIcon from "../../assets/Icons/Cart.svg";
import eye from "../../assets/Icons/watchedIcon.svg";
import deleteIcon from "../../assets/Icons/delete.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function WishList() {

    const [wishlistItems, setWishlistItems] = useState([]);
    const [addedToCartItems, setAddedToCartItems] = useState([]);

    const handleAddToCart = async (product) => {
        const isAlreadyAdded = addedToCartItems.some(item => item.id === product.id);

        if (isAlreadyAdded) {
            toast.info("This item is already in your cart");
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/carts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 1,
                    date: new Date().toISOString(),
                    products: [{ productId: product.id, quantity: 1 }]
                })
            });

            await response.json();

            if (response.ok) {
                toast.success("Added to cart successfully");

                // Save to state and localStorage
                const updatedCart = [...addedToCartItems, product];
                setAddedToCartItems(updatedCart);
                localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            } else {
                throw new Error("Failed to add to cart");
            }

        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
    };





    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
        setWishlistItems(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        toast.info("Removed from wishlist");
    };

    useEffect(() => {
        const storedItems = localStorage.getItem("wishlist");

        console.log(JSON.parse(storedItems));

        if (storedItems) {
            setWishlistItems(JSON.parse(storedItems));
        }

        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setAddedToCartItems(JSON.parse(storedCartItems));
        }
    }, []);


    return (


        <>
            {/* wishList */}
            <section className={`${styles.wishList}`}>

                {/* wishListContainer */}
                <div className={`${styles.wishListContainer} specialContainer `}>

                    {/* wishListContent */}
                    <div className={`${styles.wishListContent} `}>

                        {/* wishListHeader */}
                        <div className={`${styles.wishListHeader} `}>
                            <h2 className={`${styles.heading}`}>Wishlist ({wishlistItems.length})</h2>
                            <button className={`${styles.moveToBagButton}`}>Move All To Bag</button>
                        </div>

                        {/* itemsContainer - Swiper for wishlist items */}
                        <div className={`${styles.itemsContainer} `}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                modules={[Navigation]}
                                breakpoints={{
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 }
                                }}
                                className="mySwiper"
                            >
                                {wishlistItems.map((item) => (
                                    <SwiperSlide key={item.id} className={`${styles.itemContainer}`}>
                                        {/* item */}
                                        <div className={`${styles.item}`}>

                                            {/* imageContainer */}
                                            <div className={`${styles.imageContainer}`}>
                                                <img src={item.image} alt={item.name} className={`${styles.productImage}`} />

                                                <div className={`${styles.productActions}`} style={{ justifyContent: !item.discount && 'flex-end' }} >
                                                    {item.discount && (
                                                        <span className={`${styles.discountBadge}`}>-{item.discount}%</span>
                                                    )}

                                                    {/* iconContainer */}
                                                    <div
                                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                                        className={`${styles.iconContainer}`}>
                                                        <img
                                                            className={`${styles.deleteIcon}`}
                                                            src={deleteIcon}
                                                            alt="Delete Icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleAddToCart(item);
                                                }}
                                                className={`${styles.addToCartBtn}`}>
                                                <img className={`${styles.cartIcon}`} src={cartIcon} alt="" />
                                                Add to cart
                                            </button>

                                            {/* itemInfo */}
                                            <div className={`${styles.itemInfo}`}>

                                                {/* productDetails */}
                                                <div className={`${styles.productDetails} `}>
                                                    <p className={`${styles.productTitle}`}>{item.title.split(' ').slice(0, 4).join(' ')}</p>

                                                    {/* productPriceContiner */}
                                                    <div className={`${styles.productPriceContiner}`}>
                                                        <p className={`${styles.productPrice}`}>${item.price}</p>
                                                        {/* {item.oldPrice && <p className={`${styles.oldPrice}`}>${item.oldPrice}</p>} */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* recommendationContent */}
                    <div className={`${styles.recommendationContent}`}>

                        {/* recommendationsHeader */}
                        <div className={`${styles.recommendationsHeader}`}>

                            {/* remmendationPadge */}
                            <div className={`${styles.remmendationPadge}`}>
                                <div className={`${styles.redMarker}`}></div>
                                <h3>Just For You</h3>
                            </div>

                            {/* seeAllBtn */}
                            <button className={`${styles.seeAllBtn}`}>See All</button>
                        </div>




                        {/* itemsContainer - Swiper for recommendations */}
                        <div className={`${styles.itemsContainer}`}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                navigation={true}
                                modules={[Navigation]}
                                breakpoints={{
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 }
                                }}
                                className="mySwiper"
                            >
                                {recommendations.map((item) => (
                                    <SwiperSlide key={item.id} className={`${styles.itemContainer}`}>
                                        {/* item */}
                                        <div className={`${styles.item}`}>

                                            {/* imageContainer */}
                                            <div className={`${styles.imageContainer}`}>
                                                <img src={item.image} alt={item.name} className={`${styles.productImage}`} />

                                                <div className={`${styles.productActions}`} style={{ justifyContent: !item.discount && 'flex-end' }} >
                                                    {item.discount && (
                                                        <span className={`${styles.discountBadge}`}>-{item.discount}%</span>
                                                    )}

                                                    {/* iconContainer */}
                                                    <div className={`${styles.iconContainer}`}>
                                                        <img
                                                            className={`${styles.eyeIcon}`}
                                                            src={eye}
                                                            alt="eye Icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <button


                                                className={`${styles.addToCartBtn}`}>
                                                <img className={`${styles.cartIcon}`} src={cartIcon} alt="" />
                                                Add to cart
                                            </button>

                                            {/* itemInfo */}
                                            <div className={`${styles.itemInfo}`}>

                                                {/* productDetails */}
                                                <div className={`${styles.productDetails}`}>
                                                    <p className={`${styles.productTitle}`}>{item.name}</p>

                                                    {/* productPriceContiner */}
                                                    <div className={`${styles.productPriceContiner}`}>
                                                        <p className={`${styles.productPrice}`}>${item.price}</p>
                                                        {item.oldPrice && <p className={`${styles.oldPrice}`}>${item.oldPrice}</p>}
                                                    </div>

                                                    {/* rating */}
                                                    <div className={`${styles.rating}`}>
                                                        {'⭐'.repeat(Math.round(item.rating))}
                                                        <span>({item.reviews})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
