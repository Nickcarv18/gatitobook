import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelheAnimalComponent } from './datelhe-animal.component';

describe('DatelheAnimalComponent', () => {
  let component: DatelheAnimalComponent;
  let fixture: ComponentFixture<DatelheAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatelheAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatelheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
