import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IGNorthwindService } from './ignorthwind.service';

describe('IGNorthwindService', () => {
  let service: IGNorthwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IGNorthwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
