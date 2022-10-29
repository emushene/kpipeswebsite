import styles from "../../styles/Home/Intro.module.css";
import SplitBanner  from "../webEnhancers/splitBannerHome";
import Carousel from "../webEnhancers/Carousel"
const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.carousel}>
            <Carousel />
        
        </div>
        <div className={styles.overlay}>
            <h1>Quality Building Materials</h1>
            <p>
                Join the KPFC Builders investiment program widthselected products such as Deformed Bars,
                Square Tubes & other Building Materials.
            </p>
        </div>
        <div className={styles.splitBanner}>

            <SplitBanner />
        </div>





 
    </div>
  );
};

export default Intro;
