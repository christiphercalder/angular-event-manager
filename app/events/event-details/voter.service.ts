import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ISession } from "../shared/event.model";
@Injectable()
export class VoterService {

    constructor(private http: Http) { }
    /**
     * Removes the current user from the sessions voter array
     * @param session 
     * @param userName 
     */
    deleteVoter(eventId: number, session: ISession, userName: string){
        session.voters = session.voters.filter(voter => voter !== userName);

        this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`)
                 .catch(this.handleError)
                 .subscribe();
    }

    /**
     * Adds the current user to the sessions voter array
     * @param session 
     * @param userName 
     */
    addVoter(eventId: number, session: ISession, userName: string){
        session.voters.push(userName); // update client

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.post(url, JSON.stringify({}), options)
                 .catch(this.handleError)
                 .subscribe();
    }
    
    /**
     * Returns true if the user is in the sessions voters array,
     * Returns false if the user is not
     * @param session 
     * @param userName 
     */
    userHasVoted(session: ISession, userName: string){
        return session.voters.some(voter => voter === userName);
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);    }
}
