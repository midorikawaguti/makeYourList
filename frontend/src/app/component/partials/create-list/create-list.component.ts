import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { Item } from '../../../Shared/Models/Item';
import { List } from '../../../Shared/Models/List';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.scss'
})
export class CreateListComponent {

  @ViewChild('inputName') public inputListName!: ElementRef;
  listStatus: boolean = false;
  listItems: Item[] = [];

  constructor(private listService: ListService) {}

  OnCreateList(listName: string): void {
    const newlistID = this.listService.listsArray.length +1;
    const newList = new List(newlistID, listName, this.listItems);
    this.listService.AddList(newList);

    this.inputListName.nativeElement.value = '';

    console.log(newList);
  }

  OnCreateItem(itemName: string): void {
    const newlistID = this.listService.listsArray.length +1;
    const newList = new List(newlistID, itemName, this.listItems);
    this.listService.AddList(newList);

    this.inputListName.nativeElement.value = '';

    console.log(newList);
  }
}
