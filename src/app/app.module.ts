import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PrayerTimesComponent } from './components/prayertimes/prayertimes.component';
import { DuahsComponent } from './components/duahs/duahs.component';
import { ContactComponent } from './components/contact/contact.component';

import { PrayerService } from './services/prayer.service';
import { DuahService } from './services/duah.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PrayerTimesComponent,
    DuahsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PrayerService, DuahService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
