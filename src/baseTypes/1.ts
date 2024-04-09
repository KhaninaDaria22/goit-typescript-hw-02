// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

type User = {
    age: number,
    name: string,
    toggle: boolean,
    empty: null, 
    notInitialize: undefined,

}

let user: User = {
    age: 50,
    name: 'Max',
    toggle: true,
    empty: null,
    notInitialize: undefined,
}

let callback = (a: number): number => { return 100 + a };

export {};
