export class users {
    id: number;
    username: string;
    password: string;
    email: string;
    nom: string;
    prenom: string;
    age: number;
    type: string;
    credits: number;

    constructor(id: number, username: string,
        password: string,
        email: string,
        nom: string,
        prenom: string,
        age: number,
        type: string,
        credits: number) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.type = type;
        this.credits = credits;
    }
}