import { Component, OnInit } from '@angular/core';
import { Cloth } from '../cloth';
import {CLOTHES} from '../mock-clothes';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes = CLOTHES;
  selectedCloth: Cloth;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cloth: Cloth): void{
    this.selectedCloth = cloth;
  }

}
