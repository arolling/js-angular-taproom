import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <input placeholder="Name" type="text" class="input-lg" #userName>
    <input placeholder="Brand" type="text" class="input-lg" #userBrand>
    <input placeholder="Price" type="number" class="input-lg" #userPrice>
    <input placeholder="Alcohol By Volume" type="number" class="input-lg" #userAbv>
    <button (click)="addKeg(userName, userBrand, userPrice, userAbv)" class="btn-lg add-button">Add Keg</button>
  </div>

  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  public specs: String[];
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAbv: HTMLInputElement){
    this.specs = [
      userName.value,
      userBrand.value,
      userPrice.value,
      userAbv.value
    ];
    console.log(this.specs);
    this.onSubmitNewKeg.emit(this.specs);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAbv.value = "";

  }
}
