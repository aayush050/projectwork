import { TestBed, inject } from '@angular/core/testing';

import { ProjectworkService } from './projectwork.service';

describe('ProjectworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectworkService]
    });
  });

  it('should be created', inject([ProjectworkService], (service: ProjectworkService) => {
    expect(service).toBeTruthy();
  }));
});
