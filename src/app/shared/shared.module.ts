import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SpinnerComponent } from './sppiner/sppiner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, IonicModule],
  exports: [SpinnerComponent]
})
export class ShareModule {}
