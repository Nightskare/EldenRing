import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOrLogInComponent } from './sign-in-or-log-in.component';

describe('SignInOrLogInComponent', () => {
  let component: SignInOrLogInComponent;
  let fixture: ComponentFixture<SignInOrLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInOrLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInOrLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
