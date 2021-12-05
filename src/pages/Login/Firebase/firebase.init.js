import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebasee.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;