import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CoverComponent ],
  exports: [ CoverComponent ]

})
export class CoverModule { }
