import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BootmodelComponent } from './bootmodel/bootmodel.component';


const approuting: Routes = [

  {path:'modal', component:BootmodelComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(approuting)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
