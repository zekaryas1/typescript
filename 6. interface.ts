interface Persons {
    username: string;

    getUsername(): string
}

class User implements Persons {
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    getUsername(): string {
        return this.username;
    }

}
