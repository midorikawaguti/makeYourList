import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { List } from '../../../Shared/Models/List';
import { ListService } from '../../../services/list.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  listsArr$!: Observable<List[]>;

  constructor( private listService: ListService){
  }

  ngOnInit(){
    this.listsArr$ = this.listService.GetAllLists();
  }
}
