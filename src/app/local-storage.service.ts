import { Injectable } from '@angular/core';
import { Cloth } from '../app/cloth';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  clothes: Cloth[];
  constructor() { }

  getItems() {

    if (localStorage.getItem('items') === null) {

      this.clothes = [];

    } else {

      this.clothes = JSON.parse(localStorage.getItem('items'));

    }

    return this.clothes;

  }

  addItem(cloth: Cloth) {

    this.clothes.push(cloth);

    let clothes = [];

    if (localStorage.getItem('items') === null) {

      clothes = [];

      clothes.push(cloth);

      localStorage.setItem('items', JSON.stringify(clothes));

    } else {

      clothes = JSON.parse(localStorage.getItem('items'));

      clothes.push(cloth);

      localStorage.setItem('items', JSON.stringify(clothes));

    }

  }

  deleteItem(cloth: Cloth) {

    for (let i = 0; i < this.clothes.length; i++) {

      if (cloth == this.clothes[i]) {

        this.clothes.splice(i, 1);

        localStorage.setItem('items', JSON.stringify(this.clothes));

      }

    }

  }
}
