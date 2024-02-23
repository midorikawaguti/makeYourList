import { Injectable } from '@angular/core';
import { List } from '../Shared/Models/List';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../Shared/Models/Item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public listsArray: List[] = [
    new List(1, 'Grocery',[
      new Item(1,'Rice', new Date()),
      new Item(2,'Corn', new Date()),
      new Item(3,'Pasta', new Date())
    ]),
    new List(2, 'ToDo', [
      new Item (1,'Send E-mail', new Date()),
      new Item (2,'Pay Bills', new Date()),
      new Item (3,'Read Article', new Date())
    ]),
    new List(3,'Books', [
      new Item (1,'Harry Potter', new Date()),
      new Item (2,'Cinderella', new Date()),
      new Item (3,'Lion King', new Date())
    ]),

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
