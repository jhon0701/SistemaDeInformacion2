import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorPublicacionComponent } from './director-publicacion.component';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from "angularfire2/database-deprecated"; 

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

describe('DirectorPublicacionComponent', () => {
  let component: DirectorPublicacionComponent;
  let fixture: ComponentFixture<DirectorPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    alert(fixture);
  });
});
