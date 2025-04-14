import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrararepageComponent } from './ultrararepage.component';

describe('UltrararepageComponent', () => {
  let component: UltrararepageComponent;
  let fixture: ComponentFixture<UltrararepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltrararepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltrararepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
