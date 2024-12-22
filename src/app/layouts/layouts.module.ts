import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../features/auth/auth.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    
  
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    AuthModule
  ]
})
export class LayoutsModule { }
