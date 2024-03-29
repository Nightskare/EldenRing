import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTalismanComponent } from './tableau-talisman.component';

describe('TableauTalismanComponent', () => {
  let component: TableauTalismanComponent;
  let fixture: ComponentFixture<TableauTalismanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableauTalismanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauTalismanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
