import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkserviceComponent } from './linkservice.component';

describe('LinkserviceComponent', () => {
  let component: LinkserviceComponent;
  let fixture: ComponentFixture<LinkserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
