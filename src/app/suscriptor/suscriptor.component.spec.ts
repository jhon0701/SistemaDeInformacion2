import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptorComponent } from './suscriptor.component';

describe('SuscriptorComponent', () => {
  let component: SuscriptorComponent;
  let fixture: ComponentFixture<SuscriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  try {
      it('should create', () => {
        expect(component.suscriptor).toBeTruthy();
      });
  }
  catch(err) {      
        throw("AngularFire bad conecction");
  }
   try {
      it('should create', () => {
        expect(component.suscriptor.map).toBeLessThanOrEqual(0);
      });
  }
  catch(err) {      
        throw("no funcion defined");
  }
  try {
      it('should Verificate', () => {
        expect(component.suscriptor[0].child('/estado')).toBe("enProceso");
      });
  }
  catch(err) {      
        throw("no acces");
  }
  
});
