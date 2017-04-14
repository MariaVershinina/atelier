/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShirtService } from './shirt.service';

describe('ShirtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShirtService]
    });
  });

  it('should ...', inject([ShirtService], (service: ShirtService) => {
    expect(service).toBeTruthy();
  }));
});
