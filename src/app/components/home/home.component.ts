import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  page = 'home';
  private content:any;

  constructor(private _contentService: ContentService) {
    this._contentService.getContentData().subscribe(c=>{
      this.content = c;
    });
  }
}
