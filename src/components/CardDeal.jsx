import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Roadmap from "./Roadmap";

const CardDeal = () => (
  <section className='flex md:flex-row flex-col items-start sm:py-24 py-14 '>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A Roadmap to IndicVerse <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    {/* <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div> */}
    <div className={layout.sectionImg}>
      <Roadmap />
    </div>
  </section>
);

export default CardDeal;
