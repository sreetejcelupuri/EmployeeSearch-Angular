import { Component } from '@angular/core'
import { IEmployee } from './employee';

@Component({
    selector: 'my-employeelist',
    templateUrl: 'app/employee/employeeList.component.html'
})
export class EmployeeListComponent {
    employees: IEmployee[];

    constructor() {
        this.employees = [
            { employeeName: 'Sreetej', gender: 'Male', dateOfBirth: '01/11/1988', employeeId: 271792, wiproMail: 'sreetej.celupuri@wipro.com', ntId: 'ceswpx', bpMail: 'sreetej.celupuri@bp.com', phoneNumber: 9441164989 },
            { employeeName: 'malesree', gender: 'Male', dateOfBirth: '01/11/1111', employeeId: 222222, wiproMail: 'celupuri@wipro.com', ntId: '123456', bpMail: 'celupuri@bp.com', phoneNumber: 9999999999 },
            { employeeName: 'femalesree', gender: 'Female', dateOfBirth: '01/11/9999', employeeId: 999999, wiproMail: 'sreetej@wipro.com', ntId: 'qwerty', bpMail: 'sreetej@bp.com', phoneNumber: 8888888888 }
        ];
    }
}