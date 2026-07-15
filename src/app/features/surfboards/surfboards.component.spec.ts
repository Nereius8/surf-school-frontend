import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfboardsComponent } from './surfboards.component';

describe('SurfboardsComponent', () => {
  let component: SurfboardsComponent;
  let fixture: ComponentFixture<SurfboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfboardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
