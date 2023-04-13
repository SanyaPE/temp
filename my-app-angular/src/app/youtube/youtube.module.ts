import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubeModule { }
