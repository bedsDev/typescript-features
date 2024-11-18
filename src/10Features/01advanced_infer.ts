let arr = [1, 'two', true]; // inferred as (number | string | boolean)[]
let tuple = [1, "two"] as const; // inferred as readonly [1, "two"]

function identity<T>(arg: T): T {
    return arg;
}
let result = identity({ id: 1, name: "Alice" }); 
// inferred as { id: number; name: string; }