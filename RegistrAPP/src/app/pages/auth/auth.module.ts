import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
