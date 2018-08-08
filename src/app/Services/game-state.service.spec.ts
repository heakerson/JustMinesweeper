import { TestBed, inject } from '@angular/core/testing';

import { GameStateManager } from './game-state.service';

describe('GameStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStateManager]
    });
  });

  it('should be created', inject([GameStateManager], (service: GameStateManager) => {
    expect(service).toBeTruthy();
  }));
});
