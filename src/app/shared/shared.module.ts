import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponent } from './components/test-shared/test-shared.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    TestSharedComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestSharedComponent,
    CardComponent
  ]
})
export class SharedModule { }
