interface User {
    id: number
    name: string
    email: string
    
}
class UserModel {
    private users: User[] = [];

    addUser(user: User): User[] {
        this.users = [...this.users, user];
        return this.users;
    };

    getUsers(): User[] {
        return this.users;
    }

    getUserByID(id: number){
        return this.users.find(user => user.id === id);
    }

    removeUser(id: number): User[] {
        return this.users.filter(user => user.id !== id)
    }

    updateUser(id: number, email?: string, name?: string): User[] {
        
    }

}
