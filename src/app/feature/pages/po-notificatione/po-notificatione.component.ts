import { Component } from '@angular/core';
import {
  PoButtonModule,
  PoNotificationModule,
  PoNotificationService,
  PoPageModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-po-notificatione',
  standalone: true,
  imports: [PoNotificationModule, PoPageModule, PoButtonModule],
  templateUrl: './po-notificatione.component.html',
  styleUrl: './po-notificatione.component.css',
})
export class PoNotificationeComponent {
  constructor(public poNotification: PoNotificationService) {}
}
