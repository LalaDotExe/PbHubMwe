import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilepagePage } from './profilepage.page';

describe('ProfilepagePage', () => {
  let component: ProfilepagePage;
  let fixture: ComponentFixture<ProfilepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
