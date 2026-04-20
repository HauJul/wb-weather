import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the navbar', () => {
    expect(component).toBeTruthy();
  });

  it('toggles the menu state', () => {
    component.openMenu();

    expect(component.menuValue).toBeTrue();
    expect(component.menu_icon).toBe('bi bi-x');

    component.closeMenu();

    expect(component.menuValue).toBeFalse();
    expect(component.menu_icon).toBe('bi bi-list');
  });
});