import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {
    private contentData:string;

    constructor(private _http: Http){
        console.log("Content service ready..");
        this.contentData = "/assets/content.json";
    }

    getContentData() {
        return this._http.get(this.contentData)
                .map(res => res.json());
    }
}
