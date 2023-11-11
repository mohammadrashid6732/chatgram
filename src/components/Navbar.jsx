/** @format */
//styles
import styles from './Navbar.module.css';
const Navbar = ({ logoutHandler, displayName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h1>chatgram</h1>
      </div>
      <div>wellcome, {displayName} in the chatgram</div>
      <div className={styles.button} onClick={logoutHandler}>
        logout
      </div>
    </div>
  );
};

export default Navbar;
