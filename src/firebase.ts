import dotenv from "dotenv";
import * as admin from "firebase-admin";
import { getFirestore } from "firebase/firestore";

dotenv.config();

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://mi-parada-d431c-default-rtdb.firebaseio.com"

})

export const db = admin.firestore();
export default admin