import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
    selector: 'app-employee-form',
    templateUrl: 'app/employee/employeeForm.component.html'
})

export class EmployeeFormComponent {

    genders = ['Select Gender', 'Male','Female'];

    model = new Employee('Sreetej', 271792, null, this.genders[1], null, null,null,null);

    submitted = false;

    onSubmit() { this.submitted = true; }

    newEmployee() {
        this.model = new Employee(null,null,null,null,null,null,null,null);
    }
}