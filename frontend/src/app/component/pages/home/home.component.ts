import { Component } from '@angular/core';
import { ListComponent } from "../../partials/list/list.component";
import { CreateListComponent } from "../../partials/create-list/create-list.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ListComponent, CreateListComponent]
})
export class HomeComponent {

}
