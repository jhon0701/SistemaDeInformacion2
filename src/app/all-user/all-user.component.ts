import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  user: Observable<firebase.User>;
  username: AngularFireList<{}>;
  allUser:Observable<any[]>;
  
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.username = af.list('/users');
    this.allUser = this.username.valueChanges();
    this.user = this.afAuth.authState;
    
  };
  ngOnInit() {
  }

}
