import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorPublicacionComponent } from './director-publicacion.component';

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
    expect(component).toBeTruthy();
  });
});
