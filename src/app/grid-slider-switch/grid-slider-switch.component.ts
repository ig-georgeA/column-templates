import { Component, OnInit } from '@angular/core';
import { EmployeesType, ProductsType } from '../services/northwind-model';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid-slider-switch',
  templateUrl: './grid-slider-switch.component.html',
  styleUrls: ['./grid-slider-switch.component.scss']
})
export class GridSliderSwitchComponent implements OnInit {
  public northwindProducts!: ProductsType[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('ProductsType').subscribe(data => this.northwindProducts = data);
  }
}
