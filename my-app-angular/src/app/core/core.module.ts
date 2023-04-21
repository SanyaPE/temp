import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
