import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonpageComponent } from './uncommonpage.component';

describe('UncommonpageComponent', () => {
  let component: UncommonpageComponent;
  let fixture: ComponentFixture<UncommonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UncommonpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncommonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
