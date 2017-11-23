import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-director-publicacion',
  templateUrl: './director-publicacion.component.html',
  styleUrls: ['./director-publicacion.component.css']
})

export class DirectorPublicacionComponent implements OnInit {

  trabajosRef: AngularFireList<any>;
  trabajos: Observable<any[]>;
  constructor(public af: AngularFireDatabase) { 
    this.trabajosRef = af.list('/trabajos');
    this.trabajos = this.trabajosRef.valueChanges();  
  }
  send(nameUpdate){
    nameUpdate.ref("estado");

  }
  

  ngOnInit() {
  }

}