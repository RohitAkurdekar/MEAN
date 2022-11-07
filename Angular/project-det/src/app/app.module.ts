import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjDetailsComponent } from './proj-details/proj-details.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RaadiusComponent } from './raadius/raadius.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjDetailsComponent,
    DataBindingComponent,
    RaadiusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
