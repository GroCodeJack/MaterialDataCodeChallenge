import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { ShowMatsComponent } from './material/show-mats/show-mats.component';
import { AddEditComponent } from './material/add-edit/add-edit.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'material', component:MaterialComponent},
  {path:'', redirectTo:'material', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
