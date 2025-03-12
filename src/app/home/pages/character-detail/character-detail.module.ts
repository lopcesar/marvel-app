import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';
import { CharacterDetailPage } from './character-detail.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailPageRoutingModule,
    TranslateModule,
  ],
  declarations: [CharacterDetailPage]
})
export class CharacterDetailPageModule {}
