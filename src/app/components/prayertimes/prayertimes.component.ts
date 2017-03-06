import { Component } from '@angular/core';
import { PrayerService } from '../../services/prayer.service';
import { Prayer } from '../../models/prayer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'prayertimes',
  templateUrl: './prayertimes.component.html',
  styleUrls: ['./prayertimes.component.css'],
  host: {
    '(window:keydown)': 'navigate($event)'
  }
})

export class PrayerTimesComponent {  
  private today: number = Date.now();
  private sToday: string;
  private prayerTimes:any;
  private todaysPrayers:any[];
  private currentPrayer:any[];

  constructor(private _prayerService: PrayerService, private datepipe: DatePipe) {
    this.prayerTimes = [];
    this.todaysPrayers = [];
    this.sToday = datepipe.transform(this.today, 'dd/MM/yyyy');
    this.pagePrayer();
    this.currentPrayer = [{
      fajr:"",
      zuhr:"",
      asr:"",
      maghrib:"",
      esha:""
    }]; 
  }

  pagePrayer(direction?:String) {
    if (direction==='Right')
    {
      this.today = this.today + 86400000;      
    }
    if (direction==='Left')
    {
      this.today = this.today - 86400000;      
    }
    this.sToday = this.datepipe.transform(this.today, 'dd/MM/yyyy');
    this._prayerService.getPrayerData().subscribe(p =>{
        this.prayerTimes = p;
        p.filter(f => f[0] === this.sToday)
        .forEach(i=>this.todaysPrayers=i);
    });
  }

  setCurrentPrayer() {

  }
}
