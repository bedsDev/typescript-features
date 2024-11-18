// 01 Generics

function func1<T>(arg:T) : T{
    return arg;
}

// 02 Generic with Type Constraints 
function func2<T extends string | number> (arg: T) : T {
    return arg;
}

const stringValue = func2("Hello");
const numberValue = func2(22);

// const booleanValue = func2(true); // error

// 03 Generic Interface

//generic interface with type parameter T and U

interface Repository<T,U> {
    items: T[];
    add(item: T) : void;
    getById(id:U): T | undefined;
}

interface User {
    id: number;
    name: string;
}

class UserRepository implements Repository<User,number> {
    items: User[] = [];

    add(item: User) : void {
        this.items.push(item);
    }

    getById(idOrName: number | string): User | undefined {
        if(typeof idOrName === 'string') {
            return this.items.find(user => user.name === idOrName)
        } else if (typeof idOrName === 'number') {
            return this.items.find(user => user.id === idOrName)
        }

        return undefined;
    }
}

const userRepo = new UserRepository();

userRepo.add({
    id: 1,
    name: 'Alice'
})

userRepo.add({
    id: 2,
    name: 'Bob'
})

const user1 = userRepo.getById(1);
const user2 = userRepo.getById('Bob');

console.log(user1);
console.log(user2);


// 4. Generic Classes

interface User1 {
    id: number;
    name:string;
    age: number;
}

class UserDetails<T extends User1> {
    id: T['id'];
    name: T['name'];
    age: T['age'];

    constructor(user: T) {
        this.id = user.id;
        this.name = user.name;
        this.age = user.age;
    }

    getUserDetails(): string {
        return `User: ${this.name}, ID: ${this.id}, Age: ${this.age}`;
    }

    updateName(newName: string): void {
        this.name = newName;
    }

    updateAge(newAge: string): void {
        this.age = newAge;
    }
}

// Using the UserDetails class with a User type
const user1: User1 = {
    id: 1, 
    name: 'Alice',
    age: 30
};
const userDetails = new UserDetails(user1);
console.log(userDetails.getUserDetails());

// Updating user details
userDetails.updateName('Bob');
userDetails.updateAge(35);

console.log(userDetails.getUserDetails());
console.log(new UserDetails('30); //Error, this will throw an error.

// 5. Constraining Type Parameters to Passed Types
function getProperty<Type>(obj: Type, key: keyof Type){
    return obj[key];
}                            

