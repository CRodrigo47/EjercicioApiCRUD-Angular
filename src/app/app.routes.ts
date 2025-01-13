import { Routes } from '@angular/router';
import { JugueteListComponent } from './components/juguete-list/juguete-list.component';
import { JugueteModelComponent } from './components/juguete-model/juguete-model.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'juguetes/list',
        pathMatch: 'full'
    },
    {
        path: 'juguetes/list',
        component: JugueteListComponent
    },
    {
        path: 'juguetes/add',
        component: JugueteModelComponent
    },
    {
        path: 'juguetes/edit/:id',
        component: JugueteModelComponent
    },
    {
        path: '**',
        redirectTo: 'juguetes/list',
        pathMatch: 'full'
    }
];
