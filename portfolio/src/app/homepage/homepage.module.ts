import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { TopMenuModule } from '../top-menu/top-menu.module';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    TopMenuModule,
  ]
})
export class HomepageModule { }
