import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyC4FKD1DIr2LN07WJW9kYQa14Ts98SJqxE",
	authDomain: "signal-rn.firebaseapp.com",
	projectId: "signal-rn",
	storageBucket: "signal-rn.appspot.com",
	messagingSenderId: "307994317466",
	appId: "1:307994317466:web:d4678909687b4aa7728523",
	measurementId: "G-LNKXRDE3VL",
}

let app

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig)
} else {
	app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
