// Decalração de variveis
const company:string = "Senac";
let age:number = 28;
let isCorrect:boolean = true;

// Decalração de array
const arr: Array <number> = [1, 2, 3];
const array: number [] = [1, 2, 3];

// Declareação de objeto
const person: (
    name: string,
    age: number
) = {
    name: "Senac",
    age: 30
}

// Declaração tipo any

let result: any; 
result = "result";
result = 1903;
result = true;

// Declaração de função tipada
function sum(n1:number, n2:number): number {
    return n1 + n2
}


function sum2(n1:number, n2:number){
    let result = n1 + n2;
    return 'Resultado é: ${result}';
}

//Declaração de função Void
function sayHello(name: string): void{
    console.log ("Hello", name || "world");
}