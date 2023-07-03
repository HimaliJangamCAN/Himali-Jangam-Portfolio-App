import { Component } from '@angular/core';
import { ModalCreationService } from './shared/services/modal-creation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HimaliPortfolio';

  constructor( public modalCreationService: ModalCreationService) {

  }
}
