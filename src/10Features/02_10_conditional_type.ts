type MessageType<T> = T extends "success" ? string : number;

let successMessage: MessageType<"success"> = "Operation successful"; // string
let errorMessage: MessageType<"error"> = 404; // number

// 