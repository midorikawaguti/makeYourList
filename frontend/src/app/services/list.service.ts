import { Injectable } from '@angular/core';
import { List } from '../Shared/Models/List';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from '../Shared/Models/Item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listItems: Item[] = [];

  listsArray: List[] = [
    new List(1,'Grocery', true, this.listItems ),
    new List(2, 'ToDo', false, this.listItems ),
    new List(3,'Books', true, this.listItems ),

  ]

  constructor() { }

  private listsSubject: BehaviorSubject<List[]> = new BehaviorSubject<List[]>(this.listsArray);


  GetAllLists(): Observable<List[]>{
    return this.listsSubject.asObservable();
  }

  AddList(newList: List): void {
    this.listsArray.push(newList);
    this.listsSubject.next(this.listsArray); //Emit the updated list of lists to any subscribers of listsSubject.
  }

  RemoveList(index: number): void{
    this.listsArray.splice(index, 1);
    this.listsSubject.next(this.listsArray);
  }

  UpdateList(index: number, updatedList: List): void {
    this.listsArray[index] = updatedList;
    this.listsSubject.next(this.listsArray);
  }

}
