import { Injectable } from '@angular/core';
import { Item } from '../Shared/Models/Item';
import { List } from '../Shared/Models/List';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(private listsService: ListService) { }


  private itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  // Update itemsSubject based on the provided list
  updateItemsSubject(list: List): void {
    this.itemsSubject.next(list.Items);
  }

  GetAllItems(list: List): Observable<Item[]> {
    console.log("GetAllItems called");
    // Update itemsSubject with the items of the provided list
    this.updateItemsSubject(list);
    return this.itemsSubject.asObservable();
  }
}
