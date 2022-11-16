import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatsComponent } from './show-mats.component';

describe('ShowMatsComponent', () => {
  let component: ShowMatsComponent;
  let fixture: ComponentFixture<ShowMatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
