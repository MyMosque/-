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
    alert("Under development, we're looking for volunteers.\nTo contribute please submit additions in the following format:\nhttps://github.com/townmosque/townmosque.github.io/blob/master/src/assets/duahs.json");
  }
}

