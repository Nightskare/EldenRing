import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauWeaponComponent } from './tableau-weapon.component';

describe('TableauWeaponComponent', () => {
  let component: TableauWeaponComponent;
  let fixture: ComponentFixture<TableauWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableauWeaponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
