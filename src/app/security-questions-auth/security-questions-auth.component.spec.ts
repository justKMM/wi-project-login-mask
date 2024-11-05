import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionsAuthComponent } from './security-questions-auth.component';

describe('SecurityQuestionsAuthComponent', () => {
  let component: SecurityQuestionsAuthComponent;
  let fixture: ComponentFixture<SecurityQuestionsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityQuestionsAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityQuestionsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
