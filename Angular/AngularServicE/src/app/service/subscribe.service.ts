import { Injectable } from "@angular/core";

@Injectable()
export class subscribeService {
    subscribebtnclicked(type: string) {
        alert('Thank you for '+type+' Subscribing');
    }
}   