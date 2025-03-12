import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharactersPageRoutingModule } from './characters-routing.module';
import { CharactersPage } from './characters.page';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '@/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule,
    TranslateModule,
    ShareModule
  ],
  exports: [],
  declarations: [CharactersPage],
})
export class CharactersPageModule {}