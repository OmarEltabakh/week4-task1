import styles from "./Cart.module.css";
import playingControl from "../../assets/cartPageImage/playingControl.png";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

export default function Cart() {

    // handle state hanagment========================================================>
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = 1; // User ID

    // fetchUserCart=================================================================>
    const fetchUserCart = async (userId) => {
        try {
            const { data } = await axios(`https://fakestoreapi.com/carts/user/${userId}`);
         ;

            return data[0]; // Returns the user's most recent cart

        } catch (error) {
            console.error("Error fetching cart:", error);
            return null;
        }
    }

    // fetchProductDetails============================================================>
    const fetchProductDetails = async (productId) => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            return data;
        } catch (error) {
            console.error("Error fetching product:", error);
            return null;
        }
    };

    // Cart management functions======================================================>
    const updateQuantity = (productId, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
        toast.success("Quantity updated");
    };

    // removeItem ===================================================================>
    const removeItem = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
        toast.success("Product removed");
    };

    // calculateTotal=================================================================>
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // fetchUserCart =================================================================>
    useEffect(() => {
        const loadCart = async () => {
            setLoading(true);
            const cart = await fetchUserCart(userId);
            if (cart) {
                const productsWithDetails = await Promise.all(
                    cart.products.map(async (item) => {
                        const productData = await fetchProductDetails(item.productId);
                        return {
                            ...productData,
                            quantity: item.quantity
                        };
                    })
                );
                setCartItems(productsWithDetails.filter(item => item !== null));
            }
            setLoading(false);
        };
        loadCart();
    }, []);

    return (
        <>
            {/* cartPage */}
            {loading ? <LoadingScreen /> :

                <section className={`${styles.cartPage}`}>

                    {/* cartPageContainer */}
                    <div className={`${styles.cartPageContainer} specialContainer`}>

                        {/* cartHeader */}
                        <div className={`${styles.cartHeader}`}>
                            <h2><span>Home /</span> Cart</h2>
                        </div>

                        {/* tableHeader */}
                        <div className={`${styles.tableHeader} `}>

                            {/* productWrapper */}
                            <div className={`${styles.productWrapper}`}>
                                <span>Product</span>
                            </div>

                            {/* priceWrapper */}
                            <div className={`${styles.priceWrapper} `}>
                                <span>Price</span>
                            </div>

                            {/* quantityWrapper */}
                            <div className={`${styles.quantityWrapper}`}>
                                <span>Quantity</span>
                            </div>

                            {/* subTotalWrapper */}
                            <div className={`${styles.subTotalWrapper}`}>
                                <span>Subtotal</span>
                            </div>
                        </div>

                        {/* cartItemsContainer */}
                        <div className={`${styles.cartItemsContainer}`}>
                            {loading ? (
                                <div className={styles.loading}>Loading cart...</div>
                            ) : cartItems.length === 0 ? (
                                <div className={styles.emptyCart}>Your cart is empty</div>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className={`${styles.cartItem}`}>

                                        {/* productWrapper */}
                                        <div className={`${styles.productWrapper}  `}>
                                            <img src={item.image || playingControl} alt={item.title} className={`${styles.productImage}`} />
                                            <span>{item.title.split(' ').slice(0, 3).join(' ')}</span>

                                            <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
                                                <i className="fas fa-xmark"></i>
                                            </button>
                                        </div>

                                        {/* priceWrapper */}
                                        <div className={`${styles.priceWrapper}`}>
                                            <span>${item.price}</span>
                                        </div>

                                        {/* quantityInputWrapper */}
                                        <div className={`${styles.quantityInputWrapper}`}>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className={`${styles.quantityInput}`}
                                            />
                                        </div>

                                        {/* totalPriceWrapper */}
                                        <div className={`${styles.totalPriceWrapper}`}>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* actions */}
                        <div className={`${styles.actions}`}>
                            <Link to="/">
                                <button className={`${styles.shopButton}`}>Return To Shop</button>
                            </Link>
                            <button
                                className={`${styles.updateButton}`}
                                onClick={() => window.location.reload()}
                            >
                                Update Cart
                            </button>
                        </div>

                        {/* checkOutActionContainer */}
                        <div className={`${styles.checkOutActionContainer}`}>

                            {/* couponWrapper */}
                            <div className={`${styles.couponWrapper}`}>
                                <input type="text" placeholder="Coupon Code" className={`${styles.couponInput}`} />
                                <button className={`${styles.applyCoupon}`}>Apply Coupon</button>
                            </div>

                            {/* cartTotal */}
                            <div className={`${styles.cartTotal}`}>

                                {/* cartTotalWrapper */}
                                <div className={`${styles.cartTotalWrapper}`}>
                                    <h3>Cart Total</h3>
                                    <div className={`${styles.totalDetails}`}>
                                        <p>Subtotal: <span>${calculateTotal().toFixed(2)}</span></p>
                                        <p>Shipping: <span>Free</span></p>
                                        <p className='border-0 p-0 m-0'>Total: <span>${calculateTotal().toFixed(2)}</span></p>
                                    </div>

                                    {/* checkOutButtonWrapper */}
                                    <div className={`${styles.checkOutButtonWrapper}`}>
                                        <Link to="/checkOut">
                                            <button className={`${styles.checkoutButton}`}>Proceed to checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}