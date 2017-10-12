import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDxKJbC2LTLrCUZZOyp3Hl9S53Wk608BBI",
  authDomain: "proyecto-sistemas-2.firebaseapp.com",
  databaseURL: "https://proyecto-sistemas-2.firebaseio.com",
  projectId: "proyecto-sistemas-2",
  storageBucket: "proyecto-sistemas-2.appspot.com",
  messagingSenderId: "282454954622"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
