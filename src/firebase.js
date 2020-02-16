import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyCHvlN-q5OkjbLsxbhKfPxtfe-i_YASo3A',
  // authDomain: 'grab-a-be.firebaseapp.com',
  // databaseURL: 'https://grab-a-be.firebaseio.com',
  // projectId: 'grab-a-be',
  // storageBucket: 'grab-a-be.appspot.com',
  // messagingSenderId: '166793019629',
  // appId: '1:166793019629:web:aeda253bdc84f2fea88ce4'

  apiKey: 'AIzaSyA4VrDZ0pZnvJnanFWVZN_6eSd9bWgLSd8',
  authDomain: 'grab-a-beer-3f116.firebaseapp.com',
  databaseURL: 'https://grab-a-beer-3f116.firebaseio.com',
  projectId: 'grab-a-beer-3f116',
  storageBucket: 'grab-a-beer-3f116.appspot.com',
  messagingSenderId: '662302222808',
  appId: '1:662302222808:web:352eba175986de959aeaad'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase; // only for development process

export default firebase;
