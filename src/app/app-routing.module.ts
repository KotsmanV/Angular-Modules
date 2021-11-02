import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './generalComponents/home/home.component';
import { NotFoundComponent } from './generalComponents/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'elements', 
    loadChildren: () => import('./modules/elements/elements.module').then((m)=>m.ElementsModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./modules/collections/collections.module').then((m)=>m.CollectionsModule)
  },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
