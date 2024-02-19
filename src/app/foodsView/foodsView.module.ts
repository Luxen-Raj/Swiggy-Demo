import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FoodsViewPage } from './foodsView.page';

import { FoodsViewPageRoutingModule } from './foodsView-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsViewPageRoutingModule
  ],
  declarations: [FoodsViewPage]
})
export class FoodsViewPageModule {}
