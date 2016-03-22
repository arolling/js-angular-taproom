import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegComponent} from './keg.component';
import {NewKegComponent} from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  template: `
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    <h3>All Current Kegs:</h3>
    <div class="list-group">
      <keg-display *ngFor="#currentKeg of kegList" [keg]="currentKeg" class="list-group-item"></keg-display>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  createKeg(specs: string[]):void {
    this.kegList.push(
      new Keg(specs[0], specs[1], parseInt(specs[2]), parseFloat(specs[3]), this.kegList.length)
    );
  }
}
