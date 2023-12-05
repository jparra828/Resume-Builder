import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMakeComponent } from './resume-make.component';

describe('ResumeMakeComponent', () => {
  let component: ResumeMakeComponent;
  let fixture: ComponentFixture<ResumeMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeMakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
