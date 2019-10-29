import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ToolsListComponent} from './components/tools-list/tools-list.component';


const routes: Routes = [
  {
    path: '',
    component: ToolsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
