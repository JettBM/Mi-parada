interface User {
    id: Number
    name: String
    email: String
    
}
class UserModel {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user)
    };

    getUser(): User[] {
        return this.users;
    }

    getUserByID(id: Number, arr: User[]): User | undefined{
        return arr.find(user => user.id === id)
    }

    removeUser(arr: User[], id: Number) {
        return arr.filter(arr => arr.id !== id)
    }

    updateUser(id: Number, email?: String, name?: String) {
      
    }

}
