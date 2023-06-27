import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxSliderModule, IgxCheckboxModule, IgxSliderModule, IgxCheckboxModule } from '@infragistics/igniteui-angular';
import { GridSliderSwitchComponent } from './grid-slider-switch.component';

describe('GridSliderSwitchComponent', () => {
  let component: GridSliderSwitchComponent;
  let fixture: ComponentFixture<GridSliderSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSliderSwitchComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxSliderModule, IgxCheckboxModule, IgxSliderModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSliderSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
