import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAttendance, attendance } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  attendanceArray :IAttendance[] = []
  attendanceObj :attendance =  new attendance();
  employeeArray:any []= []



  constructor(private empSer:EmployeeService){

  }
  ngOnInit(): void {
    this.getEmployee();
    this.loadAllAttendance()

  }

loadAllAttendance()
{
this.empSer.getAllAttendance().subscribe((res:any)=>{
    this.attendanceArray = res.data
  })
}
getEmployee()
{
  this.empSer.getAllEmployee().subscribe((res:any)=>{
this.employeeArray = res.data
  })
}

onSave()
{
  this.empSer.addAttendance(this.attendanceObj).subscribe((res:any)=>{
if(res.result){
  this.loadAllAttendance()
  this.  attendanceObj  =  new attendance();

} 
alert(res.message)

})
}


onDelete(attendanceId:number){
  debugger
  this.empSer.deleteAttandenceById(attendanceId).subscribe((res: any) => {
    debugger
    if (res.result) {
      this.loadAllAttendance()
      alert(res.message)

    } else {
      alert(res.message)

    }
  })
}
reset()
{
  this.attendanceObj = {
    
      "attendanceId": 0,
      "employeeId": 0,
      "attendanceDate": undefined ,
      "inTime":undefined,
      "outTime":undefined ,
      "isFullDay": false
    
  }
}
}
