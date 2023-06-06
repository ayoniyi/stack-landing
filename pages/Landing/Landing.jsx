import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./Landing.module.scss";
// assets
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
  polygon2,
  lines,
  comply,
  circle4,
  noCode,
  polygon3,
  allCode,
  lowCode,
  check,
  circle5,
} from "./assets";
// ui components
import Header from "../../components/header/Header";
import Cursor from "../../components/cursorFire/Cursor";
import Intro from "../../components/intro/Intro";
import Footer from "../../components/footer/Footer";
//extras
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import Atropos from "atropos/react";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const [tab, setTab] = useState("noCode");
  const [bankToggle, setBankToggle] = useState(false);
  const [cryptoToggle, setCryptoToggle] = useState(false);
  const [stockToggle, setStockToggle] = useState(false);
  const [cardToggle, setCardToggle] = useState(false);
  // gsap stuff
  const heroTitle = useRef();
  const heroTxt = useRef();
  const heroBtn = useRef();
  const builtTitle = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(heroTitle.current, {
      y: 0,
      delay: 4.8,
      skewY: 0,
      duration: 1.8,
      //stagger: 0.5,
      ease: Expo.easeInOut,
    });
    tl.to(heroTxt.current, {
      y: 0,
      duration: 1.2,
      delay: -1,
      ease: Expo.easeInOut,
    });
    tl.to(heroBtn.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: -1,
      ease: Expo.easeInOut,
    });
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   // scroll trigger
  //   tl.to(builtTitle.current, {
  //     scrollTrigger: {
  //       trigger: builtTitle.current,
  //       //start: "top center+=100",
  //       toggleActions: "play none none reverse",
  //     },
  //     y: 0,
  //     duration: 4.8,
  //   });
  // }, []);

  return (
    <>
      {/* <Intro /> */}
      <Header />
      <Cursor />
      <section className={style.hero}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 4.8,
              },
            },
          }}
          className={style.heroContent}
        >
          <div className={style.heroLeft}>
            <div className={style.heroLeftContent}>
              <h2>
                <span className={style.hT} ref={heroTitle}>
                  Build your fintech startup in{" "}
                  <span className={style.heroImp}>weeks</span>{" "}
                </span>
              </h2>
              <p>
                <span ref={heroTxt}>
                  Say goodbye to multi-year contracts, outrageous fees or months
                  of development. Integrate our API during your lunch break, go
                  live by dinner.
                </span>
              </p>
              <button ref={heroBtn}>Request early access</button>
            </div>
          </div>
          <div className={style.heroRight}>
            <div className={style.circle1}>
              <Image src={circle1} alt="circle" />
            </div>
            <div className={style.heroImg}>
              <Atropos
                activeOffset={10}
                shadow={false}
                highlight={false}
                shadowScale={0}
              >
                <Image
                  src={iphone}
                  alt="stack"
                  //data-atropos-opacity="1;0"
                  data-atropos-offset="5"
                />
              </Atropos>
              <div className={style.polygon1}>
                <Image src={polygon1} alt="polygon" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: 100,
            },
            visible: {
              x: 0,
              transition: {
                delay: 6.2,
                duration: 3,
              },
            },
          }}
          className={style.circle2}
        >
          <Image src={circle2} alt="circle" />
        </motion.div>
      </section>
      <section className={style.builtSection}>
        <div className={style.builtContent}>
          <h3 ref={builtTitle} data-aos="fade-up" data-aos-duration="500">
            Built from the ground up so you <span> never </span> have to go
            through the <span>stress</span>.
          </h3>
          <p data-aos="fade-up" data-aos-duration="500">
            Stack was built by ex senior software engineers from top fintechs
            around the world so that you can focus on running your business and
            not worry about building.
          </p>
          <div
            className={style.builtLogos}
            data-aos="fade-up"
            data-aos-duration="500"
          >
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
          <div
            className={style.helpText}
            data-aos="fade-up"
            data-aos-duration="500"
          >
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
          <div
            className={style.boxes}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div className={style.boxRows}>
              <div className={style.box}>
                <Image
                  src={look1}
                  alt="look"
                  //data-atropos-offset="30"
                />
                <h3 data-atropos-offset="25">Exploration</h3>
                <p data-atropos-offset="25">
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
          <div
            className={style.productTxt}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h3>
              Some Of Our <span>Products</span>{" "}
            </h3>
            <h2>Build the startup your customers deserve.</h2>
          </div>
          <div
            className={style.productBoxes}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* <Atropos
              activeOffset={20}
              shadow={false}
              highlight={false}
              //rotate={false}
              rotateXMax={5}
              rotateYMax={5}
              stretchZ={50}
              shadowScale={0}
              className={style.item}
            > */}
            <div className={style.productBoxBig}>
              <div
                className={style.pBBTxt}
                onMouseOver={() => setBankToggle(!bankToggle)}
              >
                <h3>Build banking apps</h3>
                <p>Straight from the federal reserve to your application.</p>
                <button>Learn more</button>
              </div>
              <div className={style.pBBImg}>
                {" "}
                <Image src={bank} alt="banking" />
              </div>
            </div>
            {/* </Atropos> */}
            <div className={style.productBoxRow}>
              <div className={style.productBoxSmall}>
                {/* {!cryptoToggle ? ( */}
                <div
                  className={`${style.pBSTxt} animate__animated animate__fadeIn`}
                  onMouseOver={() => setCryptoToggle(!cryptoToggle)}
                >
                  <h3>Build crypto apps</h3>
                  <p>Straight from the blockchain to your application</p>
                  <button>Learn more</button>
                </div>
                {/* ) : (
                  <div
                    className={`${style.pBSTxt} animate__animated animate__fadeIn`}
                    onMouseOver={() => setCryptoToggle(!cryptoToggle)}
                  >
                    <h3>Create your own digital neo-banking solution</h3>
                    <p>
                      Programmatically set up new accounts or manage existing
                      accounts.
                    </p>
                    <button>Learn more</button>
                  </div>
                )} */}
                <div className={style.pBSImg}>
                  <Image src={crypto} alt="blockchain" />
                </div>
              </div>
              <div className={style.productBoxSmall}>
                <div
                  className={style.pBSTxt}
                  onMouseOver={() => setStockToggle(!stockToggle)}
                >
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
              <div
                className={style.pBBTxt}
                onMouseOver={() => setCardToggle(!cardToggle)}
              >
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
      <section className={style.compliance}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 0,
              opacity: 0,
            },
            visible: {
              y: [0, -50, 0, -50, 0, -50, 0],
              rotate: [90, 0, 90, 0, 90],
              opacity: 1,
              transition: {
                type: "spring",
                opacity: {
                  duration: 4,
                },
                y: {
                  ease: "linear",
                  repeat: Infinity,
                  duration: 30,
                  delay: 2.5,
                },
                rotate: {
                  ease: "linear",
                  repeat: Infinity,
                  duration: 20,
                  delay: 2.5,
                },
              },
            },
          }}
          className={style.polygon2}
        >
          <Image src={polygon2} alt="polygon" />
        </motion.div>
        <div className={style.complianceContent}>
          <div
            className={style.complianceTxt}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h3>
              Built In <span>Compliance</span>{" "}
            </h3>
            <h2>Remain compliant as you continue to scale.</h2>
            <p>
              The true test is not really how well you can build or scale your
              product. The true test is how well you can remain compliant while
              building and scaling your product.
            </p>
            <p>
              Build with peace of mind knowing that we are a global identity
              verification and fraud prevention service provider. Don't believe
              us ? ask us for proof
            </p>
            <p>
              Onboard customers in any country, faster, cheaper, with more
              available options, minus the discrimination.
            </p>
          </div>
          <div
            className={style.complianceImg}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Image src={lines} alt="shape" />
            <div className={style.complyImg}>
              <Image src={comply} alt="compliance" />
            </div>
          </div>
        </div>
      </section>
      <section
        className={style.offering}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={style.circle4}>
          <Image src={circle4} alt="circle" />
        </div>
        <div className={style.offeringContent}>
          <div className={style.offeringTitle}>
            <h2>
              Product <span>Offering</span>
            </h2>
            <p>
              Although it is impossible to list every single product that we
              offer in this section, here are some products that may interest
              you.
            </p>
          </div>
          <div className={style.offerings}>
            <div className={style.offeringRow}>
              <div className={style.offeringBox}>
                <Image src={look1} alt="credit score" />
                <h3>Credit Scores</h3>
                <p>
                  Display your customers credit scores and accounts within your
                  app.
                </p>
              </div>
              <div className={style.offeringBox}>
                <Image src={look1} alt="crypto virtual accounts" />
                <h3>Crypto Virtual Accounts</h3>
                <p>
                  Display your customers credit scores and accounts within your
                  app.
                </p>
              </div>
              <div className={style.offeringBox}>
                <Image src={look1} alt="irtual accounts" />
                <h3>Virtual Bank Accounts</h3>
                <p>
                  Display your customers credit scores and accounts within your
                  app.
                </p>
              </div>
            </div>
            <div className={style.offeringRow}>
              <div className={style.offeringBox}>
                <Image src={look1} alt="credit score" />
                <h3>Transaction Enrichment</h3>
                <p>
                  Make sense of messy bank transaction data with a single API
                  call.
                </p>
              </div>
              <div className={style.offeringBox}>
                <Image src={look1} alt="crypto virtual accounts" />
                <h3>Transaction scoring</h3>
                <p>
                  Score and detect high risk transactions in real-time with the
                  help of machine learning.
                </p>
              </div>
              <div className={style.offeringBox}>
                <Image src={look1} alt="irtual accounts" />
                <h3>Identity Verificaiton</h3>
                <p>
                  Verify the identity of businesses and individuals faster than
                  you can read this sentence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.fit} data-aos="fade-up" data-aos-duration="500">
        <div className={style.fitContent}>
          <div className={style.fitTop}>
            <h2>
              {" "}
              One size <span>DOES NOT</span> fit all
            </h2>
            <p>
              At Stack, we understand that every business is unique with
              different timelines and requirements. That's why we offer a
              solution that works for everyone - because we believe in tailored
              solutions, not one-size-fits-all.
            </p>
            <div className={style.fitTabs}>
              <div
                className={`${style.fitTabItem} ${
                  tab === "noCode" ? style.activeTab : ""
                }`}
                onClick={() => setTab("noCode")}
              >
                No-Code
              </div>
              <div
                className={`${style.fitTabItem} ${
                  tab === "lowCode" ? style.activeTab : ""
                }`}
                onClick={() => setTab("lowCode")}
              >
                Low-Code
              </div>
              <div
                className={`${style.fitTabItem} ${
                  tab === "allCode" ? style.activeTab : ""
                }`}
                onClick={() => setTab("allCode")}
              >
                All-Code
              </div>
            </div>
          </div>
          {tab === "noCode" && (
            <div
              className={`${style.fitInfo} animate__animated animate__fadeIn`}
            >
              <div className={style.fitInfoTxt}>
                <h2>NO-CODE</h2>
                <p>
                  Speed up your time to market with our pre-built solutions - no
                  coding required!
                </p>
              </div>
              <div className={style.fitInfoImg}>
                <Image src={noCode} alt="no-code options" />
              </div>
            </div>
          )}
          {tab === "lowCode" && (
            <div
              className={`${style.fitInfo} animate__animated animate__fadeIn`}
            >
              <div className={style.fitInfoTxt}>
                <h2>LOW-CODE</h2>
                <p>
                  Mix our UI components with yours. Write some code where
                  necessary and use our drop-in components for the rest.
                </p>
              </div>
              <div className={style.fitInfoImg}>
                <Image src={lowCode} alt="low-code options" />
              </div>
            </div>
          )}
          {tab === "allCode" && (
            <div
              className={`${style.fitInfo} animate__animated animate__fadeIn`}
            >
              <div className={style.fitInfoTxt}>
                <h2>ALL-CODE</h2>
                <p>
                  Build a fully custom solution by integrating our API directly
                  into your product.
                </p>
              </div>
              <div className={style.fitInfoImg}>
                <Image src={allCode} alt="all-code options" />
              </div>
            </div>
          )}
        </div>
        <div className={style.polygon4}>
          <Image src={polygon3} alt="polygon" />
        </div>
      </section>
      <section
        className={style.pricing}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className={style.pricingContent}>
          <div className={style.pricingTop}>
            <div className={style.pTopTxt}>
              <h3>
                Pricing<span> Plan</span>
              </h3>
              <h2>Simple pricing for everyone.</h2>
            </div>
            <div className={style.pTopBoxes}>
              {/* <div className={style.pTopBxC}> */}
              <div className={style.pTopBoxLayer}></div>
              <div className={style.pTBox}>
                <h3>Sandbox</h3>
                <p>Starts at</p>
                <h2>
                  0 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
              {/* </div> */}
              {/* <div className={style.pTopBxC}> */}
              <div className={style.pTopBoxLayer}></div>
              <div className={style.pTBox}>
                <h3>MVP</h3>
                <p>Starts at</p>
                <h2>
                  99 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
              {/* </div> */}
              {/* <div className={style.pTopBxC}> */}
              <div className={style.pTopBoxLayer}></div>
              <div className={style.pTBox}>
                <h3>Growth</h3>
                <p>Starts at</p>
                <h2>
                  99 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className={style.pricingTable}>
            <div className={style.pTableTitle}>
              <p>Products and services</p>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Identity and fraud protection</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Secure File dropbox</p>
              </div>

              <div className={style.pTableCheck}>
                <Image className={style.hide} src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Secure Email service</p>
              </div>

              <div className={style.pTableCheck}>
                <Image className={style.hide} src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Stocks</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Crypto</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Bill Pay</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Banking</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Card Issuing</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>API access</p>
              </div>

              <div className={style.pTableCheck}>
                <Image src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Development support</p>
              </div>

              <div className={style.pTableCheck}>
                <Image className={style.hide} src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
            <div className={style.pTableRow}>
              <div className={style.pTableItem}>
                {" "}
                <p>Check mailing</p>
              </div>

              <div className={style.pTableCheck}>
                <Image className={style.hide} src={check} alt="check" />

                <Image src={check} alt="check" />

                <Image src={check} alt="check" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.help}>
        <Atropos
          activeOffset={10}
          shadow={false}
          highlight={false}
          //rotate={false}
          rotateXMax={10}
          rotateYMax={10}
          //stretchZ={50}
          shadowScale={0}
        >
          <div className={style.helpBox}>
            <div className={style.circle5}>
              <Image src={circle5} alt="circle" />
            </div>
            <h2 data-atropos-offset="15">
              Need Some <span>Help?</span>
            </h2>
            <p data-atropos-offset="15">
              Whether you&apos;re stuck or just want some tips on where to
              start, we are just an email away.
            </p>
            <p data-atropos-offset="15">
              <span>support@stack-ft.com.</span>{" "}
            </p>
            <div className={style.polygon5}>
              <Image src={polygon3} alt="polygon" />
            </div>
          </div>
        </Atropos>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
