import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { List } from '../../../Shared/Models/List';
import { Item } from '../../../Shared/Models/Item';

import { ListService } from '../../../services/list.service';
import { ListItemService } from '../../../services/list-item.service';
import { Observable, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @ViewChild('editName') public editListName!: ElementRef;
  public listStatus: boolean = true;
  listsArr$!: Observable<List[]>;

    constructor(private listsService: ListService){}

    ngOnInit(){
      this.listsArr$ = this.listsService.GetAllLists();

    }

    onRemoveList(listID: number) {
      const lists = this.listsService.listsArray; // Get the lists array from the service
      const index = lists.findIndex(list => list.listID === listID); // Find index of list with given ID

      if (index !== -1) { // Check if list with given ID exists
        this.listsService.RemoveList(index); // Remove list using its index
        alert("List deleted");
      } else {
        alert("List not found");
      }
    }

    onEditList(list: List) {
      list.isEditing = true;
    }

    onCheckList(list: List) {
      list.listStatus === !list.listName;

    }

    onSaveEdit(listID: number, newListName: string) {
      const lists = this.listsService.listsArray; // Get the lists array from the service
      const index = lists.findIndex(list => list.listID === listID); // Find index of list with given ID

      if (lists[index].listName !== newListName) {
        // Only update the list name and save if it has changed
        lists[index].listName = newListName;
        this.listsService.UpdateList(index, lists[index]);
      }

      lists[index].isEditing = false;

    }

}

