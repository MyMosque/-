import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrayerService {
    private prayerData:string;

    constructor(private _http: Http){
        console.log("Prayer service ready..");
        //this.prayerData = "/assets/prayertimes.json";
        this.prayerData = "/assets/calendar.json";
        console.log(this.getPrayerData());
    }

    getPrayerData() {
        return this._http.get(this.prayerData)
                .map(res => res.json());
    }

}