import { Routes } from '@angular/router';

//Component Pages
import { ListComponent } from './component/partials/list/list.component';
import { HomeComponent } from './component/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Homepage',
    component: HomeComponent,
  },
  {
    path: 'Lists',
    title: 'Lists',
    component: ListComponent,
  },
];
