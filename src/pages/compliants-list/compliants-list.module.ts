import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompliantsListPage } from './compliants-list';

@NgModule({
  declarations: [
    CompliantsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompliantsListPage),
  ],
  exports: [
    CompliantsListPage
  ]
})
export class CompliantsListPageModule {}
