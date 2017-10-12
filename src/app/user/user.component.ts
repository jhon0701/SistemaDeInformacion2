import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<firebase.User>;
  username: AngularFireList<{}>;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.username = af.list('/users');
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


  ngOnInit() {
  }

}
export class Usuario{
  name : string;
  lastname : string;
  username : string;
  email : string;
  password : string;
}
