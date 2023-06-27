import { Component, OnInit } from '@angular/core';
import { EmployeeInputModel } from '../services/ignorthwind-model';
import { IGNorthwindService } from '../services/ignorthwind.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public iGNorthwindEmployeeInputModel!: EmployeeInputModel[];

  constructor(
    private iGNorthwindService: IGNorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.iGNorthwindService.getEmployeeInputModel().subscribe(data => this.iGNorthwindEmployeeInputModel = data);
  }
}
