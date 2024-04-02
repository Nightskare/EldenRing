import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauShieldComponent } from './tableau-shield.component';

describe('TableauShieldComponent', () => {
  let component: TableauShieldComponent;
  let fixture: ComponentFixture<TableauShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableauShieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
