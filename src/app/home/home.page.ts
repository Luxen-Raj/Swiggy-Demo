import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './../config/config'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foodList: any=[];

  constructor(
    public router: Router,
    public Config: Config,
  ) {

    this.foodList = [
      {
        "name":"Achija Veg Restaurants.avif",
        "photo_url":"../assets/Achija Veg Restaurants.avif",
        "quantity":"One Unit",
        "id":2,
        "price": "₹250 for two",
        "spcial": "North Indian, Snacks"
      },
      {
        "name":"Burger King.avif",
        "photo_url":"../assets/Burger King.avif",
        "quantity":"One Unit",
        "id":7,
        "price": "₹780 for two",
        "spcial": "Fast Food, Snacks, North Indian"

      },
      {
        "name":"Janata Tawa And Grill.avif",
        "photo_url":"../assets/Janata Tawa And Grill.avif",
        "quantity":"One Unit",
        "id":10,
        "price": "₹570 for two",
        "spcial": "Snacks, North Indian, Desserts"
      },
      {
        "name":"Kurla Juicy Hut.avif",
        "photo_url":"../assets/Kurla Juicy Hut.avif",
        "quantity":"One Unit",
        "id":11,
        "price": "₹300 for two",
        "spcial": "Chinese, Fast Food, Desserts"
      },
      {
        "name":"La Pino'z Pizza.avif",
        "photo_url":"../assets/La Pino'z Pizza.avif",
        "quantity":"One Unit",
        "id":13,
        "price": "₹600 for two",
        "spcial": "Beverage, North Indian"
      },
      {
        "name":"Mao Restaurant.avif",
        "photo_url":"../assets/Mao Restaurant.avif",
        "quantity":"One Bunch",
        "id":16,
        "price": "₹1350 for two",
        "spcial": "Chinese, Fast Food, Desserts"
      },
      {
        "name":"McDonald's.avif",
        "photo_url":"../assets/McDonald's.avif",
        "quantity":"One Kg",
        "id":18,
        "price": "₹1450 for two",
        "spcial": "Fast Food, Desserts, Beverage"
      },
      {
        "name":"New Lajawaab Seekh Corner.avif",
        "photo_url":"../assets/New Lajawaab Seekh Corner.avif",
        "quantity":"One Kg",
        "id":19,
        "price": "₹1150 for two",
        "spcial": "North Indian, Biryani, Mughlai, Chinese"
      },
      {
        "name":"/Rangoon Zaika.avif",
        "photo_url":"../assets//Rangoon Zaika.avif",
        "quantity":"One container",
        "id":20,
        "price": "₹650 for two",
        "spcial": "Desserts, Beverage"
      },
      {
        "name":"Yasin's Food Innavif.avif",
        "photo_url":"../assets/Yasin's Food Innavif.avif",
        "quantity":"One container",
        "id":20,
        "price": "₹350 for two",
        "spcial": "Mughlai, Chinese, Fast Food"
      }
    ]

  }

  viewFood(food: any){
    // this.Config.setData(food)
    this.Config.sendData(food);
    this.router.navigate(['/foodsView'])
  }
}
