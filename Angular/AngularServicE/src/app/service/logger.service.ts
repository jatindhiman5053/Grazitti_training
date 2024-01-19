import { Injectable } from "@angular/core";

@Injectable()
export class loggerService {
    logMsg(name: string, status: string) {
        console.log(`Logger is ${name} and status is ${status}`);
    }
}