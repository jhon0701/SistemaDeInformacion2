import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserComponent } from './user/user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { RevisorComponent } from './revisor/revisor.component';

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
    AppComponent,
    UserComponent,
    AllUserComponent,
    RevisorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'user',
        component: UserComponent

      },
      {
        path: 'alluser',
        component: AllUserComponent

      },
      {
        path: 'revisor',
        component: RevisorComponent

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
