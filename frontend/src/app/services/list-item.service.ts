import { Injectable } from '@angular/core';
import { Item } from '../Shared/Models/Item';
import { List } from '../Shared/Models/List';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  //public itemsArray : Item[] = [];

  constructor(private listsService: ListService) { }

  private itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  GetAllItems(list: List): Observable<Item[]> {
    this.itemsSubject.next(list.Items); // Update itemsSubject with the items of the provided list
    return this.itemsSubject.asObservable();
  }

  AddItem(newItem: Item, list: List): void {
    list.Items.push(newItem);
    this.itemsSubject.next(list.Items); //Emit the updated list of lists to any subscribers of listsSubject.
  }

  RemoveItem(indexItem: number, list: List): void{
    list.Items.splice(indexItem, 1);
    this.itemsSubject.next(list.Items);
  }

  UpdateItem(indexItem: number, list: List, updatedItem: Item): void {
    list.Items[indexItem] = updatedItem;
    this.itemsSubject.next(list.Items);
  }
 }


