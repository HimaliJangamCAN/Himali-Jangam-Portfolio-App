import { TestBed } from '@angular/core/testing';

import { ModalCreationService } from './modal-creation.service';

describe('ModalCreationService', () => {
  let service: ModalCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
