import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeArray: any[] = []
  empObj: any


  constructor(private _empSrv: EmployeeService) {
    this.reset();
  }

  loadAllEmployee() {
    debugger
    this._empSrv.getAllEmployee().subscribe((res: any) => {
      debugger
      this.employeeArray = res.data;
    })
  }

  onSave() {
    debugger
    this._empSrv.createEmployee(this.empObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        this.loadAllEmployee()
        alert(res.message)

      } else {
        alert(res.message)

      }

    })
  }
  onEdit(id:number) {
    debugger
    this._empSrv.getEmpById(id).subscribe((res: any) => {
      debugger
      this.empObj = res.data;

    })
  }
  onUpdate(){
    debugger
    this._empSrv.updateEmployee(this.empObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        this.loadAllEmployee()
        alert(res.message)
        this.reset()

      } else {
        alert(res.message)

      }

    })
}
onDelete(empId:number)
{
  debugger
  this._empSrv.deleteEmpById(empId).subscribe((res: any) => {
    debugger
    if (res.result) {
      this.loadAllEmployee()
      alert(res.message)

    } else {
      alert(res.message)

    }
  })
}
  
  reset() {
    this.empObj = {
      "empId": 0,
      "empName": '',
      "empContactNo": '',
      "empAltContactNo": '',
      "empEmail": '',
      "addressLine1": '',
      "addressLine2": '',
      "pincode": '',
      "city": '',
      "state": '',
      "bankName": '',
      "iFSC": '',
      "accountNo": '',
      "bankBranch": '',
      "salary": 0
    }
  }

  ngOnInit(): void {
    this.loadAllEmployee()
  }


  

  
}
