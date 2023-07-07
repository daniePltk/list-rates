import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss']
})
export class RateDetailsComponent implements OnInit {
  @Input() rateData;
  constructor() { }

  ngOnInit(): void {
  }
}
