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

    getUserByID(id: string) {
        return this.users.find(user => user.id === id);
    }

    removeUser(id: string): User[] {
        this.users = this.users.filter(user => user.id !== id)
        return this.users;
    }

    updateUser(id: string, email?: string, name?: string): User | undefined{
        const userIndex = this.users.findIndex(user => user.id === id);

        if(userIndex === -1){
            return undefined;
        }

        this.users[userIndex] = {
            ...this.users[userIndex],
            ...(name && { name }),
            ...(email && { email })
        } as User

        return this.users[userIndex];
    }

}
