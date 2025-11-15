import { collection } from 'firebase/firestore';
import { db } from '../firebase';


interface User {
    id?: string
    name: string
    email: string
    
}
class UserModel {
    private userCollection;

    constructor(){
        this.userCollection = db.collection('users');
    }

    async addUser(userData: Omit<User, 'id'>): Promise<User> {
        const docRef = await this.userCollection.add(userData);

        return {
            id: docRef.id,
            ...userData
        };
    }

    async getUsers(): Promise<User[]> {
        const snapshot = await this.userCollection.get();

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as User));
    }

    async getUserByID(id: string):Promise <User | null> {
        const docRef = this.userCollection.doc(id);
        const docSnap = await docRef.get();


        if(!docSnap.exists){
            return null;
        }

        return {
            id: docSnap.id,
            ...docSnap.data()
        } as User;
       
    }

    async removeUser(id: string): Promise<void> {
        await this.userCollection.doc(id).delete();
    }

    async updateUser(id: string, email?: string, name?: string): Promise<User | null> {
        const docRef = this.userCollection.doc(id)
        const docSnap = await docRef.get()

        if(!docSnap.exists){
            return null;
        }

        const updates: any = {};

        if(name !== undefined){updates.name = name};
        if(email !== undefined){updates.email = email};

        await docRef.update(updates);

        return {
            id: docSnap.id,
            ...docSnap.data(),
            ...updates
        } as User;
    }
        
}

export default UserModel;