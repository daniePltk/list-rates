import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rate-name',
  templateUrl: './rate-name.component.html',
  styleUrls: ['./rate-name.component.scss']
})
export class RateNameComponent implements OnInit {
  @Input() rateData;
  @Input() index;
  constructor() { }

  ngOnInit(): void {
  }

}
