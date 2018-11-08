import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms/src/model';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
    

  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
