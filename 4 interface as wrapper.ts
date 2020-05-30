interface Person {
    username: string,
    age: number
}

function getPerson(person: Person): string {
    return person.username + person.age;
}


const zekaryas = { username: 'zekaryas', age: 12 };
console.log(getPerson(zekaryas));

// Destructuring assignment
const { username, age } = zekaryas;
console.log(username, age);
