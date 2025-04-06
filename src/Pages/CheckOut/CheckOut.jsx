import { FaCheck } from "react-icons/fa";
import styles from "./CheckOut.module.css";
import { useState } from "react";
import playControl from "../../assets/checkOutPageImage/playControl.png";
import paymentIcon1 from "../../assets/checkOutPageImage/paymentIcon1.png";
import paymentIcon2 from "../../assets/checkOutPageImage/paymentIcon2.png";
import paymentIcon3 from "../../assets/checkOutPageImage/paymentIcon3.png";
import paymentIcon4 from "../../assets/checkOutPageImage/paymentIcon4.png";
export default function CheckOut() {

    const payMentIcons = [paymentIcon1, paymentIcon2, paymentIcon3, paymentIcon4];

    const billingInputs = [
        { label: "First Name", required: true },
        { label: "Company Name", required: false },
        { label: "Street Address", required: true },
        { label: "Apartment, floor, etc. (optional)", required: false },
        { label: "Town/City", required: true },
        { label: "Phone Number", required: true },
        { label: "Email Address", required: true }
    ];

    const orderItems = [
        { name: "LCD Monitor", price: "$650" },
        { name: "HI Gamepad", price: "$1100" }
    ];

    const summaryData = [
        { label: 'Subtotal:', value: '$1750' },
        { label: 'Shipping:', value: 'Free' },
        { label: 'Total:', value: '$1750' }
    ]

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    return <>

        {/* checkOutPage */}
        <section className={`${styles.checkOutPage}`}>

            {/* checkOutContainer */}
            <div className={`${styles.checkOutContainer} specialContainer`}>

                {/* checkOutHeader */}
                <div className={`${styles.checkOutHeader}`}>
                    <h3>Account / My Account / Product / View Cart / <span>CheckOut</span></h3>
                </div>


                {/* billingAndOrderContainer */}
                <div className={`${styles.billingAndOrderContainer}`}>

                    {/* billingDetails */}
                    <div className={`${styles.billingDetails} `}>

                        {/* sbillingDetailsContainer */}
                        <div className={`${styles.billingDetailsContainer}`}>

                            <h2>Billing Details</h2>

                            {/* billingForm */}
                            <form className={`${styles.billingForm}`}>

                                {/* inputsContainer */}
                                <div className={`${styles.inputsContainer}`}>
                                    {billingInputs.map((input, index) => (

                                        <div className={`${styles.inputWrapper}`} key={index}>

                                            <label htmlFor="">  {input.label}
                                                {input.required && <span className={`${styles.required}`}>*</span>}
                                            </label>

                                            <input type="text" className={`${styles.input}`} />
                                        </div>
                                    ))}

                                </div>

                                {/* checkboxContainer */}
                                <label className={styles.checkboxContainer}>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className={`${styles.customCheckbox} ${isChecked ? styles.checked : ''}`}>
                                        {isChecked && <FaCheck className={styles.checkIcon} />}
                                    </div>
                                    <span className={styles.text}>
                                        Save this information for faster check-out next time
                                    </span>
                                </label>
                            </form>

                        </div>

                    </div>

                    {/* orderSummary */}
                    <div className={`${styles.orderSummary}`}>

                        {/* orderSummaryContainer */}
                        <div className={`${styles.orderSummaryContainer}`}>

                            {/* productListContainer */}
                            <div className={`${styles.productListContainer}`}>

                                {/* orderItemsContainer */}
                                <div className={`${styles.orderItemsContainer} `}>

                                    {/* orderItem */}
                                    {orderItems.map((item, index) => (
                                        <div key={index} className={`${styles.orderItem}`}>

                                            {/* nameWrapper */}
                                            <div className={`${styles.nameWrapper}`}>
                                                <img src={playControl} alt="" />
                                                <span>{item.name}</span>
                                            </div>

                                            <span className={`${styles.orderPrice}`}>{item.price}</span>

                                        </div>
                                    ))}
                                </div>

                                {/* summary */}
                                <div className={`${styles.summary} `}>

                                    {/* summaryWrapper */}

                                    <div className={`${styles.summaryWrapper}`}>
                                        {summaryData.map((item, index) => (
                                            <div key={index} className={`${styles.item}`}>
                                                <span>{item.label}</span>
                                                <span>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>



                                </div>
                            </div>

                            {/* paymentOptions */}
                            <div className={styles.paymentOptions}>

                                {/* Bank */}
                                <div className={`${styles.bank}  `}>
                                    <label className={`${styles.checkboxContainer}  `}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            className={styles.checkbox}
                                        />
                                        <span className={styles.customCheckbox}></span>
                                        <span className={styles.label}>Bank</span>
                                    </label>

                                    <div className={`${styles.paymentIcons}`}>
                                        {payMentIcons.map((icon, index) => (
                                            <img key={index} src={icon} alt="" />
                                        ))}
                                    </div>
                                </div>

                                {/* Cash on Delivery */}
                                <div className={`${styles.bank} `}>
                                    <label className={`${styles.checkboxContainer} `}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            className={styles.checkbox}
                                        />
                                        <span className={styles.customCheckbox}></span>
                                        <span className={styles.label}>Cash on delivery</span>
                                    </label>
                                </div>

                            </div>

                            {/* coupon */}
                            <div className={`${styles.coupon}`}>
                                <input type="text" placeholder="Coupon Code" className={`${styles.input}`} />
                                <button className={`${styles.applyCoupon}`}>Apply Coupon</button>
                            </div>

                            <button className={`${styles.placeOrder}`}>Place Order</button>
                        </div>

                    </div>

                </div>

            </div>




        </section>


    </>
}
