/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddService } from './add.service';

describe('AddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddService]
    });
  });

  it('should ...', inject([AddService], (service: AddService) => {
    expect(service).toBeTruthy();
  }));
});
