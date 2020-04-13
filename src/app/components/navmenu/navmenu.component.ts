import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  host: {
    '(window:keydown)': 'navigate($event)'
  }
})

export class NavMenuComponent {
  private nav:any;

  constructor(private router: Router) {
    this.nav = [];
    router.config
      .filter(i => i.data["showInNav"])
      .forEach(i => this.nav.push(
        {
          "path": i.path,
          "name": i.data["name"],
          "isActive": this.isActive("/"+i.path),
          "isCurrent": this.isCurrent("/"+i.path),
          "isHidden": false
        }
      ));
  }

  getKeybordRoute(event:any):string {


    switch(event) {
      case 38:
        alert("A");
        //this.nav.indexOf
        break;
      case 40:
        alert("B");
        break;
    }

    return "#";
  }

  navigate(event) {
    this.router.navigate([this.getKeybordRoute(event.keyCode)], { replaceUrl: true });
  }

  isActive (route:String):Observable<boolean> {
    return new Observable<boolean>( observer => {
      this.router.events.filter(e => e instanceof NavigationEnd)
                        .subscribe((event:Event) => {
                          if (route == event.url) {
                            observer.next(true);
                          }
                          else {
                            observer.next(false);
                          }
      })
    });
  }

  isCurrent (route:String):boolean {
    if (route == this.router.url) {
      return true;
    }
    else {
      return false;
    }
  }

  tglMenu() {
    console.log(this.nav);
    for(let item of this.nav) {

        if (item.isHidden) {
          item.isHidden = false;
        }
        else{
          item.isHidden = true;
        }

    };
  }
}
