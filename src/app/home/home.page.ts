import { Component } from '@angular/core';
import { PopoverController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, private modalCtrl: ModalController, private router: Router) {}}
