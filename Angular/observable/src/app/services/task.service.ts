import { EventEmitter, Injectable, inject } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class taskService {
    // CreateTask: EventEmitter<string> = new EventEmitter<string>();

    CreateTask = new Subject<string>();

    OnCreatetask(value: string) {
        this.CreateTask.next(value)
    }

}