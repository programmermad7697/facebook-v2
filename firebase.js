import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAE3NpWPdfL8uu2nzFwDj0mzfa2sXCnEMA',
  authDomain: 'fb-v2-9f699.firebaseapp.com',
  projectId: 'fb-v2-9f699',
  storageBucket: 'fb-v2-9f699.appspot.com',
  messagingSenderId: '594287305380',
  appId: '1:594287305380:web:bf98a85cb6a03cee557c31',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
