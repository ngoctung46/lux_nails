import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { HeaderComponent } from './header.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [BannerComponent, HeaderComponent],
  exports: [ MenuModule, BannerComponent ]
})
export class HeaderModule { }
