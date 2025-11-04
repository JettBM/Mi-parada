import test from "node:test";
import { db } from "./firebase";

async function testConnection(){
    try {
        const testRef = db.ref('test/connection')

        await testRef.set({
            status: 'connected',
            timestamp: Date.now()
        });

        console.log('connection success')

        const snapshot = await testRef.once('value');
        console.log("data: ", snapshot.val());

        await testRef.remove();
        console.log('cleanup')

        process.exit(0);
    } catch (error) {
        console.error("Error connecting", error)
        process.exit(1);
    }
}

testConnection();