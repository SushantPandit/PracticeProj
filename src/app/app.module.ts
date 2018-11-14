import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms/src/model';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  exports: [
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
