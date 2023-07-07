import { Component, Input } from '@angular/core';
import { MockRatesDataService } from '../mock-rates-data.service';

@Component({
  selector: 'rates-list',
  templateUrl: './rates-list.component.html',
  styleUrls: ['./rates-list.component.scss']
})
export class RatesListComponent {
  mockedData: any[];
  selectedCategory: string;

  constructor(private mockDataService: MockRatesDataService) {}

  ngOnInit() {
    this.mockDataService.getMockedRatesData().subscribe(data => {
      this.mockedData = data;
    });
  }

  filterResults() {
   // if (this.selectedCategory === 'download') {
      this.mockedData = this.mockedData.sort((a, b) => {
        return a[this.selectedCategory] - b[this.selectedCategory];
      });
  //  } 
  }
}
