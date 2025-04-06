import styles from './Footer.module.css';
import sendMessage from "../../assets/Icons/sendMessage.svg";
import qrCode from "../../assets/footerImage/Qrcode.png";
import appleStore from "../../assets/footerImage/appleStore.png";
import PlayStore from "../../assets/footerImage/playStore.png";


const links = [
    {
        title: "Account",
        items: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"]
    },
    {
        title: "Quick Link",
        items: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"]
    }


];

const socialIcons = [
    { icon: "fab fa-facebook-f", label: "Facebook" },
    { icon: "fab fa-twitter", label: "Twitter" },
    { icon: "fab fa-instagram", label: "Instagram" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn" }
];

export default function Footer() {
    return <>

        {/* footer */}
        <footer className={`${styles.footer}`}>

            {/* footerContainer */}
            <div className={`${styles.footerContainer} specialContainer`}>

                {/* section */}
                <div className={`${styles.section}  `}>
                    <h2 className={`${styles.title}`}>Exclusive</h2>
                    <p className={`${styles.subscribe}`}>Subscribe</p>
                    <p>Get 10% off your first order</p>

                    {/* inputContainer */}
                    <div className={`${styles.inputContainer} `}>
                        <input type="email" placeholder="Enter your email" className={`${styles.input}`} />
                        <img src={sendMessage} alt="" />
                    </div>

                </div>

                {/* section */}
                <div className={`${styles.section} `}>
                    <h3 className={`${styles.title}`}>Support</h3>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                {/* section */}
                {links.map((linkGroup, index) => (
                    <div key={index} className={`${styles.section} `}>
                        <h3 className={`${styles.title}`}>{linkGroup.title}</h3>
                        {linkGroup.items.map((item, idx) => (
                            <a className={`${styles.link}`} key={idx}>{item}</a>
                        ))}
                    </div>
                ))}

                {/* section */}
                <div className={`${styles.section}   `}>
                    <h3 className={`${styles.title}`}>Download App</h3>
                    <p className={`${styles.appDiscount}`}>Save $3 with App New User Only</p>

                    {/* qrContainer */}
                    <div className={`${styles.qrContainer}  `}>

                        <img className={`${styles.qrImage} `} src={qrCode} alt="QR Code" />

                        {/* storesContainer */}
                        <div className={`${styles.storesContainer} `}>
                            <img src={PlayStore} alt="Google Play" />
                            <img src={appleStore} alt="App Store" />
                        </div>
                    </div>

                    {/* socialIcons */}
                    <div className={`${styles.socialIcons}`}>
                        {socialIcons.map((social, index) => (
                            <i key={index} className={`${styles.scoicalIcon} ${social.icon}`} />
                        ))}
                    </div>


                </div>

                <div className={`${styles.copyright}`}>
                    &copy; Copyright Rimel 2022. All right reserved
                </div>
            </div>


        </footer >
    </>

}
