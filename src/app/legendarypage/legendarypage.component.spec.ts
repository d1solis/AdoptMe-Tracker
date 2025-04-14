import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendarypageComponent } from './legendarypage.component';

describe('LegendarypageComponent', () => {
  let component: LegendarypageComponent;
  let fixture: ComponentFixture<LegendarypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendarypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendarypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
