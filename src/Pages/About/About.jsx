import styles from "./About.module.css";
import aboutImage from "../../assets/aboutPageImage/aboutImage.png";
import marketIcon from "../../assets/aboutPageImage/Icons/marketIcon.svg";
import $Icon from "../../assets/aboutPageImage/Icons/$.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import linkedIcon from "../../assets/aboutPageImage/Icons/linkedin.svg";
import instegram from "../../assets/aboutPageImage/Icons/instegram.svg";
import twitter from "../../assets/aboutPageImage/Icons/twitter.png";
import { featuresData, stats, teamMembers } from "./aboutData";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export default function About() {





    return <>

        <ScrollToTop />
        {/* aboutPage */}
        <section className={`${styles.aboutPage}`}>

            {/* aboutContainer */}
            <div className={`${styles.aboutContainer} specialContainer`}>

                {/* aboutHeader */}
                <div className={`${styles.aboutHeader}`}>

                    <h3><span>Home</span> / About</h3>

                </div>

                {/* storySection */}
                <section className={`${styles.storySection} `}>

                    {/* storyContent */}
                    <div className={`${styles.storyContent}`}>
                        <h2>Our Story</h2>
                        <p className={`${styles.descPart1}`}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className={`${styles.descPart2}`}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>

                    {/* storyImage */}
                    <div className={`${styles.storyImage}`}>
                        <img src={aboutImage} alt="Shopping bags" className={`${styles.storyImage}`} />
                    </div>

                </section>


                {/* statsSection */}
                <section className={`${styles.statsSection}`}>

                    {/* statsICards */}
                    <div className={`${styles.statsICards} row w-100 mx-auto g-4`}>

                        {/* stateCard */}
                        {stats.map((stat, index) => (
                            <div key={index} className={`${styles.stateCard} col-xxl-3 col-xl-4 col-lg-4  col-md-6 col-sm-10 mx-auto`} >

                                {/* stateCardWrapper */}
                                <div className={`${styles.stateCardWrapper} ${stat.highlighted && styles.highlightedCard}`}>

                                    {/* iconWrapper */}
                                    <div className={`${styles.iconWrapper} `}>
                                        <img src={`${stat.highlighted ? $Icon : marketIcon}`} alt="" />
                                    </div>

                                    <h6 className={`${styles.value}`}>{stat.value}</h6>
                                    <p className={styles.desc}>{stat.text}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </section>




                {/* teamSection */}
                <section className={`${styles.teamSection} `}>



                    <Swiper slidesPerView={3} spaceBetween={30}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        pagination={{
                            clickable: true,
                            el: `.${styles.customPagination}`,
                        }}
                        className="mySwiper"

                    >
                        {/* customPagination */}
                        <div className={`${styles.customPagination}`}></div>


                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index} >

                                <div className={`${styles.memberCard} `}>

                                    <img src={member.image} alt={member.name} className={styles.memberImage} />

                                </div>


                                {/* memberInfo */}
                                <div className={`${styles.memberInfo}  `}>

                                    <h4 className={styles.memberName}>{member.name}</h4>

                                    <p className={`${styles.memberRole}`}>{member.role}</p>

                                    {/* socialmediaIcons */}
                                    <div className={`${styles.socialmediaIcons}`}>

                                        <img src={twitter} alt="" />
                                        <img src={instegram} alt="" />
                                        <img src={linkedIcon} alt="" />
                                    </div>

                                </div>




                            </SwiperSlide>

                        ))}



                    </Swiper>

                </section>





                <section className={`${styles.servicesSection}`}>

                    {/* featuresContainer */}
                    <div className={`${styles.featuresContainer} `}>
                        {featuresData.map((feature, index) => (

                            // featureCard
                            <div key={index} className={`${styles.featureCard}  mx-auto`}>

                                {/* iconContainer */}
                                <div className={`${styles.iconContainer}`}>
                                    <img src={feature.icon} alt="" />
                                </div>

                                <div className={`${styles.featureInfo}`}>
                                    <h5 className={styles.featureTitle}>{feature.title}</h5>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </section>

            </div>


        </section>


    </>
}
