import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { List } from '../../../Shared/Models/List';

import { ListService } from '../../../services/list.service';
import { Observable, map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @ViewChild('editName') public editListName!: ElementRef;

  listsArr$!: Observable<List[]>;

    constructor(private listsService: ListService){}

    ngOnInit(){
      this.listsArr$ = this.listsService.GetAllLists();

    }

    onRemoveList(listID: number) {
      const lists = this.listsService.listsArray; // Get the lists array from the service
      const index = lists.findIndex(list => list.ListID === listID); // Find index of list with given ID

      if (index !== -1) { // Check if list with given ID exists
        this.listsService.RemoveList(index); // Remove list using its index
      } else {
        alert("List not found");
      }
    }

    onEditList(list: List) {
      list.IsEditing = true;
    }

    onCheckList(list: List) {
      list.ListStatus === !list.ListName;

    }

    onSaveEdit(listID: number, newListName: string) {
      const lists = this.listsService.listsArray; // Get the lists array from the service
      const index = lists.findIndex(list => list.ListID === listID); // Find index of list with given ID

      if (lists[index].ListName !== newListName) {
        // Only update the list name and save if it has changed
        lists[index].ListName = newListName;
        this.listsService.UpdateList(index, lists[index]);
      }

      lists[index].IsEditing = false;

    }

}

