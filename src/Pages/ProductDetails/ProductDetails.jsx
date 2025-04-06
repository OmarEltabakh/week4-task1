
import styles from "./ProductDetails.module.css";
import decreaseIcon from "../../assets/productDetailsPageImages/Icons/Decrease.svg";
import increaseIcon from "../../assets/productDetailsPageImages/Icons/increase.svg";
import loveIcon from "../../assets/productDetailsPageImages/Icons/love.svg";
import returnDeliveryIcon from "../../assets/productDetailsPageImages/Icons/returnDelivery.svg";
import freeDelivery from "../../assets/productDetailsPageImages/Icons/freeDelivery.svg";
import { useEffect, useState } from "react";
import {  sizes } from "./ProductDetailsData";
import RelatedItems from "../../Components/RelatedItems/RelatedItems";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";



export default function ProductDetails() {

    // handle state managment=====================================>
    const [quantity, setQuantity] = useState(2);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColour, setSelectedColour] = useState(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [setError] = useState('');
    const { id } = useParams();



    // handle quantity ============================================>
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));


    // handleColourChange==========================================>
    const handleColourChange = (colour) => {
        setSelectedColour(colour === selectedColour ? null : colour);
    };

    // fetchProduct================================================>
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product details');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return <>

        {/* productDetails */}
        {loading ? <LoadingScreen /> :

            <section className={`${styles.productDetails}`}>

                {/* productDetailsContainer */}
                <div className={`${styles.productDetailsContainer} specialContainer `}>

                    {/* productDetailsHeader */}
                    <div className={`${styles.productDetailsHeader}`}>
                        <h3>Account / Gaming / <span>{product?.title}</span></h3>
                    </div>

                    {/* productOverview */}
                    <div className={`${styles.productOverview}  `}>

                        {/* imageSection */}
                        <div className={`${styles.imageSection}   `}>


                            {/* thumbnailList */}
                            <div className={`${styles.thumbnailList}   `}>

                                {/* thumbnail */}
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className={`${styles.thumbnail}`}>
                                        <img
                                            src={product.image}
                                            alt={`Thumbnail ${index + 1} for ${product.title}`}
                                            className={`${styles.thumbnailImg}`}
                                        />
                                    </div>
                                ))}



                            </div>

                            {/* productImage */}
                            <div className={`${styles.productImage}`}>
                                <img src={product?.image} alt="Main Product" className={`${styles.mainImage}`} />
                            </div>

                        </div>





                        {/* productDetails */}
                        <div className={`${styles.productInfo} `}>

                            <div className={`${styles.productInfoContainer}`}>

                                <h2 className={`${styles.productTitle}`}>{product?.title.split(' ').slice(0, 5).join(' ')}</h2>

                                {/* rating */}
                                <div className={`${styles.rating} `}>

                                    {/* starWrapper */}
                                    <div className={`${styles.starWrapper}`}>
                                        {"⭐".repeat(Math.round(product?.rating.rate))}
                                    </div>


                                    <span className={`${styles.reviews}`}>({product?.rating.count} Reviews) <span>|</span></span>
                                    <span className={`${styles.inStock}`}>In Stock</span>
                                </div>

                                <p className={`${styles.price}`}>{`$${product?.price}`}</p>
                                <p className={`${styles.description}`}>
                                    {product?.description}
                                </p>

                                {/* options */}
                                <div className={`${styles.options} `}>

                                    {/* colours */}
                                    <div className={`${styles.colours} `}>
                                        <span>Colours:</span>

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

                                    {/* sizes */}
                                    <div className={`${styles.sizes}`}>

                                        <span>Size:</span>
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* cartOptions */}
                                <div className={`${styles.cartOptions}  `}>

                                    <div className={`${styles.quantityContainer} `}>

                                        {/* controlButton */}
                                        <button onClick={decreaseQuantity} className={`${styles.controlButton}`}>
                                            <img src={decreaseIcon} alt="" />
                                        </button>

                                        <span className={styles.quantity}>{quantity}</span>

                                        {/* controlButton */}
                                        <button onClick={increaseQuantity} className={styles.controlButton}>
                                            <img src={increaseIcon} alt="" />
                                        </button>
                                    </div>

                                    <button className={`${styles.buyButton}`}>Buy Now</button>

                                    {/* love */}
                                    <div className={`${styles.love}`}>
                                        <img src={loveIcon} alt="" />
                                    </div>

                                </div>



                                {/* deliveryInfo */}
                                <div className={`${styles.deliveryInfo}`}>

                                    {/* deliveryOption */}
                                    <div className={`${styles.deliveryOption}`}>

                                        {/* deliveryOptionContainer */}
                                        <div className={`${styles.deliveryOptionContainer}`}>
                                            <img src={freeDelivery} alt="" />

                                            <div>
                                                <p className={styles.deliveryTitle}>Free Delivery</p>
                                                <p>
                                                    <a href="#" className={styles.link}>
                                                        Enter your postal code for Delivery Availability
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* deliveryOption */}
                                    <div className={`${styles.deliveryOption} border-0`}>

                                        {/* deliveryOptionContainer */}
                                        <div className={`${styles.deliveryOptionContainer} `}>
                                            <img src={returnDeliveryIcon} alt="" />
                                            <div>
                                                <p className={styles.deliveryTitle}>Return Delivery</p>
                                                <p>
                                                    <a href="#" className={styles.link}>
                                                        Free 30 Days Delivery Returns. <span>Details</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                    </div>





                                </div>

                            </div>

                        </div>

                    </div>

                    <RelatedItems />


                </div>


            </section>
        }



    </>
}
