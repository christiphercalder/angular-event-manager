import { Injectable } from '@angular/core';
import { ISession } from "../shared/event.model";
@Injectable()
export class VoterService {

    constructor() { }
    /**
     * Removes the current user from the sessions voter array
     * @param session 
     * @param userName 
     */
    deleteVoter(session: ISession, userName: string){
        session.voters = session.voters.filter(voter => voter !== userName);
    }

    /**
     * Adds the current user to the sessions voter array
     * @param session 
     * @param userName 
     */
    addVoter(session: ISession, userName: string){
        session.voters.push(userName);
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
}
