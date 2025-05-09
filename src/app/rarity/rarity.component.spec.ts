import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityComponent } from './rarity.component';

describe('RarityComponent', () => {
  let component: RarityComponent;
  let fixture: ComponentFixture<RarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RarityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
