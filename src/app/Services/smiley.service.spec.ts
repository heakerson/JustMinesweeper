import { TestBed, inject } from '@angular/core/testing';

import { SmileyService } from './smiley.service';

describe('SmileyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmileyService]
    });
  });

  it('should be created', inject([SmileyService], (service: SmileyService) => {
    expect(service).toBeTruthy();
  }));
});
