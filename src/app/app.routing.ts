import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PrayerTimesComponent } from './components/prayertimes/prayertimes.component';
import { DuahsComponent } from './components/duahs/duahs.component';
import { ContactComponent } from './components/contact/contact.component';
import { AssistComponent } from './components/assist/assist.component';
import { EditComponent } from './components/edit/edit.component';

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
    },
    {
        path:'assist',
        component: AssistComponent,
        data: {
            name: 'Assist',
            showInNav: true
        }
    },
    {
        path:'edit',
        component: EditComponent,
        data: {
            name: 'Edit'
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
