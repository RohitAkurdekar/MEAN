import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaadiusComponent } from './raadius.component';

describe('RaadiusComponent', () => {
  let component: RaadiusComponent;
  let fixture: ComponentFixture<RaadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaadiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
