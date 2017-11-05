"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { employeeName: 'Sreetej', gender: 'Male', dateOfBirth: '01/11/1988', employeeId: 271792, wiproMail: 'sreetej.celupuri@wipro.com', ntId: 'ceswpx', bpMail: 'sreetej.celupuri@bp.com', phoneNumber: 9441164989 },
            { employeeName: 'malesree', gender: 'Male', dateOfBirth: '01/11/1111', employeeId: 222222, wiproMail: 'celupuri@wipro.com', ntId: '123456', bpMail: 'celupuri@bp.com', phoneNumber: 9999999999 },
            { employeeName: 'femalesree', gender: 'Female', dateOfBirth: '01/11/9999', employeeId: 999999, wiproMail: 'sreetej@wipro.com', ntId: 'qwerty', bpMail: 'sreetej@bp.com', phoneNumber: 8888888888 }
        ];
    }
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'my-employeelist',
        templateUrl: 'app/employee/employeeList.component.html'
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map