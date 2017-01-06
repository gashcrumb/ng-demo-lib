import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GreeterComponent} from './greeter.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [GreeterComponent],
  exports: [GreeterComponent]
})
export class GreeterModule {
}
