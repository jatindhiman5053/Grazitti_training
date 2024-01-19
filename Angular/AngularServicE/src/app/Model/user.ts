export class User {

    name!: string;
    gender!: string;
    Subtype!: string;
    status!: string;

    constructor(name: string, gender: string, Subtype: string, status: string) {
        this.name! = name;
        this.gender! = gender;
        this.Subtype! = Subtype;
        this.status! = status;
    }


}

