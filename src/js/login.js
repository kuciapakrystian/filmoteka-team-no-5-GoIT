// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Notify } from 'notiflix';

const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const login = document.querySelector('.log-in');
const logOut = document.querySelector('.log-out');
let user;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwXObZpcAp1uILR4HQJMXwwu50FzgIP0E',
  authDomain: 'filmoteka-d1a57.firebaseapp.com',
  projectId: 'filmoteka-d1a57',
  storageBucket: 'filmoteka-d1a57.appspot.com',
  messagingSenderId: '372882009932',
  appId: '1:372882009932:web:5967a87f09a5b8098c29e9',
  measurementId: 'G-G8TWWHT34M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Authentication
const auth = getAuth(app);

// SIGN UP USERS

signUp.addEventListener('click', e => {
  e.preventDefault(),
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        Notify.success(`Registration success :)`);
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(
          `Oops! Something wrong with your Email address or password. Check if you have enetred them correctly.`
        );
        // ..
      });
});

//LOGIN USERS

signIn.addEventListener('click', e => {
  e.preventDefault(),
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        // Signed in
        (user = userCredential.user),
          document.querySelector('.login-modal').classList.toggle('is-hidden');
        Notify.success(`Hi, ${user.email.split('@')[0]}, you are sign in!`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(`Wrong email or password!`);
      });
});

//LOG OUT
logOut.addEventListener('click', e => {
  e.preventDefault(),
    signOut(auth)
      .then(() => {
        return (
          login.classList.toggle('is-hidden'),
          logOut.classList.toggle('is-hidden'),
          Notify.info(`Goodbye, you are logged out!`)
        );
      })
      .catch(error => {
        Notify.info(`Goodbye, you are logged out!`);
      });
});

onAuthStateChanged(auth, user => {
  if (user) {
    login.classList.toggle('is-hidden'), logOut.classList.toggle('is-hidden');
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});