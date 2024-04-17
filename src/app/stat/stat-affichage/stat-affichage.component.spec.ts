import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAffichageComponent } from './stat-affichage.component';

describe('StatAffichageComponent', () => {
  let component: StatAffichageComponent;
  let fixture: ComponentFixture<StatAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatAffichageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
