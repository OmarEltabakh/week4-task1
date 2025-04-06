import styles from "./NewArrivalSection.module.css";
import perfume from "../../assets/newArrivalSectionImages/perfume.png";
import playStation from "../../assets/newArrivalSectionImages/playStation.png";
import speakers from "../../assets/newArrivalSectionImages/speakers.png";
import carIcon from "../../assets/newArrivalSectionImages/carIcon.svg";
import headPhoneIcon from "../../assets/newArrivalSectionImages/headPhoneIcon.svg";
import trueIcon from "../../assets/newArrivalSectionImages/trueIcon.svg";
import arrowUp from "../../assets/newArrivalSectionImages/arrowUp.svg";

export default function NewArrivalSection() {


  const featuresData = [
    {
      icon: carIcon,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      icon: headPhoneIcon,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: trueIcon,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];





  return <>

    {/* NewArrivalSection */}
    <section className={`${styles.NewArrivalSection}`}>

      {/* NewArrivalContainer */}
      <div className={`${styles.NewArrivalContainer} specialContainer`}>


        {/* newArrivalHeader */}
        <div className={`${styles.newArrivalHeader}`}>

          {/* badgeContainer */}
          <div className={`${styles.badgeContainer}`}>

            <div className={`${styles.redRectangle}`} />

            <p>Featured</p>

          </div>

          {/* headerTitle */}
          <h5 className={`${styles.headerTitle}`}>New Arrival</h5>

        </div>


        {/* newArrivalContentContainer */}
        <div className={` ${styles.newArrivalContentContainer} `}>

          <div className="row w-100  mx-auto ">

            {/* playStationCardContainer */}
            <div className={`${styles.playStationCardContainer}  col-lg-6 col-md-10  `}>

              {/* playStationCard */}
              <div className={`${styles.playStationCard}  `}>
                <img src={playStation} alt="PlayStation 5" />
                <div className={styles.playStationLayer}>
                  <h6>PlayStation 5</h6>
                  <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>




            <div className="col-lg-6 col-md-10 col-sm-12 pe-0  mx-auto  ">

              <div className="row w-100 mx-auto  ">

                {/* cardContainer */}
                <div className={`${styles.cardContainer}   col-lg-6 col-md-6 col-sm-6 mx-auto ps-0  `}>

                  {/* card */}
                  <div className={`${styles.card} `}>
                    <img   src={speakers} alt="Speakers" />
                    <div className={styles.layer}>
                      <h6>Speakers</h6>
                      <p>Amazon wireless speakers.</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>

                {/*cardContainer  */}
                <div className={`${styles.cardContainer} col-lg-6 col-md-6 col-sm-6  ps-sm-3 ps-0 pt-sm-0 pt-4      `}>

                  {/* card */}
                  <div className={`${styles.card} d-flex align-items-center `}>
                    <img src={perfume} alt="Perfume" />
                    <div className={styles.layer}>
                      <h6>Perfume</h6>
                      <p>GUCCI INTENSE OUD EDP.</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>

                </div>

                {/*cardContainer  */}
                <div className={`${styles.womenCollectionCotainer} col-md-12   pt-4 ps-0  `}>

                  {/* card */}
                  <div className={`${styles.card} `}>
                    <img src={perfume} alt="Perfume" />
                    <div className={styles.layer}>
                      <h6>Women&apos;s Collections</h6>
                      <p>Featured woman collections that give you another vibe.</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>

                </div>


              </div>
            </div>

          </div>
        </div>


        {/* featuresContainer */}
        <div className={`${styles.featuresContainer}  `}>
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



        {/* goUp */}
        <div className={`${styles.goUpContainer}`}>
          <div className={`${styles.goUp}`}>
            <img src={arrowUp} alt="" />
          </div>
        </div>

      </div>


    </section>





  </>
}
