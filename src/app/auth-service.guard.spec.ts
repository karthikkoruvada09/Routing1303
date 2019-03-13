import { TestBed, async, inject } from '@angular/core/testing';

import { AuthServiceGuard } from './authCan.service.ts';

describe('AuthServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceGuard]
    });
  });

  it('should ...', inject([AuthServiceGuard], (guard: AuthServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
