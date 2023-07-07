import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MockRatesDataService {

  constructor() { }

    private mockedData = [
      { 
        name: 'Popular Tarif',
        download: 100,
        upload: 40,
        benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
        price: 60.45
      },
      { 
        name: 'Normal Tarif',
        download: 200,
        upload: 60,
        benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
        price: 80.84
      },
      { 
        name: 'Special Tarif',
        download: 1000,
        upload: 200,
        benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
        price: 123.45
      },
      { 
        name: 'Budget Tarif',
        download: 16,
        upload: 6,
        benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
        price: 28.99
      },
      { 
        name: 'Sale Tarif',
        download: 10,
        upload: 2,
        benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
        price: 23.5
      }
    ];

     
      getMockedRatesData(): Observable<any[]> {
        return of(this.mockedData);
      }
}
