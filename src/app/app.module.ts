import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import { DialogConfirmDeleteComponent } from './components/dialog-confirm-delete/dialog-confirm-delete.component';
import { AddToolComponent } from './components/add-tool/add-tool.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolsListComponent,
    DialogConfirmDeleteComponent,
    AddToolComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [
    DialogConfirmDeleteComponent,
    AddToolComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
