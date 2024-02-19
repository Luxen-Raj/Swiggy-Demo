import { Component } from '@angular/core';
import { Config } from './../config/config'
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-foodsView',
  templateUrl: 'foodsView.page.html',
  styleUrls: ['foodsView.page.scss'],
})
export class FoodsViewPage {
  foodList: any=[];
  selectedFood: any ={};

  constructor(
    public Config: Config,
    public router: Router,
  ) {

  }
  ionViewWillEnter(){
    console.log(this.router.url)
    this.Config.data$.subscribe((receivedData) => {
      console.log(receivedData);
      // this.selectedFood = receivedData ? receivedData : {};
      if(receivedData){
        this.selectedFood = receivedData;
      }else{
        this.goBack()
      }
    });
  }
  goBack(){
    this.router.navigate(['/home'])
  }
  Home(){
    this.router.navigate(['/home'])
  }

}
