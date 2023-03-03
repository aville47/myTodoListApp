import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTodoComponent } from './menu-todo.component';

describe('MenuTodoComponent', () => {
  let component: MenuTodoComponent;
  let fixture: ComponentFixture<MenuTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
