import { Routes } from '@angular/router';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { NotFound404Component } from './Components/not-found404/not-found404.component';

export const routes: Routes = [
    {
        path: 'contact',
        component: ContactsComponent
    },
    {
        path: '',
        redirectTo:'/contact',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound404Component
    }
];
