import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-suscriptor',
  templateUrl: './suscriptor.component.html',
  styleUrls: ['./suscriptor.component.css']
})
export class SuscriptorComponent implements OnInit {
  suscriptorRef: AngularFireList<any>;
  suscriptor: Observable<any[]>;
  constructor(public af: AngularFireDatabase) { 
    this.suscriptorRef = af.list('/suscriptor');
    this.suscriptor = this.suscriptorRef.valueChanges();    
  }
  sus  :Suscriptor ={
    estado : "",
    idTrabajo : "",
    idUsuario : ""
  };;
 

  ngOnInit() {
  }

}
export class Suscriptor{
  estado : string;
  idTrabajo : string;
  idUsuario : string;
}