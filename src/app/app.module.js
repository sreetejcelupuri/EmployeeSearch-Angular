"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var employee_component_1 = require("./employee/employee.component");
var search_component_1 = require("./search/search.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeForm_component_1 = require("./employee/employeeForm.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'profile', component: employee_component_1.EmployeeComponent },
    { path: 'employeesearch', component: search_component_1.SearchComponent },
    { path: 'profile/editEmployee', component: employeeForm_component_1.EmployeeFormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    //{ path: '**', component: PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, employee_component_1.EmployeeComponent, search_component_1.SearchComponent, employeeList_component_1.EmployeeListComponent, employeeForm_component_1.EmployeeFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map