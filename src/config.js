import firebase from 'firebase';

export const appName = 'adv-react-a3cbe';
export const forebaseConfig = {
  apiKey: 'AIzaSyA0dpOxWYgj_FotNhFskh8msqi1JyQ5O38',
  authDomain: 'adv-react-a3cbe.firebaseapp.com',
  databaseURL: 'https://adv-react-a3cbe.firebaseio.com',
  projectId: 'adv-react-a3cbe',
  storageBucket: 'adv-react-a3cbe.appspot.com',
  messagingSenderId: '226795155091',
};

firebase.initializeApp(forebaseConfig);