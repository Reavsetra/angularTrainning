import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    TitleComponent
  ]
})
export class SharedModule { }
