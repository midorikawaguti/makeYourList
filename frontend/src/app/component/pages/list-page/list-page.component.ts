import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ListItemService } from '../../../services/list-item.service';
import { ListService } from '../../../services/list.service';

import { Item } from '../../../Shared/Models/Item';
import { List } from '../../../Shared/Models/List';
import { FormsModule } from '@angular/forms';

import { CreateListComponent } from "../../partials/create-list/create-list.component";
import { CreateItemComponent } from "../../partials/create-item/create-item.component";



@Component({
    selector: 'app-list-page',
    standalone: true,
    templateUrl: './list-page.component.html',
    styleUrl: './list-page.component.scss',
    imports: [CommonModule, FormsModule, CreateListComponent, CreateItemComponent]
})
export class ListPageComponent {

  itemsArr$!: Observable<Item[]>;
  listId!: number; //definite assignment assertion. It tells TypeScript that listId will be assigned a value before it's accessed


  constructor(private listsService: ListService,
    private listItemService:ListItemService,
    private route: ActivatedRoute){}

    ngOnInit() {

      //subscribes to changes in the route parameters
      this.route.params.subscribe(params => {
        this.listId = +params['ListID']; //extracts the 'id' parameter from the route parameters. The plus sign (+) before params['id'] is used to convert the parameter value to a number.
        //console.log("listId:", this.listId);
        const list = this.listsService.listsArray.find(list => list.ListID === this.listId);

        if (list) {
          this.itemsArr$ = this.listItemService.GetAllItems(list);
        }
      });
    }

    onRemoveItem(itemID: number) {
      const list = this.listsService.listsArray.find(list => list.ListID === this.listId); //Get the list where the item is located

      if(list){
        const items = list.Items; // Get the item  array where the item to remove is located
        const itemIndex = items.findIndex(item => item.ItemID === itemID); // Find index of listItem with given ID
        console.log("list:", list);
        console.log("itemIndex:", itemIndex);

        if (itemIndex !== -1) { // Check if item with given ID exists
          this.listItemService.RemoveItem(itemIndex, list); // Remove item using its index
        } else {
          alert("Item not found");
        }
      }
    }

    onEditItem(item: Item) {
      item.IsEditing = true;
      console.log("IsEditing Item:", item.IsEditing)
    }

    onCheckItem(item: Item) {
      item.ItemStatus === !item.ItemName;
      console.log("item.ItemStatus:", item.ItemStatus)
    }

    onSaveEditedItem (itemID: number, newItemName: string) {

      const list = this.listsService.listsArray.find(list => list.ListID === this.listId); // Find index of list with given ID
      //const item = this.listsService.listsArray[this.listId].Items.find(item => item.ItemID === itemID);

      if(list){
        const items = list.Items; // Get the item  array where the item to remove is located
        const itemIndex = items.findIndex(item => item.ItemID === itemID); //

        if (itemIndex !== -1) { // Check if item with given ID exists
          list.Items[itemIndex].ItemName = newItemName;
          this.listItemService.UpdateItem(itemIndex, list, list.Items[itemIndex]);

        } else {
          alert("Item not found");
        }
        list.Items[itemIndex].IsEditing = false;
      }

    }

}
