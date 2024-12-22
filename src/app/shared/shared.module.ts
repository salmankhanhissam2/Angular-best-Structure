import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { GenericInputFieldComponent } from './components/generic-input-field/generic-input-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    HighlightDirective,
    FormatDatePipe,
    GenericInputFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[GenericInputFieldComponent]
})
export class SharedModule { }
