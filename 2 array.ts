//the best way
const fruitLists: string[] = ['apple', 'banana'];
const ids: number[] = [45, 23, 12, 45];

//other way
let fruitListGeneric: Array<string> = ['apple', 'banana'];
let boolList: Array<boolean>;

//tuple fixed elt
let friendsList: [string, string, string];
friendsList = ['A', 'B', 'C'];

for (let elt of fruitLists) {
    console.log(elt);
}
