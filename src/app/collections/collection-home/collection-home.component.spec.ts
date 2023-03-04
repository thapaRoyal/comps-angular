import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHomeComponent } from './collection-home.component';

describe('CollectionHomeComponent', () => {
  let component: CollectionHomeComponent;
  let fixture: ComponentFixture<CollectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
