import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauArmorComponent } from './tableau-armor.component';

describe('TableauArmorComponent', () => {
  let component: TableauArmorComponent;
  let fixture: ComponentFixture<TableauArmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableauArmorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
