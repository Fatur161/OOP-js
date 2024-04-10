//Создайте класс User, который будет содержать статический метод для создания анонимного пользователя и  метод для проверки прав доступа.

class User{
    constructor(name, isAdmin = false){
        this._name = name;
        this._isAdmin = isAdmin
    }

    static createAnonymousUser(){
        return new User("AnonymousUser");
    }
    static checkRole(user){
        if(user instanceof User && user._isAdmin) return `${user._name} is Admin`;
        else if(user instanceof User && !user._isAdmin) return `${user._name} is not Admin`;
        else `Error data`;
    }
}

console.log(User.createAnonymousUser());
const newUser = new User('Daniel', true);
console.log(User.checkRole(newUser));
