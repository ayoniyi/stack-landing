import Image from "next/image";
import style from "./Landing.module.scss";
import {
  circle1,
  circle2,
  circle3,
  polygon1,
  iphone,
  logo1,
  logo2,
  logo3,
  look1,
  look2,
  settings1,
  door1,
  stock,
  bank,
  crypto,
  cards,
} from "./assets";
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
      <section className={style.builtSection}>
        <div className={style.builtContent}>
          <h3>
            Built from the ground up so you <span> never </span> have to go
            through the <span>stress</span>.
          </h3>
          <p>
            Stack was built by ex senior software engineers from top fintechs
            around the world so that you can focus on running your business and
            not worry about building.
          </p>
          <div className={style.builtLogos}>
            <Image src={logo1} alt="logo1" />
            <Image src={logo2} alt="logo2" />
            <Image src={logo3} alt="logo3" />
          </div>
        </div>
      </section>
      <section className={style.helpSection}>
        <div className={style.circle3}>
          <Image src={circle3} alt="circle" />
        </div>
        <div className={style.helpContent}>
          <div className={style.helpText}>
            <h4>
              Who We <span>Help</span>{" "}
            </h4>
            <h3>Built with your startup idea in mind.</h3>
            <p>
              Stack was built to cover many use-cases in fintech. Plug into our
              API or use our pre-built white-labeled solutions to get your
              startup off the ground in weeks!
            </p>
          </div>
          <div className={style.boxes}>
            <div className={style.boxRows}>
              <div className={style.box}>
                <Image src={look1} alt="look" />
                <h3>Exploration</h3>
                <p>
                  You just are exploring a new startup idea and trying to decide
                  what partner is best for you.
                </p>
              </div>
              <div className={style.box}>
                <Image src={look2} alt="look" />
                <h3>New product offering</h3>
                <p>
                  You just are exploring a new startup idea and trying to decide
                  what partner is best for you.
                </p>
              </div>
            </div>
            <div className={style.boxRows}>
              <div className={style.box}>
                <Image src={settings1} alt="look" />
                <h3>Idea validation</h3>
                <p>
                  You are trying to validate a business idea you have. You are
                  probably about to start building your MVP for a small
                  audience.
                </p>
              </div>
              <div className={style.box}>
                <Image src={door1} alt="look" />
                <h3>Scaling</h3>
                <p>
                  You are looking to scale your fintech startup, add new product
                  offerings and enter into new international markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.products}>
        <div className={style.productsContent}>
          <div className={style.productTxt}>
            <h3>
              Some Of Our <span>Products</span>{" "}
            </h3>
            <h2>Build the startup your customers deserve.</h2>
          </div>
          <div className={style.productBoxes}>
            <div className={style.productBoxBig}>
              <div className={style.pBBTxt}>
                <h3>Build banking apps</h3>
                <p>Straight from the federal reserve to your application.</p>
                <button>Learn more</button>
              </div>
              <div className={style.pBBImg}>
                <Image src={bank} alt="banking" />
              </div>
            </div>
            <div className={style.productBoxRow}>
              <div className={style.productBoxSmall}>
                <div className={style.pBSTxt}>
                  <h3>Build crypto apps</h3>
                  <p>Straight from the blockchain to your application</p>
                  <button>Learn more</button>
                </div>
                <div className={style.pBSImg}>
                  <Image src={crypto} alt="blockchain" />
                </div>
              </div>
              <div className={style.productBoxSmall}>
                <div className={style.pBSTxt}>
                  <h3>Build stock trading apps</h3>
                  <p>Straight from the stock market, to your application</p>
                  <button>Learn more</button>
                </div>
                <div className={style.pBSImg}>
                  <Image src={stock} alt="stock market" />
                </div>
              </div>
            </div>
            <div className={style.productBoxBig}>
              <div className={style.pBBTxt}>
                <h3>Embed card issuing</h3>
                <p>Issue virtual and physical cards to your users.</p>
                <button>Learn more</button>
              </div>
              <div className={style.pBBImg}>
                <Image src={cards} alt="virtual cards" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
