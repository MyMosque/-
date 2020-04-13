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
import { AssistComponent } from './components/assist/assist.component';
import { EditComponent } from './components/edit/edit.component';

import { PrayerService } from './services/prayer.service';
import { DuahService } from './services/duah.service';
import { ContentService } from './services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PrayerTimesComponent,
    DuahsComponent,
    ContactComponent,
    AssistComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ContentService, PrayerService, DuahService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
