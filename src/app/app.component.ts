import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './listUser.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  user: Observable<firebase.User>;
  username: AngularFireList<{}>;
  allUser:Observable<any[]>;
  revisorsRef: AngularFireList<any>;
  revisors: Observable<any[]>;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.username = af.list('/users');
    this.revisorsRef = af.list('/revisor');
    this.revisors = this.revisorsRef.valueChanges();
    this.allUser = this.username.valueChanges();
    this.user = this.afAuth.authState;
    
  };
  usu : Usuario ={
    name : "",
    lastname : "",
    username : "",
    email : "",
    password : ""
  };
  Send() {
    this.username.push(this.usu);
    if(!alert('usuario esta registrado gracias ')){window.location.reload();}
  
  }
}
export class Usuario{
  name : string;
  lastname : string;
  username : string;
  email : string;
  password : string;
}