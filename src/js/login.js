//firebase.initializeApp(firebaseConfig);
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import Notiflix from 'notiflix';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiRUEuDpPzDEzUJnXjGIweSySTmz88VP4',
  authDomain: 'filmoteka5k.firebaseapp.com',
  projectId: 'filmoteka5k',
  storageBucket: 'filmoteka5k.appspot.com',
  messagingSenderId: '213602487883',
  appId: '1:213602487883:web:9db197b5f95d828a1387ce',
  measurementId: 'G-SJ5WCK45ML',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Authentication
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Forms
const modalLogin = document.querySelector('.login-container');
//const closeLogin = document.querySelector('.close-modal-login');
//function register() {
let email = document.querySelector('.email');
let password = document.querySelector('.password');
const signinBtn = document.querySelector('.signin-btn');
const signupBtn = document.querySelector('.signup-btn');
const logoutBtn = document.querySelector('.logout-btn');
const modalLoginBtn = document.querySelector('.login-img-container'); // 'LOG IN' on main website
let user;

/*
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(function () {
      let user = auth.currentUser;
      let database_ref = database.ref();
      let user_data = {
        email: email.value,
      };
      database_ref.child(`users/` + user.uid).set(user_data);
      Notiflix.Notify.success(`Registration successful!`);
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(`Wrong email or password!`);
    });
}
*/
/*
// Pokaż formularz logowania po kliknięciu przycisku 'LOG IN'
modalLoginBtn.addEventListener('click', e => {
  e.preventDefault();
  modalLogin.classList.add('login-active');
});

// Zamknij formularz logowania
closeLogin.addEventListener('click', e => {
  e.preventDefault();
  modalLogin.classList.remove('login-active');
});
*/

// SIGN UP USERS
signupBtn.addEventListener('click', e => {
  e.preventDefault();
  if (email.value.includes('@')) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        // Signed up user
        user = userCredential.user;
        Notiflix.Notify.success(`Registration successful!`);
        modalLogin.classList.remove('login-active');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notiflix.Notify.failure(`Wrong email or password! Please try again`);
      });
  } else {
    Notiflix.Notify.failure(`Please enter a valid email address.`);
  }
});

// SIGN IN USERS
signinBtn.addEventListener('click', e => {
  e.preventDefault();
  if (email.value.includes('@')) {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(userCredential => {
        // Signed in user
        user = userCredential.user;
        Notiflix.Notify.success(`Log in successful!`);
        modalLogin.classList.remove('login-active');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notiflix.Notify.failure(`Wrong email or password! Please try again`);
      });
  } else {
    Notiflix.Notify.failure(`Please enter a valid email address.`);
  }
});

let logoutHandler = null;

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in
    modalLoginBtn.textContent = 'LOG OUT';
    logoutHandler = e => {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          Notiflix.Notify.info(`Logged out.`);
          modalLogin.classList.remove('login-active');
        })
        .catch(error => {
          // Handle any errors
          console.error(`Error signing out: ${error}`);
        });
    };
    modalLoginBtn.addEventListener('click', logoutHandler);
  } else {
    // User is signed out
    modalLoginBtn.textContent = 'LOG IN';
    if (logoutHandler) {
      modalLoginBtn.removeEventListener('click', logoutHandler);
      logoutHandler = null;
    }
    modalLogin.classList.remove('login-active');
  }
});
