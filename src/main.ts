import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { PoMenuModule, PoModule, PoPageModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoNotificationeComponent } from './app/feature/pages/po-notificatione/po-notificatione.component';

bootstrapApplication(PoNotificationeComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      PoModule,
      PoTemplatesModule,
      PoMenuModule,
      PoPageModule
    ),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
