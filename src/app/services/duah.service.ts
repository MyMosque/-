import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DuahService {
    private duahData:string;

    constructor(private _http: Http){
        console.log("Duah service ready..");
        this.duahData = "/assets/duahs.json";
    }

    getDuahData() {
        return this._http.get(this.duahData)
                .map(res => res.json());
    }

}