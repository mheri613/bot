// Deno.serve((_request: Request) => {
//     return new Response("Hello, world!");
//     });

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function sayHello(p: Person): string {
//     return `Hello, ${p.firstName}!`;
// }

// const ada: Person = {
//     firstName: "Ada",
//     lastName: "Lovelace",
// };

// console.log(sayHello(ada));
const site = await fetch("https://heri.tipnl.com")
console.log(await site.text());


