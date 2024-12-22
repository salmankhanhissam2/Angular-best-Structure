import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ // Export components to make them available in other modules
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
