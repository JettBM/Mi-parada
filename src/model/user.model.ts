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

    removeUser(arr: User[], id: User["id"]) {
        return arr.filter(arr => arr.id !== id)
    }

    updateUser(arr: User[], id: Number, email?: String, name?: String) {
       
    }

}
