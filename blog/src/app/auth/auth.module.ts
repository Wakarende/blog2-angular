import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';


const authRouting: ModuleWithProviders<any> = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // AuthComponent
  ],

  providers: []
})

export class AuthModule { }