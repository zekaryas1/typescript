interface Persons {
    username: string;

    getUsername(): string
}

class User implements Persons {
    username: string;
    static numberOfUser: number = 0;

    constructor(username: string) {
        this.username = username;
        User.numberOfUser++;
    }

    getUsername(): string {
        return this.username;
    }

}
