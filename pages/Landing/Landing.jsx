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
import Header from "../../components/header/Header";
import Cursor from "../../components/cursorFire/Cursor";
import Intro from "../../components/intro/Intro";
import Footer from "../../components/footer/Footer";

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
      <section className={style.compliance}>
        <div className={style.polygon2}>
          <Image src={polygon2} alt="polygon" />
        </div>
        <div className={style.complianceContent}>
          <div className={style.complianceTxt}>
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
          <div className={style.complianceImg}>
            <Image src={lines} alt="shape" />
            <div className={style.complyImg}>
              <Image src={comply} alt="compliance" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.offering}>
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
      <section className={style.fit}>
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
              <div className={`${style.fitTabItem} ${style.activeTab}`}>
                No-Code
              </div>
              <div className={style.fitTabItem}>Low-Code</div>
              <div className={style.fitTabItem}>All-Code</div>
            </div>
          </div>
          <div className={style.fitInfo}>
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
          {/* <div className={style.fitInfo}>
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
          </div> */}
          {/* <div className={style.fitInfo}>
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
          </div> */}
        </div>
        <div className={style.polygon4}>
          <Image src={polygon3} alt="polygon" />
        </div>
      </section>
      <section className={style.pricing}>
        <div className={style.pricingContent}>
          <div className={style.pricingTop}>
            <div className={style.pTopTxt}>
              <h3>
                Pricing<span> Plan</span>
              </h3>
              <h2>Simple pricing for everyone.</h2>
            </div>
            <div className={style.pTopBoxes}>
              <div className={style.pTBox}>
                <h3>Sandbox</h3>
                <p>Starts at</p>
                <h2>
                  0 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
              <div className={style.pTBox}>
                <h3>MVP</h3>
                <p>Starts at</p>
                <h2>
                  99 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
              <div className={style.pTBox}>
                <h3>Growth</h3>
                <p>Starts at</p>
                <h2>
                  99 <span>$</span>{" "}
                </h2>
                <p>Per Month</p>
                <button>Get Started</button>
              </div>
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
        <div className={style.helpBox}>
          <div className={style.circle5}>
            <Image src={circle5} alt="circle" />
          </div>
          <h2>
            Need Some <span>Help?</span>
          </h2>
          <p>
            Whether you&apos;re stuck or just want some tips on where to start,
            we are just an email away.
          </p>
          <p>support@stack-ft.com.</p>
          <div className={style.polygon5}>
            <Image src={polygon3} alt="polygon" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
