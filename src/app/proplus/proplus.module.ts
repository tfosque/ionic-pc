import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProplusPageRoutingModule } from './proplus-routing.module';

import { ProplusPage } from './proplus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProplusPageRoutingModule
  ],
  declarations: [ProplusPage]
})
export class ProplusPageModule {}
