import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  Employees: Employee[] = [];

  constructor(private appService: AppService) {
    
  }

  ngOnInit() {
    this.Employees = this.appService.getEmployee();
  }

}


// if (this.activatedRoute.snapshot.paramMap.has('id')) {
//   this.previouslySelectedId =  Number(this.activatedRoute.snapshot.paramMap.get("id"));
//   console.log(this.previouslySelectedId);
// }
