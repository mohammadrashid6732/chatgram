/** @format */

import firebase from 'firebase/app';
import 'firebase/auth';
export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyBdL08SG8ClLUB8FIweM9W27g3tH8bRFm4',
    authDomain: 'chatgram-2ee97.firebaseapp.com',
    projectId: 'chatgram-2ee97',
    storageBucket: 'chatgram-2ee97.appspot.com',
    messagingSenderId: '525288883325',
    appId: '1:525288883325:web:bd7af6ce21f9c5787c1d14',
  })
  .auth();
