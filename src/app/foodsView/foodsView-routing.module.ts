import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsViewPage } from './foodsView.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsViewPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsViewPageRoutingModule {}
