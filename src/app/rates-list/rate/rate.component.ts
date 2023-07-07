import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() rateData;
  @Input() index;

  
  constructor() { }

  ngOnInit(): void {
  }

}
