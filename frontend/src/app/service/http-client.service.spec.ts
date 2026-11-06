import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

import {HttpClientService} from './http-client.service';

describe('HttpClientService', () => {
  let service: HttpClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(HttpClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET books', () => {
    service.getBooks().subscribe(books => expect(books.length).toBe(0));
    const req = httpMock.expectOne('http://localhost:8080/books/get');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
