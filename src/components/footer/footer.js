import Image from "next/image";
import Link from "next/link";
import Classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.innerContainer}>
        <div className={Classes.flex1}>
          <p>Copyright@ 2024</p>
          <p>hackthejobs.com</p>
          <p>Terms of Service</p>
          <p>All rights reserved.</p>
        </div>
        <div className={Classes.social}>
          <Image src="./twitter.svg" width="24" height="24" alt="icon" />
          <Image src="./instagram.svg" width="24" height="24" alt="icon" />
          <Image src="./linkledn.svg" width="24" height="24" alt="icon" />
          <Image src="./mail.svg" width="24" height="24" alt="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
