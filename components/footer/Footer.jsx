import Image from "next/image";
import style from "./Footer.module.scss";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentMain}>
            <div className={style.left}>
              <Image src={logo} alt="logo" />
              <p>
                Stack is making it easy to build and scale fintech companies.
                Whether you are a single developer startup or a fortune 500
                company.
              </p>
            </div>
            <div className={style.right}>
              <div className={style.links}>
                <h3>Social</h3>
                <p>Blog</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
              </div>
              <div className={style.links}>
                <h3>Company</h3>
                <p>About</p>
                <p>Developers</p>
                <p>Roadmap</p>
                <p>Legal & Privacy</p>
              </div>
              <div className={style.links}>
                <h3>Platform</h3>
                <p>Overview</p>
                <p>Help Center</p>
                <p>Dev Center</p>
                {/* <p>Legal & Privacy</p> */}
              </div>
            </div>
          </div>
          <div className={style.contentOther}>
            <p>&copy; 2023 ayo niyi.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
