import { Injectable } from "@angular/core";
import { delay, Observable, pluck } from "rxjs";
import {ajax} from "rxjs/ajax"

// https://jsonplaceholder.typicode.com/users
@Injectable()
export class UsersServices{

    constructor(){
    }

    public getUsers(): Observable<any>{
        return ajax.get('https://jsonplaceholder.typicode.com/users').pipe(
            pluck('response'),
            delay(1000)
        )
    }

}

