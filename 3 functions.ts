function sum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum(12, 12));


//function with optional params
function getName(firstName: string, lastName?: string): string {
    if (lastName == undefined) {
        return firstName;
    } else {
        return firstName + lastName;
    }

}

console.log(getName('zekaryas'));
console.log(getName('zekaryas', 'tadele'));



