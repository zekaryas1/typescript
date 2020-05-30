class User {
    public username: string;

    //readonly same as final: have one chance to set then it's const
    private readonly email: string;
    protected age: number;


    constructor(username: string, email: string, age: number) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    private register() {
        console.log(this.username + " is now registered");
    }

    public getData(): string {
        return this.username + this.age + this.email;
    }
}

const me = new User('zekaryas', 'zekaryasdinku@gmail.com', 21);
console.log(me.username);

class Member extends User {
    private readonly id: number;

    constructor(username: string, email: string, age: number, id: number) {
        super(username, email, age);
        this.id = id;
    }

    //overriding
    getData(): string {
        return super.getData() + this.id;
    }

}


const meAsMember = new Member('zekaryas', 'zekaryasdinku@gmail.com', 21, 12);
console.log(meAsMember.getData());
