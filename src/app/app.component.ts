import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Globe Town Mosque';

  constructor(private router: Router) {
    this.router.navigate(["prayer-times"], { replaceUrl: false });
  }
  
}
