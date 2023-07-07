import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate-price',
  templateUrl: './rate-price.component.html',
  styleUrls: ['./rate-price.component.scss']
})
export class RatePriceComponent implements OnInit {
  @Input() rateData;
  constructor() { }

  ngOnInit(): void {
  }

}
