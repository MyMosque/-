import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PrayerTimesComponent } from './components/prayertimes/prayertimes.component';
import { DuahsComponent } from './components/duahs/duahs.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent,
        data: { 
            name: 'Home',
            showInNav: true 
        }
    },
    {
        path:'prayer-times',
        component: PrayerTimesComponent,
        data: { 
            name: 'Prayer times',
            showInNav: true 
        }
    },
    {
        path:'duahs',
        component: DuahsComponent,
        data: { 
            name: 'Duahs',
            showInNav: true 
        }
    },
    {
        path:'contact',
        component: ContactComponent,
        data: { 
            name: 'Contact',
            showInNav: true 
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);