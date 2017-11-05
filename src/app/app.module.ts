import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchComponent } from './search/search.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeFormComponent } from './employee/employeeForm.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: EmployeeComponent },
    { path: 'employeesearch', component: SearchComponent },
    { path: 'profile/editEmployee', component: EmployeeFormComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, EmployeeComponent, SearchComponent, EmployeeListComponent,EmployeeFormComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
