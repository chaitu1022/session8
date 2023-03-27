import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor(private appService: AppService) {

  }

  SaveDetails(form: NgForm ) {
    let employee: Employee = form.value;
    this.appService.addEmployee(employee);
    form.reset();
  }
}
