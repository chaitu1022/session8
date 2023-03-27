import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private employees: Employee[] = [];

  counter: number = 0;

  constructor() { }

  addEmployee = (emp: Employee) => { 
    this.counter++
    this.employees.push({...emp, id: this.counter });
    console.log(this.employees);
  }
  
  getEmployee = () => this.employees;

  getEmployeeByID = (id: number) => this.employees.find(x => x.id === id);

}



