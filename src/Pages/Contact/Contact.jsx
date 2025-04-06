
import styles from "./Contact.module.css";
import phoneIcons from "../../assets/contactPageImage/icon/phone.svg";
import mail from "../../assets/contactPageImage/icon/mail.svg";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
export default function Contact() {


    const contactInfo = [
        {
            icon: phoneIcons,
            title: 'Call To Us',
            description: 'We are available 24/7, 7 days a week.',
            details: 'Phone: +880611112222'
        },
        {
            icon: mail,
            title: 'Write To Us',
            description: 'Fill out our form and we will contact you within 24 hours.',
            email1: "Emails: customer@exclusive.com,",
            email2: "support@exclusive.com",

        }
    ];


    return <>
        <ScrollToTop />
        {/* contactPage */}
        <section className={`${styles.contactPage}`}>

            {/* contactContainer */}
            <div className={`${styles.contactContainer} specialContainer`}>

                {/* contactHeader */}
                <div className={`${styles.contactHeader}`}>
                    <h3>Home <span>/ Cantact</span></h3>
                </div>

                {/* getInTouch */}
                <div className={`${styles.getInTouch}`}>

                    {/* contactInfo */}
                    <div className={`${styles.contactInfo}`}>

                        {/* contactInfoContainer */}
                        <div className={`${styles.contactInfoContainer}`}>

                            {/* contactCard */}
                            {contactInfo.map((info, index) => (
                                <div key={index} className={`${styles.contactCard}  ${info.title === "Write To Us" && "mb-0 border-0 pb-0"}`}>

                                    {/* cardHeader */}
                                    <div className={`${styles.cardHeader}`}>

                                        {/* headerIcon */}
                                        <div className={`${styles.headerIcon}`}>
                                            <img src={info.icon} alt="" />
                                        </div>

                                        <h3 className={`${styles.title}`}>{info.title}</h3>

                                    </div>

                                    <p className={`${styles.description}`}>{info.description}</p>
                                    <p className={`${styles.details} `}>{info.details}</p>
                                    <p className={`${styles.email1} `}>{info.email1}</p>
                                    <p className={`${styles.email2} `}>{info.email2}</p>

                                </div>
                            ))}
                        </div>

                    </div>


                    {/* contactForm */}
                    <div className={`${styles.contactForm}`}>

                        {/* inputGroup */}
                        <div className={`${styles.inputGroup}`}>
                            <input type="text" placeholder="Your Name *" className={`${styles.input}`} />
                            <input type="email" placeholder="Your Email *" className={`${styles.input}`} />
                            <input type="tel" placeholder="Your Phone *" className={`${styles.input}`} />
                        </div>

                        <textarea placeholder="Your Message" className={`${styles.textarea}`} />

                        {/* sendButtonWrapper */}
                        <div className={`${styles.sendButtonWrapper}`}>
                            <button className={`${styles.sendButton}`}>Send Message</button>
                        </div>

                    </div>


                </div>

            </div>

        </section>



    </>
}
