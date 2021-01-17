import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Image
            src="/teslaLogo.svg"
            alt="Logo"
            width={`100px`}
            height={`24px`}
          />
        </div>
        <div className={styles.headerCenter}>
          <p>model s</p>
          <p>model 3</p>
          <p>model x</p>
          <p>model y</p>
          <p>solar roof</p>
          <p>solar panel</p>
        </div>
        <div className={styles.headerRight}>
          <p>shop</p>
          <p>tesla account</p>
        </div>
      </div>
    </>
  );
};

export default Header;
