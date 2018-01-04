import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GetQuestionsService {
    
    constructor(private http:Http){   
    }

    getData(){
        return this.http.get('../../assets/my-data.json')
        .map(
            (response: Response) => {
                const data = response.json();
                return data.Questions;
            }
        );
    }
    
}