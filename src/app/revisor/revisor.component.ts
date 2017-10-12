import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-revisor',
  templateUrl: './revisor.component.html',
  styleUrls: ['./revisor.component.css']
})
export class RevisorComponent implements OnInit {

  revisorsRef: AngularFireList<any>;
  revisors: Observable<any[]>;
  constructor( public af: AngularFireDatabase) {
    this.revisorsRef = af.list('/revisor');
    this.revisors = this.revisorsRef.valueChanges();    
  };

  ngOnInit() {
  }

}
