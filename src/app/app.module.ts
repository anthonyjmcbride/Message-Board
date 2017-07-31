import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { MessagesComponent } from './messages-component'
import { AppComponent }  from './app.component';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, MdButtonModule, MdCheckboxModule, MdCardModule ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
