import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://mi-parada-d431c-default-rtdb.firebaseio.com"

})

export const db = admin.database();
export default admin