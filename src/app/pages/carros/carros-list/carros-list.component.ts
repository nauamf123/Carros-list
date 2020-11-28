import { Component, OnInit } from '@angular/core';
import { CarrosTableService } from './carros-list-service.service';




@Component({
  selector: 'ngx-customers-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent implements OnInit {

  constructor(public service : CarrosTableService) { }

  ngOnInit(): void {
  }

}
