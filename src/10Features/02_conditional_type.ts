type MessageType<T> = T extends "success" ? string : number;

let successMessage: MessageType<"success"> = "Operation successful"; // string
let errorMessage: MessageType<"error"> = 404; // number

// 3. Template Literal Types

type Color = "red" | "blue";
type Size = "small" | "large";

type ColoredSize = `${Color}-${Size}`;

let item: ColoredSize = "red-large"; // valid
// let invalidItem: ColoredSize = "green-small"; 
// Error: Type '"green-small"' is not assignable to type 'ColoredSize'.

// 4. Type Predicates

function isString(value: unknown): value is string {
    return typeof value === "string";
}

function printValue(value: number | string) {
    if (isString(value)) {
        console.log(`String: ${value}`);
    } else {
        console.log(`Number: ${value}`);
    }
}


// 5.  Indexed Access Types
interface Person {
    name: string;
    age: number;
}

type NameType = Person["name"]; // string
let personName: NameType = "Alice";

// 6. Keyof Type Operator
interface User {
    id: number;
    name: string;
    email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"
let key: UserKeys = "name";

// 7. Mapped Types
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

interface User {
    id: number;
    name: string;
}

const readonlyUser: ReadOnly<User> = {
    id: 1,
    name: "John"
};

// readonlyUser.id = 2; 
// Error: Cannot assign to 'id' because it is a read-only property.


// 8. Utility Types
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>; // All properties are optional
type ReadonlyUser = Readonly<User>; // All properties are readonly

let user: PartialUser = { name: "John" };
let readonlyUser: ReadonlyUser = { 
  id: 1, 
  name: "John", 
  email: "john@example.com" 
};

// 9. Discriminated Unions
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}

// 10. Declaration Merging
interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};
