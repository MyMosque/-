import { Component, style, animate, transition, state, trigger } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'scaleX(1)', opacity: 1})),
      transition('void => *', [
        style({transform: 'scaleX(1)', opacity: 0}),
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Globe Town Mosque';

  constructor(private router: Router) {
    //this.router.navigate(["prayer-times"], { replaceUrl: false });
  }
}
