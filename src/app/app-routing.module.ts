import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClothesComponent} from './clothes/clothes.component';
import { NewItemComponent } from './new-item/new-item.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {path: 'clothes', component: ClothesComponent },
  {path: 'NewItem', component: NewItemComponent },
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
   ]
})
export class AppRoutingModule {}