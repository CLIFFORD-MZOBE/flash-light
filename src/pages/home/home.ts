import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {

  }
  switchon(){
    this.flashlight.switchOn();
  }

  switchoff(){
    this.flashlight.switchOff();
  }
  

}

