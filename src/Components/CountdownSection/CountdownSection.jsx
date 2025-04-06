import styles from "./CountdownSection.module.css";
import countDownSectionImage from "../../assets/countdownSectionImage.png"

export default function CountdownSection() {


  const countdownItems = [
    { value: '23', label: 'Hours' },
    { value: '05', label: 'Days' },
    { value: '59', label: 'Minutes' },
    { value: '35', label: 'Seconds' }
  ];



  return <>

    {/* CountdownSection */}
    <section className={`${styles.CountdownSection}`}>

      {/* countDownContainer */}
      <div className={`${styles.countDownContainer} specialContainer   `}>


        {/*  contentContainer*/}
        <div className={`${styles.contentContainer} `}>

          <span className={`${styles.category}`}>Categories</span>
          <h1 className={`${styles.heading}`}>Enhance Your <br/> Music Experience</h1>

          {/* countdownWrapper */}
          <div className={`${styles.countdownWrapper} `}>
            {countdownItems.map((item, index) => (

              // timeBox
              <div key={index} className={`${styles.timeBox}`}>
                <p className={`${styles.value}`}>{item.value}</p>
                <p className={`${styles.label}`}> {item.label}</p>
              </div>
            ))}
          </div>

          <button className={`${styles.buyButton}`}>Buy Now!</button>
        </div>


        {/* imageContainer */}
        <div className={`${styles.imageContainer}  `}>
          <img src={countDownSectionImage} alt="JBL Speaker" className={`${styles.speakerImage}`} />
        </div>

      </div>



    </section >





  </>
}
