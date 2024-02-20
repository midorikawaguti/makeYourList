import { Injectable } from '@angular/core';
import { Item } from '../Shared/Models/Item';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor() { }

  itemList: Item[] = [
    new Item('Rice'),
    new Item('Pasta'),
    new Item('Flour'),
    new Item('Water'),
    new Item('Chocolate'),
    new Item('Milk'),

  ]

  GetAllItems(){
    return this.itemList;
  }
}
