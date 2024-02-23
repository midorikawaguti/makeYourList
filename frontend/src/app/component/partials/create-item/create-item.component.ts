import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { ListItemService } from '../../../services/list-item.service';
import { Item } from '../../../Shared/Models/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.scss'
})
export class CreateItemComponent {

  @ViewChild('inputName') public inputItemName!: ElementRef;
  listId: any;

  constructor(private listService: ListService, private listItemsService: ListItemService, private route: ActivatedRoute) {}

  ngOnInit() {
    //subscribes to changes in the route parameters
    this.route.params.subscribe(params => {
       this.listId = +params['ListID']; //extracts the 'id' parameter from the route parameters. The plus sign (+) before params['id'] is used to convert the parameter value to a number.

    });
  }

  OnCreateItem(itemName: string): void {
    const listName = this.listService.listsArray[this.listId];
    const newItemID = listName.Items.length +1;
    const newItem = new Item(newItemID, itemName, new Date());

    this.listItemsService.AddItem(newItem, listName );

    this.inputItemName.nativeElement.value = '';

    console.log(newItem);
  }
}
