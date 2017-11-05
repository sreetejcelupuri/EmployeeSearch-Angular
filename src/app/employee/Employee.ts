export interface IEmployee{
    employeeName: string;
    employeeId: number;
    ntId: string;
    gender: string;
    wiproMail: string;
    bpMail: string;
    dateOfBirth: string;
    phoneNumber: number;
}

export class Employee implements IEmployee
{
    public employeeName: string;
    public employeeId: number;
    public ntId: string;
    public gender: string;
    public wiproMail: string;
    public bpMail: string;
    public dateOfBirth: string;
    public phoneNumber: number;

    constructor(employeeName: string, employeeId: number, ntId: string, gender: string, wiproMail: string, bpMail: string, dateOfBirth: string, phoneNumber: number) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.ntId = ntId;
        this.gender = gender;
        this.wiproMail = wiproMail;
        this.bpMail = bpMail;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
    }
}