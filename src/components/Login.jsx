/** @format */
import { auth } from '../firebase';
import firebase from 'firebase/app';
//styles
import styles from './Login.module.css';
//icons
import google from '../assets/images/google.svg';

function Login() {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.LoginCart}>
        <h2>wellcome to the chatgram!</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> singin with google
        </div>
      </div>
    </div>
  );
}

export default Login;
