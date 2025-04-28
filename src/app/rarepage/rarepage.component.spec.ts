import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarepageComponent } from './rarepage.component';

describe('RarepageComponent', () => {
  let component: RarepageComponent;
  let fixture: ComponentFixture<RarepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RarepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RarepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
