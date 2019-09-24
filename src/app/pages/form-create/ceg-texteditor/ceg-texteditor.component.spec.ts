import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CegTexteditorComponent } from './ceg-texteditor.component';

describe('CegTexteditorComponent', () => {
  let component: CegTexteditorComponent;
  let fixture: ComponentFixture<CegTexteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CegTexteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CegTexteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
