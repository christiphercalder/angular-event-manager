import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { Observable } from "rxjs/RX";


/**
 * UNIT TESTING FOR THE VOTER.SERVICE
 */
describe('VoterService', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            // dummy session with an event id
            var session = { id: 6, voters: ["joe", "john"] };
            
            voterService.deleteVoter(3, <ISession>session, "joe"); 
        })
    })

})