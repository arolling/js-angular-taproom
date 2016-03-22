import { Component } from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import {Keg} from './keg.model';
import {NewKegComponent} from './new-keg.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, NewKegComponent],
  template: `
    <div class="jumbotron">
      <h1>Tap Room Management</h1>
    </div>
    <div class="container">
      <keg-list [kegList]="kegs"> </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Juice", "Great Notion", 175, 6.8, 0),
      new Keg("Blonde IPA", "Pfriem", 203, 7.2, 1),
      new Keg("8-bit", "Great Plains", 150, 5.5, 2)
    ];
  }
}
