import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchComponent } from './user-search.component';
import { FormBuilder, ReactiveFormsModule , FormGroup } from '@angular/forms';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Other test cases here...

  it('should update the placeholder text based on window width', () => {
    // Mock the nativeElement
    const mockInput = {
      nativeElement: document.createElement('input'),
    };
    spyOn(component, 'updatePlaceholderText').and.callThrough();

    // Set the usernameInput to the mock input
    component.usernameInput = mockInput;

    // Create a mockRenderer object
    const mockRenderer = {
      setAttribute: (element: { setAttribute: (arg0: any, arg1: any) => void; }, attribute: any, value: any) => {
        element.setAttribute(attribute, value);
      },
    };

    // Call the method with the mockRenderer
    // component.renderer = mockRenderer as any; // Allow setting private property
    component.updatePlaceholderText();

    // Simulate a window resize event with width < 768
    window.innerWidth = 600;
    const resizeEvent = new Event('resize');
    component.onResize(resizeEvent);

    // Expect the placeholder text to be 'Explore GitHub Users...'
    expect(component.usernameInput.nativeElement.getAttribute('placeholder')).toBe(
      'Explore GitHub Users...'
    );

    // Simulate a window resize event with width >= 768
    window.innerWidth = 800;
    component.onResize(resizeEvent);

    // Expect the placeholder text to be 'Explore GitHub Users and Repositories!'
    expect(component.usernameInput.nativeElement.getAttribute('placeholder')).toBe(
      'Explore GitHub Users and Repositories!'
    );
  });
});
