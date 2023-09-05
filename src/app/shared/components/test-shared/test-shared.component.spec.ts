import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharedComponent } from './test-shared.component';

describe('TestSharedComponent', () => {
  let component: TestSharedComponent;
  let fixture: ComponentFixture<TestSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSharedComponent]
    });
    fixture = TestBed.createComponent(TestSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
