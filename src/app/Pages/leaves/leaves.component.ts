import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent {
  leaveArray: any[]=[]


  //add leave
  leaveObj: any = {

    "leaveId": 0,
    "employeeId": 604,
    "leaveDate": "2023-09-11T13:37:03.810Z",
    "leaveReason": "",
    "noOfFullDayLeaves": 0,
    "noOfHalfDayLeaves": 0

  }
  employeeArray: any[] = []

  constructor(private advser: EmployeeService) {

  }
  ngOnInit(): void {
    this.getEmployee();
    this.loadAllleave();

  }
  getEmployee() {
    //debugger
    this.advser.getAllEmployee().subscribe((res: any) => {
      //debugger
      this.employeeArray = res.data
    })
  }



  loadAllleave() {
    this.advser.getAllLeave().subscribe((res: any) => {
      this.leaveArray = res.data
    })
  }


  onSave() {
    this.advser.addLeave(this.leaveObj).subscribe((res: any) => {
      if (res.result) {
        this.loadAllleave()
        alert(res.message)

      }
      else{
      alert(res.message)
      }
    })
  }

  onEdit(leaveId: number) {
    //debugger
    this.advser.getLeaveById(leaveId).subscribe((res: any) => {
      //debugger
      this.leaveObj = res.data;
      //debugger
    })
  }
  onUpdate() {
    //debugger
    this.advser.updateAttandance(this.leaveObj).subscribe((res: any) => {
      //debugger
      if (res.result) {
        this.loadAllleave()
        alert(res.message)
        // this.reset()
      } else {
        alert(res.message)

      }

    })
  }
  onDelete(leaveId: number) {
    //debugger
    this.advser.deleteLeaveById(leaveId).subscribe((res: any) => {
      //debugger
      if (res.result) {
        this.loadAllleave()
        alert(res.message)

      } else {
        alert(res.message)

      }
    })
  }


  reset() {

  }

  
}
