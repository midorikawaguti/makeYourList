import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ListItemService } from '../../../services/list-item.service';
import { ListService } from '../../../services/list.service';

import { Item } from '../../../Shared/Models/Item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {

  itemsArr$!: Observable<Item[]>;


  constructor(private listsService: ListService,
    private listItemService:ListItemService,
    private route: ActivatedRoute){}

    ngOnInit() {

      //subscribes to changes in the route parameters
      this.route.params.subscribe(params => {
        const listId = +params['ListID']; //extracts the 'id' parameter from the route parameters. The plus sign (+) before params['id'] is used to convert the parameter value to a number.
        // const listId = 1;
        const list = this.listsService.listsArray.find(list => list.ListID === listId);

        if (list) {
          this.itemsArr$ = this.listItemService.GetAllItems(list);

        } else {
          // Handle list not found
        }
      });
    }


}
