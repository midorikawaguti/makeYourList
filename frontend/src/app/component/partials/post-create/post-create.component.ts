import { ChangeDetectorRef,
  Component,

} from '@angular/core';

import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {

}
