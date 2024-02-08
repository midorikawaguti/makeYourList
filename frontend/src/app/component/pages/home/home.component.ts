import { Component } from '@angular/core';
import { ListComponent } from "../../partials/list/list.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ListComponent]
})
export class HomeComponent {

}
