import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrarSdkComponent } from './mirrar-sdk.component';

describe('MirrarSdkComponent', () => {
  let component: MirrarSdkComponent;
  let fixture: ComponentFixture<MirrarSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirrarSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrarSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
