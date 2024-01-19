import { User } from "../Model/user";
import { loggerService } from "./logger.service";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class userService {
    users: User[] = [
        new User('Jatin Dhiman', 'Male', 'Active', 'Monthly'),
        new User('Rahul Dhiman', 'Male', 'Inactive', 'Yearly'),
        new User('Harsh Verma', 'Male', 'Active', 'Quartly'),
    ];

    constructor(private logger: loggerService) { }

    OnuserDetailClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowuserDetail(user: User) {
        this.OnuserDetailClicked.emit(user);
    }

    GetAllusers() {
        return this.users;
    }

    CreateUser(name: string, gender: string, Subtype: string, status: string) {
        let user = new User(name, gender, status, Subtype);
        this.users.push(user);
        this.logger.logMsg(name, status);
    }

}