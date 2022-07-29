import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
	authDomain: "mern--clone-2b529.firebaseapp.com",
	projectId: "mern--clone-2b529",
	storageBucket: "mern--clone-2b529.appspot.com",
	messagingSenderId: "403295871991",
	appId: "1:403295871991:web:c717b651e7943535a8c4f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
