import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    let string: any = 'ABCDEFGHI'
    let string2 = string.split('')

    let reversedString : any = ''
    string2.forEach((val: any, index: any) => {
      reversedString = reversedString + string2[string2.length - (index + 1)]
    });
    console.log('reversedString', reversedString)

  }

  ionViewWillEnter(){
  }

}
