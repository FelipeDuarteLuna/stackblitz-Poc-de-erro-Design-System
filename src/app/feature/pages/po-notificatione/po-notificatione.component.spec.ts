import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { PoNotificationeComponent } from './po-notificatione.component';
import { PoNotificationService } from '@po-ui/ng-components';

describe('PoNotificationeComponent', () => {
  let component: PoNotificationeComponent;
  let fixture: ComponentFixture<PoNotificationeComponent>;
  let notificationService: PoNotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoNotificationeComponent],
      providers: [PoNotificationService],
    }).compileComponents();

    fixture = TestBed.createComponent(PoNotificationeComponent);
    notificationService = TestBed.inject(PoNotificationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show notification when button is clicked', fakeAsync(() => {
    const notificationSpy = spyOn(notificationService, 'success');

    fixture.detectChanges();
    const buttonElement =
      fixture.debugElement.nativeElement.querySelector('button');
    buttonElement.click();

    tick(500); // Simulate notification delay

    expect(notificationSpy).toHaveBeenCalledWith('PO Notification!');
  }));

  it('should show notification when button is clicked', fakeAsync(() => {
    const notificationSpy = spyOn(notificationService, 'error');

    fixture.detectChanges();

    const allButtons =
      fixture.debugElement.nativeElement.querySelectorAll('button');
    const secondButton = allButtons[1];

    secondButton.click();

    expect(notificationSpy).toHaveBeenCalledWith('PO Notification!Error');
  }));

  it(`${PoNotificationeComponent.name} - should have as title 'PO UI`, () => {
    expect(PoNotificationeComponent.name).toEqual('PoNotificationeComponent');
  });
});
