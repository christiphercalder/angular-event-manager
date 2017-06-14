import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions,  } from "@angular/http";
import { Observable } from "rxjs/RX";

import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) { }

    loginUser(userName:string, password:string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = { username: userName, password: password };

        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do((resp) => {
            if(resp) {
                // convert and set the data returned to IUser interface for currentUser
                this.currentUser = <IUser>resp.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }

    /**
     * Log out the current user
     */
    logout(){
        // remove current user from client
        this.currentUser = undefined;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        // logout user from the server
        return this.http.post('/api/logout', JSON.stringify({}), options);
    }

    checkAuthenticationStatus(){
        return this.http.get('/api/currentIdentity').map((response: any) => {            
            if(response._body) {
                // if there is a user logged in return the user as an object
                return response.json();
            }else {
                // if there is NO user logged in return an empty object
                return {};
            }
        }).do(currentUser => {
            if(!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.put(`/api/users/${this.currentUser.id}`, 
            JSON.stringify(this.currentUser), options);
        // subscription is handled in profile.component
        
    }
}
