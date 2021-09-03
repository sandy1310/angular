import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootmodelComponent } from './bootmodel.component';

describe('BootmodelComponent', () => {
  let component: BootmodelComponent;
  let fixture: ComponentFixture<BootmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
