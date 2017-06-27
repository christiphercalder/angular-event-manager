import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { Observable } from "rxjs/Rx";

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp;                       

    // To get a new fresh instance of the service for each test, so that it does not use a 
    // manipulated one for the next test
    beforeEach(() => {
        // creates a dummy instance of Http 
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    })
    
    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            // mock session to be used for testing, only required fields necessary
            var session = {id: 6, voters: ["joe", "john"]};
            // because the delete method returns an observable, we have to return a mock one
            mockHttp.delete.and.returnValue(Observable.of(false));
            // actual test of service method
            voterService.deleteVoter(3, <ISession>session, "joe");

            // Check to see that the outcome was what was expected
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");

        })
        it('should call http.delete with the right url', () => {
            // duplicated code from first test but this is acceptable for unit tests
            var session = {id: 6, voters: ["joe", "john"]};            
            mockHttp.delete.and.returnValue(Observable.of(false));            
            voterService.deleteVoter(3, <ISession>session, "joe");

            // Check to see that the url was passed correctly
            expect(mockHttp.delete).toHaveBeenCalledWith(
                '/api/events/3/sessions/6/voters/joe');
        })
    })

    describe('addVoter', () => {
        it('should call http.post with the right url', () => {            
            var session = {id: 6, voters: ["john"]};            
            mockHttp.post.and.returnValue(Observable.of(false));            
            voterService.addVoter(3, <ISession>session, "joe");

            // Check to see that the url was passed correctly
            expect(mockHttp.post).toHaveBeenCalledWith(
                '/api/events/3/sessions/6/voters/joe', "{}", jasmine.any(Object));
        })
    })
})