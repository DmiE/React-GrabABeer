import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHvlN-q5OkjbLsxbhKfPxtfe-i_YASo3A',
  authDomain: 'grab-a-be.firebaseapp.com',
  databaseURL: 'https://grab-a-be.firebaseio.com',
  projectId: 'grab-a-be',
  storageBucket: 'grab-a-be.appspot.com',
  messagingSenderId: '166793019629',
  appId: '1:166793019629:web:aeda253bdc84f2fea88ce4'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase; // only for development process

export default firebase;
