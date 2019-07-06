/* eslint-disable no-unused-vars */
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyCpfnGstyo18cPSL0PtuE1P-qXL6ZeldtI',
  authDomain: 'wigan-coders-curriculum-4fa8d.firebaseapp.com',
  databaseURL: 'https://wigan-coders-curriculum-4fa8d.firebaseio.com',
  projectId: 'wigan-coders-curriculum-4fa8d',
  storageBucket: '',
  messagingSenderId: '751199586537',
  appId: '1:751199586537:web:9bf9d374302c6548'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
