import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent, FooterComponent, HeaderComponent, NopagefoundComponent],
  exports: [SidebarComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
