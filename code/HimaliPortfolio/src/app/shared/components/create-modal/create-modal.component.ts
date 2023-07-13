import { Component, Input } from '@angular/core';
import { ModalCreationService } from '../../services/modal-creation.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent {

  // @Input() innerHTMLComponent: HTMLElement;
  constructor( public modalCreationService: ModalCreationService ) {}

  closeModal() {
    this.modalCreationService.showModal = false;
  }
}
