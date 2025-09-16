import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = ({ footerLinks }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} >
      {footerLinks.map((link, index) => {
        return (
          <Link key={index} to={link.path}>
            {link.title}
          </Link>
        );
      })}
      <span>&copy; {currentYear} X Corp.</span>
    </footer>
  );
};

export default Footer;
