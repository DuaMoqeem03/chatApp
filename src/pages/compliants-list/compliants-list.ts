import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Observable} from "rxjs";

/**
 * Generated class for the CompliantsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-compliants-list',
  templateUrl: 'compliants-list.html',
})
export class CompliantsListPage {
  userProfile:Observable<any[]>;
  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider , public alertCtrl: AlertController) {

    this.userProfile=this.firebaseService.getComplaint();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompliantsListPage');
  }

  resolvers(){
    this.navCtrl.push('ChatsPage')
  }

}
