import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSdkComponent } from './custom-sdk.component';

describe('CustomSdkComponent', () => {
  let component: CustomSdkComponent;
  let fixture: ComponentFixture<CustomSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
