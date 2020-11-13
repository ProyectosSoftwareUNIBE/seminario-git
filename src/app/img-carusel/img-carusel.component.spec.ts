import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCaruselComponent } from './img-carusel.component';

describe('ImgCaruselComponent', () => {
  let component: ImgCaruselComponent;
  let fixture: ComponentFixture<ImgCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
