import Image from "next/image";
import style from "./Landing.module.scss";
import { circle1, circle2, polygon1, iphone } from "./assets";
import Header from "../../components/header/Header";
import Cursor from "../../components/cursorFire/Cursor";
import Intro from "../../components/intro/Intro";

const Landing = () => {
  return (
    <>
      <Intro />
      <Header />
      {/* <Cursor /> */}
      <section className={style.hero}>
        <div className={style.heroContent}>
          <div className={style.heroLeft}>
            <div className={style.heroLeftContent}>
              <h2>
                <span>
                  Build your fintech startup in{" "}
                  <span className={style.heroImp}>weeks</span>{" "}
                </span>
              </h2>
              <p>
                <span>
                  Say goodbye to multi-year contracts, outrageous fees or months
                  of development. Integrate our API during your lunch break, go
                  live by dinner.
                </span>
              </p>
              <button>Request early access</button>
            </div>
          </div>
          <div className={style.heroRight}>
            <div className={style.circle1}>
              <Image src={circle1} alt="circle" />
            </div>
            <div className={style.heroImg}>
              <Image src={iphone} alt="stack" />
              <div className={style.polygon1}>
                <Image src={polygon1} alt="polygon" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.circle2}>
          <Image src={circle2} alt="circle" />
        </div>
      </section>
    </>
  );
};

export default Landing;
