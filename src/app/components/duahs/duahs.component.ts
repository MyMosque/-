import { Component } from '@angular/core';
import { DuahService } from '../../services/duah.service';

@Component({
  selector: 'duahs',
  templateUrl: './duahs.component.html',
  styleUrls: ['./duahs.component.css']
})

export class DuahsComponent {
  private duahs:any[];

  constructor(private _duahService: DuahService) {
    this._duahService.getDuahData().subscribe(d =>{
        this.duahs = d;
    });
  }

  myClick() {
    alert("Under development, we're looking for volunteers.\n\nTo contribute please send us duah data in above format.\n\nPlease inform us of any errors");
  }
}

